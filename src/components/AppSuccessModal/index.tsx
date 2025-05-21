import { Stack, Typography } from "@mui/material"
import { AppButton } from "../AppButton";
import { pxToRem } from "../../common/utils";
import successIcon from "./ui/assets/icon/success.png"
import { StyledImage } from "../StyledImage";

interface SuccessSignUpModalProps {
  title: string;
  label: string;
  buttonLabel: string;
  handleButtonClick: () => void;
}

export const AppSuccessModal = ({
  title,
  label,
  buttonLabel,
  handleButtonClick
}: SuccessSignUpModalProps) => {
  return(
    <Stack
      sx={{
        p: "24px",
        width: {xs: "100%", sm: "400px", md: "500px"},
      }}
    >
      <StyledImage
        src={successIcon}
        alt="success"
        sx={{
          width: "60%",
          height: "auto",
          mb: "20px",
          mx: "auto",
          display: "block",
        }}
      />

      <Typography
        sx={{
          // fontFamily: "manrope",
          fontWeight: 600,
          fontSize: {
            xs: pxToRem(18),
            sm: pxToRem(24),
          } ,
          lineHeight: {
            xs: "140%",
            sm: "120%",
          },
          textAlign: {xs: "left", sm: "center"},
          mb: "5px",
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontWeight: 400,
          fontSize: {
            xs: pxToRem(16),
            sm: pxToRem(18),
          },
          lineHeight: "140%",
          textAlign: {xs: "left", sm: "center"},
        }}
      >
        {label}
      </Typography>

        
      <AppButton
        disableArrow
        variant="contained"
        fullWidth
        sx={{mt: "50px"}}
        onClick={handleButtonClick}
      >
        {buttonLabel}
      </AppButton>
    </Stack>
  )
}