import { alpha, AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { RowStack } from "../../../../RowStack";
import { Profile, ProfileProps } from "./ui/components";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import whatsApp from '../../assets/icons/whatsapp.svg';
import { StyledImage } from "../../../../StyledImage";
import { pxToRem, useResponsive } from "../../../../../common";
import { ReactNode } from "react";
import { AppLogo } from "../../../../AppLogo";
import { AppSearchField } from "../../../../TextField";

export type AppDashboardHeaderProps = {
  profileProps: ProfileProps;
  onChatToggle?: () => void;
  onMobileMenuToggle?: () => void;
  showProfile?: boolean;
  showHome?: boolean;
  children?: ReactNode
  showHeaderLogo?: boolean;
  showSearch?: boolean;
  handleSearchClick?: () => void;
  handleSearchChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  showWhatsappChat?: boolean;
};

export function AppDashboardHeader({
  profileProps,
  onChatToggle,
  onMobileMenuToggle,
  showProfile = true,
  showHome,
  children,
  showHeaderLogo = false,
  showSearch = false,
  handleSearchClick,
  handleSearchChange,
  showWhatsappChat = true,
}: AppDashboardHeaderProps) {
  const { isMobile, hasMounted } = useResponsive();

  // During SSR, render a neutral layout that works for both mobile and desktop
  if (!hasMounted) {
    return (
      <AppBar
        elevation={0}
        position={"relative"}
        sx={{
          background: "#F9F9F9",
          borderBottom: "1px solid #E1E1E1",
          p: 0
        }}
      >
        {/* Use CSS media queries to show appropriate layout during SSR */}
        <Toolbar
          disableGutters
          sx={{
            padding: 0,
            width: "100%",
            background: "#F9F9F9",
            // Mobile styles
            height: { xs: "56px", md: "101px" },
            minHeight: { xs: "56px !important", md: "101px !important" },
          }}
        >
          <RowStack
            justifyContent={"space-between"}
            sx={{
              width: "100%",
              padding: { xs: "12px 16px", md: "0" },
              paddingX: { xs: "12px 16px", md: "35px" },
            }}
          >
            <RowStack spacing={{ xs: "20px", md: 0 }} flex={{ xs: 1, md: "unset" }}>
              {/* Mobile menu button - only show on mobile */}
              <IconButton
                onClick={onMobileMenuToggle}
                sx={{
                  padding: '8px',
                  color: '#615D5D',
                  display: { xs: "block", md: "none" }
                }}
              >
                <MenuIcon />
              </IconButton>

              {showHeaderLogo && (
                <Box mr="30px" borderRight="1px solid #D6D4D1" sx={{ display: { xs: "none", md: "block" } }}>
                  <AppLogo sx={{width: "148px", height: "49.33px"}}/>
                </Box>
              )}

              {showHome && (
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: { xs: pxToRem(16), md: "16px" },
                    lineHeight: '24px',
                    color: "#615D5D",
                    variant: { md: "h6" }
                  }}
                >
                  Home
                </Typography>
              )}
              {!showHome && children}
            </RowStack>

            <RowStack spacing={{ xs: 0, md: "19px" }} alignItems="center">
              {showSearch && (
                <Box maxWidth={"466px"} width="100%" sx={{ display: { xs: "none", md: "block" } }}>
                  <AppSearchField
                    iconPosition="start"
                    placeholder="Search"
                    onClick={handleSearchClick}
                    onChange={handleSearchChange}
                    fullWidth
                  />
                </Box>
              )}

              {showWhatsappChat && (
                <>
                  {/* Mobile WhatsApp button */}
                  <IconButton
                    onClick={onChatToggle}
                    sx={{ display: { xs: "block", md: "none" } }}
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

                  {/* Desktop WhatsApp button */}
                  <IconButton
                    onClick={onChatToggle}
                    sx={{
                      backgroundColor: "#CFFFD2",
                      borderRadius: "10px",
                      padding: "14px 16px",
                      display: { xs: "none", md: "block" },
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
                        }}
                      >
                        Switch to chat
                      </Typography>
                    </RowStack>
                  </IconButton>
                </>
              )}

              {/* Profile - only show on desktop */}
              {showProfile && (
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                  <Profile {...profileProps} />
                </Box>
              )}
            </RowStack>
          </RowStack>
        </Toolbar>
      </AppBar>
    );
  }

  return (
    <AppBar
      elevation={0}
      position={"relative"}
      sx={{
        background: "#F9F9F9",
        borderBottom: "1px solid #E1E1E1",
        p: 0
      }}
    >
      {isMobile ? (
        <Toolbar
          disableGutters
          sx={{
            padding: 0,
            width: "100%",
            height: "56px",
            background: "#F9F9F9",
            minHeight: "56px !important",
          }}
        >
          <RowStack
            justifyContent={"space-between"}
            sx={{
              width: "100%",
              padding: "12px 16px",
            }}
          >
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

            {showWhatsappChat && (
              <IconButton onClick={onChatToggle}>
                <StyledImage
                  src={whatsApp}
                  alt="whatsapp icon"
                  sx={{
                    width: "24px",
                    height: "24px",
                  }}
                />
              </IconButton>
            )}
          </RowStack>
        </Toolbar>
      ) : (
        <Toolbar
          disableGutters
          sx={{
            padding: 0,
            width: "100%",
            height: "101px",
            background: "#F9F9F9",
          }}
        >
          <RowStack
            justifyContent={"space-between"}
            sx={{
              width: "100%",
              paddingX: { xs: "16px", sm: "20px", md: "35px" },
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

            <RowStack spacing={"19px"} alignItems="center">
              {showSearch && (
                <Box maxWidth={"466px"} width="100%">
                  <AppSearchField
                    iconPosition="start"
                    placeholder="Search"
                    onClick={handleSearchClick}
                    onChange={handleSearchChange}
                    fullWidth
                  />
                </Box>
              )}

              {showWhatsappChat && (
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
              )}

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