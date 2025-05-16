import { AppTextField, AppTextFieldProps } from "../AppTextField";
import { useAppPasswordField } from "./common/hooks";
import { InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export type AppPasswordFieldProps = Omit<AppTextFieldProps, "type">;

export const AppPasswordField = (props: AppPasswordFieldProps) => {
  const { obscurePassword, handleVisibilityButtonClicked } = useAppPasswordField();

  return (
    <AppTextField
      {...props}
      type={obscurePassword ? "password" : "text"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={handleVisibilityButtonClicked}
              edge="end"
              aria-label="toggle password visibility"
              sx={{
                padding: 0,
                "& svg": {
                  width: 24,
                  height: 24,
                  marginRight: "20px",
                },
              }}
            >
              {obscurePassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
