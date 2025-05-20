import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import logo from "./ui/assets/icon/sweeftago-logo.svg"
import helpIcon from "./ui/assets/icon/Vector.svg"
import { AppButton } from '../AppButton';
import { useMediaQuery, useTheme } from '@mui/material';
import { StyledImage } from '../../components/StyledImage';

export interface LayoutHeaderProps {
  handleDesktopHelpClick: () => void;
  handleMobileHelpClick: () => void;
}

export const LayoutHeader = ({
  handleDesktopHelpClick,
  handleMobileHelpClick
}: LayoutHeaderProps) => {
  const theme = useTheme();
  const ismobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <AppBar
      elevation={1}
      position="fixed"
      sx={{
        width: "100%",
        transition: "all 0.5s",
        zIndex: 100,
        p: 0,
        backgroundColor: " #F9F9F9",
        boxShadow: "0 0.5px 3px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Toolbar
        sx={{
          height: { xs: "67px", md: "100px" },
          // maxWidth: '1440px',
          width: "100%",
          p:{
            xs: "16px 32px",
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

        <Box>
            {/* Right Help Center */}
          {!ismobile && (
            <AppButton
              onClick = {handleDesktopHelpClick }
              disableArrow
              startIcon={<HelpOutlineIcon />}
              variant="text"
              sx={{
                backgroundColor: "transparent",
                p:0,
                textTransform: 'none',
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "150%",
                color: '#454341',
                "&:hover":{
                  backgroundColor: "transparent"
                }
              }}
            >
              Help center
            </AppButton>
          )}

          {ismobile && (
            <AppButton
              variant="text"
              onClick={handleMobileHelpClick}
              disableArrow
              sx={{
                backgroundColor: "transparent",
                p: 0,
                "&:hover": {
                  backgroundColor: "transparent"
                }
              }}
            >
              <StyledImage
                src={helpIcon}
                alt="Help Icon"
                sx={{
                  width: "15px",
                  height: "16px"
                }}
              />
            </AppButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
