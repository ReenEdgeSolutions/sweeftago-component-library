import { Stack, Typography } from "@mui/material"
import { pxToRem } from "../../common/utils"
import { AppButton } from "../AppButton"
import { RowStack } from "../RowStack";

interface AppEmailSentModalProps {
  title: string;
  label: string;
  buttonLabel: string;
  handleCheckEmail: () => void;
  handleResend: () => void;
  isCountdownActive: boolean;
  time: number;
  canResend: boolean;
  hasConfirmedOnce: boolean;
}

export const AppEmailSentModal = ({
  title,
  label,
  buttonLabel,
  handleCheckEmail,
  handleResend,
  isCountdownActive,
  time,
  canResend,
  hasConfirmedOnce
}: AppEmailSentModalProps) => {
  return(
    <Stack
      sx={{
        p: "24px",
        width: {xs: "100%", sm: "400px", md: "500px"},
      }}
    >
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
        onClick={handleCheckEmail}
      >
        {buttonLabel}
      </AppButton>

      <RowStack mt="40px" justifyContent={"center"} alignItems={"center"} spacing={"5px"}>
        <Typography
          sx={{
            fontSize: {
              xs: "14px",
              md: "16px"
            },
            lineHeight: {xs:"150%",md: "140%"},
            fontWeight: 400,
            color: "#252423"
          }}
        >
          Did not receive it?
        </Typography>

        <AppButton
          variant="text"
          onClick={handleResend}
          disabled={!hasConfirmedOnce && !canResend}
          sx={{
            fontSize: {xs: pxToRem(14), sm: pxToRem(16)},
            fontWeight: 400,
            color: canResend ? "#FF7A00" : "#252423",
            lineHeight: "140%",
            textDecoration: canResend ? "none" : "underline",
            padding: "0px",
            backgroundColor: "transparent",
            "&:hover":{
              backgroundColor: "transparent"
            }
          }}
          disableArrow
        >
          {isCountdownActive ? `Resend in ${time} sec` : "Resend"}
        </AppButton>
      </RowStack>
    </Stack>
  )
}