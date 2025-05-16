import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import logo from "./ui/assets/icon/sweeftago-logo.png"
import { AppButton } from '../../../../AppButton';
import { StyledImage } from '../../../../StyledImage';

export interface HeaderProps {
  handleSignUpClick: () => void;
}

export const Header = ({
 handleSignUpClick,
}: HeaderProps) => {
  return (
    <AppBar
      elevation={1}
      sx={{
        width: "100%",
        transition: "all 0.5s",
        zIndex: 100,
        p: 0,
        backgroundColor: " #F9F9F9",
        boxShadow: "0 0.5px 3px rgba(0, 0, 0, 0.1)",
        position: {xs:"fixed", sm: "static"}
      }}
    >
      <Toolbar
        sx={{
          height: { xs: "67px", md: "100px" },
          // maxWidth: '1440px',
          width: "100%",
          p:{
            xs: "16px",
            sm: "16px 32px",
            md: "16px 44px ",
          },
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: 'space-between'
        }}
      >
        {/* Left Logo */}
        <Box display="flex" alignItems="center" gap={1}>
          <IconButton edge="start" disableRipple disableFocusRipple>
            <StyledImage
              src={logo}
              alt="SweetfaGo Logo"
              sx={{
                width: {
                  xs: "106px",
                  md: "214px",
                },
                height: {
                  xs: "35px",
                  md: "71.33px"
                }
              }}
            />
          </IconButton>
        </Box>

        <AppButton
          onClick = {handleSignUpClick}
          disableArrow
          variant="contained"
          sx={{
            textTransform: 'none',
            width:{xs:"106px", md:"161px"},
            height: "40px",
          }}
        >
          Sign Up
        </AppButton>
      </Toolbar>
    </AppBar>
  );
};
