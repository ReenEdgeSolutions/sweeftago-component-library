import { AppBar, IconButton, Toolbar, Typography, useMediaQuery, useTheme} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { RowStack } from "../../../../RowStack";
import { Profile, ProfileProps } from "./ui/components";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import whatsApp from '../../assets/icons/whatsapp.svg';
import { StyledImage } from "../../../../StyledImage";

export type AppDashboardHeaderProps = {
  profileProps: ProfileProps;
  onChatToggle?: () => void;
  onMobileMenuToggle?: () => void; // New prop for mobile menu
};

export function AppDashboardHeader({
  profileProps,
  onChatToggle,
  onMobileMenuToggle,
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


              <Typography
                variant="h6"
                sx={{
                  fontWeight: 500,
                  fontSize: "16px",
                  display: { xs: "block", sm: "none" },
                  color: "#252423"
                }}
              >
                Home
              </Typography>
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
            {/* Left side - Navigation title */}
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

            {/* Right side - chat button, notifications, profile */}
            <RowStack spacing={"16px"} alignItems="center">
              {/* Chat toggle button */}
              <IconButton
                onClick={onChatToggle}
                sx={{
                  backgroundColor: "#E4FCD3",
                  borderRadius: "10px",
                  padding: "14px 16px",
                  "&:hover": {
                    backgroundColor: "#d3f5bf",
                  },
                }}
              >
                <RowStack spacing={1} alignItems="center">
                  <WhatsAppIcon/>
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
              <Profile {...profileProps} />
            </RowStack>
          </RowStack>
        </Toolbar>
      )}
    </AppBar>
  );
}