import { useMemo } from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import { Box, Typography, Collapse, styled } from "@mui/material";
import { useTextFieldStyles } from "../../../common";

type AppOtpInputProps = {
  otp: string;
  onchange?: (value: string) => void;
  errorMessage?: string;
  hasError?: boolean;
  length?: number | undefined;
  oncomplete?: (value: string) => void;
};

// Responsive OTP input with adaptive gap and width
const CustomOtpInput = styled(MuiOtpInput)`
  display: flex;
  // Reduce gap on smaller screens
  gap: 8px;

  @media (min-width: 600px) {
    gap: 16px;
  }

  background: transparent;
  width: 100%;
  justify-content: center;
`;

export function AppOtpInput({
  otp,
  onchange,
  errorMessage,
  hasError,
  length,
  oncomplete
}: AppOtpInputProps) {
  const styles = useTextFieldStyles({
    borderRadius: "8px",
    borderWidth: "1px",
    padding: { xs: "12px 16px !important", sm: "12px 16px !important" },
    fontSize: { xs: "0.875rem", md: "0.875rem" },
    error: hasError,
    success: false,
  });

  const textFieldStyles = useMemo(() => {
    const defaultBorder = "1px solid #C4C4C4";
    const errorBorder = "1px solid #D87759";

    return {
      ...styles,
      "& .MuiOutlinedInput-root": {
        width: { xs: "40px", sm: "51px" },
        height: { xs: "40px", sm: "49px" },
        borderRadius: "10px",
        border: hasError ? errorBorder : defaultBorder,
        backgroundColor: "transparent",

        "& fieldset": {
          border: "none", // remove default outline
        },

        "&:hover fieldset": {
          border: "none", // remove hover outline
        },

        "&.Mui-focused fieldset": {
          border: "none", // remove focused outline
        },

        "&.Mui-disabled": {
          border: defaultBorder,
          backgroundColor: "transparent",
        },

        "&:hover": {
          border: hasError ? errorBorder : defaultBorder,
        },

        "&.Mui-focused": {
          border: hasError ? errorBorder : defaultBorder,
          boxShadow: "none",
        },
      },
    };
  }, [styles, hasError]);



  return (
    <Box sx={{ width: "100%" }}>
      <CustomOtpInput
        autoFocus
        value={otp}
        length={length || 6}
        onChange={onchange}
        onComplete={oncomplete}
        sx={textFieldStyles}
        TextFieldsProps={{ placeholder: '-' }}
      />

      <Collapse in={hasError} orientation="vertical">
        <Box sx={{ marginTop: "6px" }}>
          <Typography
            variant="body2"
            sx={{
              color: "#D87759",
              fontSize: ".875rem",
              fontWeight: 500,
            }}
          >
            {errorMessage}
          </Typography>
        </Box>
      </Collapse>
    </Box>
  );
}