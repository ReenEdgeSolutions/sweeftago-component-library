import {
  MenuItem,
  Radio,
  useTheme,
  Box,
  CircularProgress,
} from "@mui/material";
import {
  AppTextField,
  AppTextFieldProps,
} from "../AppTextField";
import { AppSearchField } from "../AppSearchField";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useField } from "formik";
import React, {
  useState,
  useMemo,
  useRef,
  useEffect,
} from "react";

export type AppDropdownFieldProps = Omit<
  AppTextFieldProps,
  "select" | "value" | "onChange" | "name"
> & {
  name: string;
  dropdownData: string[];
  onChange?: (event: React.ChangeEvent<{ value: unknown }>) => void;
  showRadioSelection?: boolean;
  maxHeight?: number | string;
  onDropdownOpen?: () => void;
  onDropdownClose?: () => void;
  enableSearch?: boolean;
  searchPlaceholder?: string;
  onSearchChange?: (searchTerm: string) => void;
  onScrollEnd?: () => void;
  maxDropdownWidth?: number | string;
  loading?: boolean; // ✅ Added loading support
};

export const AppDropdownField = ({
  name,
  dropdownData,
  onChange,
  placeholder,
  showRadioSelection = false,
  maxHeight = 300,
  onDropdownOpen,
  onDropdownClose,
  enableSearch = false,
  searchPlaceholder = "Search...",
  onSearchChange,
  onScrollEnd,
  maxDropdownWidth,
  loading = false,
  ...rest
}: AppDropdownFieldProps) => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState<string>("");

  if (!name || !Array.isArray(dropdownData)) {
    return (
      <AppTextField
        select
        fullWidth
        disabled
        placeholder={placeholder}
        {...rest}
      >
        <MenuItem disabled value="">
          <em>No data available</em>
        </MenuItem>
      </AppTextField>
    );
  }

  const [field, meta] = useField<string>(name);
  const hasError = Boolean(meta.touched && meta.error);
  const hasValue = field.value !== "" && field.value !== undefined;

  const [inputWidth, setInputWidth] = useState<number | null>(null);
  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      setInputWidth(inputRef.current.offsetWidth);
    }
  }, [inputRef.current]);

  const safeDropdownData = useMemo(() => {
    return dropdownData.filter(
      (item): item is string => typeof item === "string" && item.trim().length > 0
    );
  }, [dropdownData]);

  const filteredDropdownData = useMemo(() => {
    if (!enableSearch || !searchTerm) return safeDropdownData;

    const term = searchTerm.toLowerCase();
    const startsWithMatches = safeDropdownData.filter((option) =>
      option.toLowerCase().startsWith(term)
    );
    const includesMatches = safeDropdownData.filter(
      (option) =>
        !option.toLowerCase().startsWith(term) &&
        option.toLowerCase().includes(term)
    );

    return [...startsWithMatches, ...includesMatches];
  }, [safeDropdownData, searchTerm, enableSearch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange?.(value);
  };

  const handleDropdownClose = () => {
    setSearchTerm("");
    onDropdownClose?.();
  };

  const handleDropdownChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    field.onChange(e);
    onChange?.(e);
  };

  return (
    <Box ref={inputRef} sx={{ width: "100%" }}>
      <AppTextField
        select
        {...field}
        {...rest}
        error={hasError}
        helperText={hasError ? meta.error : rest.helperText}
        onChange={handleDropdownChange}
        fullWidth
        SelectProps={{
          IconComponent: KeyboardArrowDown,
          displayEmpty: true,
          onOpen: onDropdownOpen,
          onClose: handleDropdownClose,
          renderValue: (selected) =>
            !selected || selected === "" ? placeholder : (selected as string),
          MenuProps: {
            PaperProps: {
              sx: {
                width: maxDropdownWidth || inputWidth || 300,
                maxHeight: enableSearch
                  ? typeof maxHeight === "number"
                    ? maxHeight + 60
                    : maxHeight
                  : maxHeight,
                overflowY: enableSearch ? "visible" : "auto",
                padding: enableSearch ? "8px" : "16px",
                borderRadius: "10px",
              },
            },
            transitionDuration: 300,
            ...(enableSearch && {
              MenuListProps: {
                sx: {
                  padding: 0,
                  maxHeight: maxHeight,
                  overflowY: "auto",
                },
                onScroll: (e: React.UIEvent<HTMLUListElement>) => {
                  const list = e.currentTarget;
                  const nearBottom =
                    list.scrollTop + list.clientHeight >= list.scrollHeight - 20;
                  if (nearBottom) onScrollEnd?.();
                },
              },
            }),
          },
          sx: {
            ".MuiSvgIcon-root": {
              color: theme.palette.text.primary,
              transition: "transform 0.3s ease-in-out",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#D5D5D5",
              borderWidth: "1px",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#D5D5D5",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#D5D5D5",
            },
            ...(hasValue
              ? {}
              : {
                  color: "text.secondary",
                  fontStyle: "italic",
                }),
          },
          ...rest.SelectProps,
        }}
      >
        {enableSearch && (
          <Box
            sx={{
              position: "sticky",
              top: 0,
              zIndex: 1,
              backgroundColor: "white",
              padding: "8px",
              borderBottom: "1px solid #e0e0e0",
              marginBottom: "4px",
            }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <AppSearchField
              placeholder={searchPlaceholder}
              value={searchTerm}
              onChange={handleSearchChange}
              useCustomContainer={true}
              size="small"
              sx={{
                "& .MuiInputBase-root": {
                  borderRadius: "8px",
                  backgroundColor: "#F5F5F5",
                  fontSize: "14px",
                },
              }}
              onKeyDown={(e) => e.stopPropagation()}
              onClick={(e) => e.stopPropagation()}
            />
          </Box>
        )}

        {!showRadioSelection && (
          <MenuItem disabled value="">
            <em>{placeholder}</em>
          </MenuItem>
        )}

        {enableSearch && searchTerm && filteredDropdownData.length === 0 && (
          <MenuItem disabled>
            <em>No results found</em>
          </MenuItem>
        )}

        {filteredDropdownData.map((option, index) =>
          typeof option === "string" ? (
            <MenuItem
              key={index}
              value={option}
              sx={{
                ...(showRadioSelection && {
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  pl: 2,
                }),
              }}
            >
              {showRadioSelection && (
                <Radio
                  checked={field.value === option}
                  size="small"
                  sx={{
                    padding: 0,
                    marginRight: 1,
                    color: theme.palette.action.disabled,
                    "&.Mui-checked": {
                      color: "#F98D31",
                    },
                    pointerEvents: "none",
                  }}
                />
              )}
              {option}
            </MenuItem>
          ) : null
        )}

        {loading && (
          <MenuItem disabled>
            <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
              <CircularProgress size={18} />
            </Box>
          </MenuItem>
        )}
      </AppTextField>
    </Box>
  );
};
