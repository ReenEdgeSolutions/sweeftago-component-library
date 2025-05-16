import { Stack, Typography } from "@mui/material"
import { StyledImage } from "../../../../../components/StyledImage"
import chatIcon from "../assets/icons/whatsapp-icon.svg"

interface WhatsappChatSupportProps {
  handleWhatsappChatClick: () => void;
}

export const WhatsappChatSupport = ({
  handleWhatsappChatClick,
}: WhatsappChatSupportProps) => {
  return(
    <Stack
      onClick={handleWhatsappChatClick}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #E9E9E9", // Added border to match the design
        borderRadius: "10px",
        p: {xs: "20px 16px", sm: "20px"},
        gap: "24px",
        width: {xs: "100%", sm: "100%", md: "100%"}, // Ensure full width on all screens
        mx: "auto",
        cursor: "pointer", // Added cursor:pointer for better UX
        "&:hover": {
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)", // Optional: adds subtle hover effect
        },
      }}
    >
      <StyledImage
        src={chatIcon}
        alt="Whatsapp Chat Support"
        sx={{
          width: "56px",
          height: "56px",
          mx: "auto",
        }}
      />

      <Stack spacing={"8px"} textAlign={"center"}>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: {
              xs: "14px",
              md: "18px",
            },
            lineHeight: {
              xs: "130%",
              md: "120%",
            },
            color: "#252423",
          }}
        >
          Chat with Support
        </Typography>

        <Typography
          sx={{
            fontWeight: 400,
            fontSize: {
              xs: "14px",
              sm: "16px",
            },
            lineHeight: "140%",
            color: "#615D5D",
          }}
        >
          Reach us anytime on WhatsApp
        </Typography>
      </Stack>
    </Stack>
  )
}