import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { FAQ, Header, WhatsappChatSupport } from "./ui/blocks";
import { pxToRem } from "../../common/utils";
import { AppSearchField } from "../TextField";

interface AppHelpCenterProps {
  handleSignUpClick: () => void;
  handleSearchClick: () => void;
  handleWhatsappChatClick: () => void;
  faqData: {
    id: number;
    question: string;
    answer: string;
  }[];
}

export const AppHelpCenter = ({
  handleSignUpClick,
  handleSearchClick,
  handleWhatsappChatClick,
  faqData,
}: AppHelpCenterProps) => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange = (panel: number) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return(
    <Box
      sx={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F9F9F9",
      }}
    >
      <Header handleSignUpClick={handleSignUpClick}/>

      <Box
        sx={{
          width: "100%",
          height: "100%" ,
          p:{
            xs: "94px 16px 32px 16px",
            sm: "44px 32px 32px 32px",
          }
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
            maxWidth: "857px",
            width: "100%",
            gap: "33px"
          }}
        >
          <Stack spacing={"32px"} sx={{ width: "100%" }}> {/* Added width: 100% */}
            <Box sx={{ width: "100%" }}> {/* Added width: 100% */}
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: {
                    xs: pxToRem(16),
                    sm: pxToRem(20),
                  },
                  lineHeight: {
                    xs: "140%",
                    sm: "120%",
                  },
                  color: "#252423",
                  mb: "5px",
                }}
              >
                How Can We Help You?
              </Typography>

              <AppSearchField
                onclick={handleSearchClick}
                fullWidth
                placeholder="Search"
                iconPosition="start"
                sx={{
                  backgroundColor: "#F5F5F5",
                  borderRadius: "10px",
                  width: "100%",
                  border: "1px solid #D5D5D5",
                }}
                slotProps={{
                  input: {
                    sx: {
                      fontSize: {xs: "14px", md: "16px"},
                      fontWeight: "400",
                    }
                  }
                }}
              />
            </Box>

            <WhatsappChatSupport handleWhatsappChatClick={handleWhatsappChatClick}/>
          </Stack>

          <FAQ
            faqData={faqData}
            handleChange={handleChange}
            expanded={expanded}
          />
        </Box>
      </Box>
    </Box>
  )
}