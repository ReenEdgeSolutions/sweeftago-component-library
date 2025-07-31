import { Box, Stack, Typography } from "@mui/material"
import { pxToRem } from '../../common';
import { AppButton } from "../AppButton";
import { RowStack } from "../RowStack";
import { StyledImage } from "../StyledImage";

interface AppTwinBtnSuccessProps {
  title: string;
  description: string;
  leftButtonLabel?: string;
  rightButtonLabel: string;
  handleLeftBtnClick?: () => void;
  handleRightBtnClick: () => void;
  showLeftButton?: boolean;
  successIcon: string;
}

export const AppTwinBtnSuccess = ({
  title,
  description,
  leftButtonLabel,
  rightButtonLabel,
  handleLeftBtnClick,
  handleRightBtnClick,
  showLeftButton = false,
  successIcon
}: AppTwinBtnSuccessProps) => {
  return(
    <Stack
      sx={{
        p: "32px",
        width: {xs: "90%", sm:"507px"},
        maxWidth: "507px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{
        width: {xs: "80%", sm:"400px"},
        height: {xs:"auto", sm:"300px"},
        mx: "auto",
        display: "block"
      }}>
        <StyledImage
          src={successIcon}
          alt="success"
          sx={{
            width: "100%",
            height: "100%",
            mx: "auto",
            display: "block",
          }}
        />
      </Box>

      <Typography
        sx={{
          // fontFamily: "manrope"
          fontWeight: 600,
          fontSize: pxToRem(24),
          lineHeight: "120%",
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontWeight: 400,
          fontSize: pxToRem(18),
          lineHeight: "140%",
          marginTop: "5px",
        }}
      >
        {description}
      </Typography>

      <RowStack spacing ="16px" sx={{mt: "50px" , width: "100%"}}>
        {showLeftButton && (
          <AppButton
            disableArrow
            fullWidth
            onClick={handleLeftBtnClick}
            sx={{
              backgroundColor: "transparent",
              color: "#252423",
              border: "1px solid #F98D31",
              "&:hover": {
                backgroundColor: "transparent",
              }
            }}
          >
            {leftButtonLabel}
          </AppButton>
        )}

        <AppButton
          disableArrow
          variant="contained"
          fullWidth
          onClick={handleRightBtnClick}
        >
          {rightButtonLabel}
        </AppButton>
      </RowStack>

    </Stack>
  )
}