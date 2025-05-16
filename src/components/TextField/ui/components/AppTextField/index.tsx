"use client";

import {
  Box,
  Collapse,
  SxProps,
  TextField,
  TextFieldProps,
  Theme,
  Typography,
} from "@mui/material";
import { useTextFieldStyles } from "../../../common";
import { RowStack } from "../../../../RowStack";

export type AppTextFieldProps = TextFieldProps & {
  borderRadius?: string;
  borderWidth?: string;
  padding?: Record<string, unknown>;
  fontSize?: Record<string, unknown>;
  marginTop?: Record<string, string> | string;
  errorMessage?: string;
  success?: boolean;
  label?: string | undefined;
  themeVariant?: TextFieldProps["variant"];
};

export const AppTextField = (props: AppTextFieldProps) => {
  const {
    error,
    marginTop = {
      xs: "0",
    },
    errorMessage,
    label,
    ...rest
  } = props;

  const styles = useTextFieldStyles({
    ...props,
  });

  // Create a combined sx style object for the TextField
  const textFieldStyles: SxProps<Theme> = {
    ...(styles as Record<string, unknown>),
    ...((rest.sx as Record<string, unknown>) || {}),
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        marginTop,
      }}
    >
      <TextField
        {...rest}
        variant={rest.variant || "outlined"}
        placeholder={rest.placeholder}
        error={error}
        sx={textFieldStyles}
        label={label}
      />

      <Collapse in={error} orientation={"vertical"}>
        <RowStack
          sx={{
            width: "100%",
          }}
          justifyContent={"flex-start"}
        >
          <Typography
            variant={"body1"}
            sx={{
              color: (theme) => theme.palette.error.main,
              fontSize: { xs: ".875rem", md: ".875rem" },
              fontWeight: 500,
              pl: "20px"
            }}
          >
            {errorMessage}
          </Typography>
        </RowStack>
      </Collapse>
    </Box>
  );
};