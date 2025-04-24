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
};

export const AppDropdownField = ({
  name,
  dropdownData,
  ...rest
}: AppDropdownFieldProps) => {
  const theme = useTheme();
  // Connect to Formik
  const [field, meta] = useField<string>(name);
  const hasError = Boolean(meta.touched && meta.error);

  return (
    <AppTextField
      {...rest}
      select
      name={field.name}
      value={field.value}
      onChange={field.onChange}
      onBlur={field.onBlur}
      error={hasError}
      helperText={hasError ? meta.error : rest.helperText}
      SelectProps={{
        IconComponent: KeyboardArrowDown,
        sx: {
          ".MuiSvgIcon-root": {
            color: theme.palette.text.primary,
          },
        },
        MenuProps: {
          PaperProps: {
            sx: {
              borderRadius: "16px",
              padding: {
                xs: "8px 16px",
                sm: "10px 40px",
              },
            },
          },
        },
      }}
    >
      {dropdownData.map((option) => (
        <MenuItem
          key={option}
          value={option}
          sx={{
            color: theme.palette.text.primary,
            fontFamily: theme.font.default,
            fontWeight: 500,
          }}
        >
          {option}
        </MenuItem>
      ))}
    </AppTextField>
  );
};
