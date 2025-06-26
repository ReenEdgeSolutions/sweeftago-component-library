import { MenuItem, Radio, useTheme, Box } from "@mui/material";
import { AppTextField, AppTextFieldProps } from "../AppTextField";
import { AppSearchField } from "../AppSearchField";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useField } from "formik";
import React, { useState, useMemo } from "react";

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
  ...rest
}: AppDropdownFieldProps) => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [field, meta] = useField<string>(name);
  const hasError = Boolean(meta.touched && meta.error);
  const hasValue = field.value !== "" && field.value !== undefined;

  const filteredDropdownData = useMemo(() => {
    if (!enableSearch || !searchTerm) return dropdownData;

    const term = searchTerm.toLowerCase();

    const startsWithMatches = dropdownData.filter((option) =>
      option.toLowerCase().startsWith(term)
    );

    const includesMatches = dropdownData.filter(
      (option) =>
        !option.toLowerCase().startsWith(term) &&
        option.toLowerCase().includes(term)
    );

    return [...startsWithMatches, ...includesMatches];
  }, [dropdownData, searchTerm, enableSearch]);

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
    <AppTextField
      select
      {...field}
      {...rest}
      error={hasError}
      helperText={hasError ? meta.error : rest.helperText}
      onChange={handleDropdownChange}
      SelectProps={{
        IconComponent: KeyboardArrowDown,
        displayEmpty: true,
        onOpen: onDropdownOpen,
        onClose: handleDropdownClose,
        renderValue: (selected) => {
          if (!selected || selected === "") {
            return placeholder;
          }
          return selected as string;
        },
        MenuProps: {
          PaperProps: {
            sx: {
              maxHeight: enableSearch
                ? typeof maxHeight === "number"
                  ? maxHeight + 60
                  : maxHeight
                : maxHeight,
              overflowY: enableSearch ? "visible" : "auto",
              padding: enableSearch ? "8px" : "16px",
              borderRadius: "10px",
              transition: "all 0.3s ease",
              ...(!enableSearch && {
                "&::-webkit-scrollbar": {
                  width: "6px",
                },
                "&::-webkit-scrollbar-track": {
                  background: "#f1f1f1",
                  borderRadius: "3px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#c1c1c1",
                  borderRadius: "3px",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  background: "#a8a8a8",
                },
              }),
            },
          },
          transitionDuration: 300,
          ...(enableSearch && {
            MenuListProps: {
              sx: {
                padding: 0,
                maxHeight: maxHeight,
                overflowY: "auto",
                "&::-webkit-scrollbar": {
                  width: "6px",
                },
                "&::-webkit-scrollbar-track": {
                  background: "#f1f1f1",
                  borderRadius: "3px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#c1c1c1",
                  borderRadius: "3px",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  background: "#a8a8a8",
                },
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

      {filteredDropdownData.map((option, index) => (
        <MenuItem
          key={index}
          value={option}
          sx={{
            ...(showRadioSelection && {
              display: "flex",
              alignItems: "center",
              gap: 1,
              pl: 2,
              mx: 0,
              transition: "background-color 0.2s ease",
            }),
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.04)",
            },
            "&.Mui-focusVisible": {
              backgroundColor: "rgba(0, 0, 0, 0.04)",
            },
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
                "&:hover": {
                  backgroundColor: "transparent",
                },
                pointerEvents: "none",
              }}
            />
          )}
          {option}
        </MenuItem>
      ))}
    </AppTextField>
  );
};
