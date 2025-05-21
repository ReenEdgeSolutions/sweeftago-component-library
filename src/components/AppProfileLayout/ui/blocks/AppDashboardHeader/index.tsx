import { AppBar,  IconButton, Toolbar, Typography} from "@mui/material";
import { RowStack } from "../../../../RowStack";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export type AppDashboardHeaderProps = {
  onChatToggle?: () => void;
};

export function AppDashboardHeader({
  onChatToggle,
}: AppDashboardHeaderProps) {
  return (
    <AppBar
      elevation={0}
      position={"relative"}
      sx={{
        background: "#F9F9F9",
        borderBottom: "1px solid #E1E1E1",
      }}
    >
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
          {/* Left side - can be used for navigation title */}
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
          </RowStack>
        </RowStack>
      </Toolbar>
    </AppBar>
  );
}