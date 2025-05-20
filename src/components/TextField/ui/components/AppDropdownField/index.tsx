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
  ...rest
}: AppDropdownFieldProps) => {
  const theme = useTheme();
  // Connect to Formik
  const [field, meta] = useField<string>(name);
  const hasError = Boolean(meta.touched && meta.error);

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
        sx: {
          ".MuiSvgIcon-root": {
            color: theme.palette.text.primary,
          },
        },
        ...rest.SelectProps
      }}
    >
      {dropdownData.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </AppTextField>
  );
};