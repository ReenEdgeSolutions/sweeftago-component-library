import { alpha, AppBar, Box, IconButton, Toolbar, Typography, useMediaQuery, useTheme} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { RowStack } from "../../../../RowStack";
import { Profile, ProfileProps } from "./ui/components";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import whatsApp from '../../assets/icons/whatsapp.svg';
import { StyledImage } from "../../../../StyledImage";
import { pxToRem } from "../../../../../common";
import { ReactNode } from "react";
import { AppLogo } from "src/components/AppLogo";

export type AppDashboardHeaderProps = {
  profileProps: ProfileProps;
  onChatToggle?: () => void;
  onMobileMenuToggle?: () => void;
  showProfile?: boolean;
  showHome?: boolean;
  children?: ReactNode
  showHeaderLogo?: boolean;
};

export function AppDashboardHeader({
  profileProps,
  onChatToggle,
  onMobileMenuToggle,
  showProfile = true,
  showHome,
  children,
  showHeaderLogo = false,
}: AppDashboardHeaderProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar
      elevation={0}
      position={"relative"}
      sx={{
        background: "#F9F9F9",
        borderBottom: "1px solid #E1E1E1",
      }}
    >
      {isMobile ? (
        <Toolbar
          sx={{
            padding: "0",
            width: "100%",
            height: "56px",
            background: "#F9F9F9",
            minHeight: "56px important",
          }}
        >
          <RowStack
            justifyContent={"space-between"}
            sx={{
              width: "100%",
              padding: "12px 16px",
            }}
          >
            {/* Mobile Menu Button */}
            <RowStack spacing="20px" flex={1}>
              <IconButton
                onClick={onMobileMenuToggle}
                sx={{
                  padding: '8px',
                  color: '#615D5D',
                }}
              >
                <MenuIcon />
              </IconButton>
              {showHome && (
              <Typography
                // variant="h6"
                sx={{
                  fontWeight: 400,
                  fontSize: pxToRem(16),
                  display: { xs: "block", sm: "none" },
                  lineHeight: '24px',
                  color: "#615D5D"
                }}
              >
                Home
              </Typography>
              )}
            {!showHome && children}
            </RowStack>


            {/* Mobile Profile - Simplified */}
            <IconButton
              onClick={onChatToggle}
            >
              <StyledImage
                src={whatsApp}
                alt="whatsapp icon"
                sx={{
                  width: "24px",
                  height: "24px",
                }}
              />
            </IconButton>
          </RowStack>
        </Toolbar>
      ): (
        <Toolbar
          sx={{
            padding: "0",
            width: "100%",
            height: "101px",
            background: "#F9F9F9",
          }}
        >
          <RowStack
            justifyContent={"space-between"}
            sx={{
              width: "100%",
              padding: {
                xs: "12px 15px",
                sm: "14px 20px",
                md: "16px 30px",
              },
            }}
          >
            <RowStack>
              {showHeaderLogo && (
                <Box mr="30px" borderRight="1px solid #D6D4D1">
                  <AppLogo sx={{width: "148px", height: "49.33px"}}/>
                </Box>
              )}

              {showHome && (
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 400,
                    fontSize: "16px",
                    display: { xs: "none", sm: "block" },
                    color: "#615D5D"

                  }}
                >
                  Home
                </Typography>
              )}
              {!showHome && children}
            </RowStack>

            {/* Right side - chat button, notifications, profile */}
            <RowStack spacing={"19px"} alignItems="center">
              {/* Chat toggle button */}
              <IconButton
                onClick={onChatToggle}
                sx={{
                  backgroundColor: "#CFFFD2",
                  borderRadius: "10px",
                  padding: "14px 16px",
                  "&:hover": {
                    backgroundColor: alpha("#CFFFD2", .8),
                  },
                }}
              >
                <RowStack spacing={1} alignItems="center">
                  <WhatsAppIcon />
                  <Typography
                    sx={{
                      color: "#252423",
                      fontSize: "16px",
                      fontWeight: 500,
                      display: { xs: "none", sm: "block" },
                    }}
                  >
                    Switch to chat
                  </Typography>
                </RowStack>
              </IconButton>

              {/* Profile */}
              {showProfile && (
                <Profile {...profileProps} />
              )}
            </RowStack>
          </RowStack>
        </Toolbar>
      )}
    </AppBar>
  );
}