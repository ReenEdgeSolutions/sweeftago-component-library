import { Stack } from "@mui/material"
import { AppButton } from "../../../../../../../AppButton"
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

interface MobileLogoutAndDeactivateProps {
  handleLogout: () => void;
  handleDeactivateAccount: () => void;
}

export const MobileLogoutAndDeactivate = ({
  handleLogout,
  handleDeactivateAccount,
}: MobileLogoutAndDeactivateProps) => {
  return (
    <Stack
      sx={{
        justifyContent: "space-between",
        flex: 1,
        mt: "20px",
      }}
    >
      <AppButton
        startIcon={<ExitToAppIcon />}
        disableArrow
        onClick={handleLogout}
        sx={{
          width: 'fit-content',
          backgroundColor: 'transparent',
          color: '#615D5D',
          p: 0,
          ml: "36px",
          "&:hover": {
            backgroundColor: 'transparent',
            color: '#EC8444',
          },
        }}
      >
        Logout
      </AppButton>

      <AppButton
        startIcon={<ExitToAppIcon />}
        disableArrow
        onClick={handleDeactivateAccount}
        sx={{
          width: 'fit-content',
          backgroundColor: 'transparent',
          color: '#615D5D',
          p: 0,
          ml: "36px",
          "&:hover": {
            backgroundColor: 'transparent',
            color: '#EC8444',
          },
        }}
      >
        Deactivate Account
      </AppButton>
    </Stack>
  )
}