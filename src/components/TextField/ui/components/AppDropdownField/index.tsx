import { MenuItem, useTheme } from "@mui/material";
import { AppTextField, AppTextFieldProps } from "../AppTextField";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useField } from "formik";

export type AppDropdownFieldProps = Omit<
  AppTextFieldProps,
  "select" | "value" | "onChange" | "name"
> & {
  name: string;
  dropdownData: string[];
  onChange?: (e: React.ChangeEvent<{ value: unknown }>) => void;
};

export const AppDropdownField = ({
  name,
  dropdownData,
  onChange,
  placeholder,
  ...rest
}: AppDropdownFieldProps) => {
  const theme = useTheme();
  // Connect to Formik
  const [field, meta] = useField<string>(name);
  const hasError = Boolean(meta.touched && meta.error);

  // Check if field has a value for proper placeholder display
  const hasValue = field.value !== "" && field.value !== undefined;

  return (
    <AppTextField
      select
      {...field}
      {...rest}
      error={hasError}
      helperText={hasError ? meta.error : rest.helperText}
      onChange={(e) => {
        field.onChange(e);
        if (onChange) {
          onChange(e as React.ChangeEvent<{ value: unknown }>);
        }
      }}
      SelectProps={{
        IconComponent: KeyboardArrowDown,
        displayEmpty: true,
        renderValue: hasValue ? undefined : () => placeholder,
        sx: {
          ".MuiSvgIcon-root": {
            color: theme.palette.text.primary,
          },
          // Apply styles when placeholder is showing
          ...(hasValue ? {} : {
            color: "text.secondary",
            fontStyle: "italic"
          })
        },
        ...rest.SelectProps
      }}
    >
      {/* Add empty option for placeholder - appears when nothing is selected */}
      <MenuItem disabled value="">
        <em>{placeholder}</em>
      </MenuItem>
      {dropdownData.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </AppTextField>
  );
};