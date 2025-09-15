import { CSSObject, Stack, Theme, useTheme, Box } from "@mui/material";
import { AppLogo } from "../../../../AppLogo";
import { RowStack } from "../../../../RowStack";
import logoIcon from "./ui/assets/icons/logo-icon.png";
import { SideLinks, SideLinksProps } from "../../components";
import { StyledImage } from "../../../../StyledImage";
import { StyledLink } from "../../../../StyledLink";
import { MobileLogoutAndDeactivate, MobileProfileHeader, ProfileRating } from "./ui/components";
import RateReviewIcon from '@mui/icons-material/RateReview';
import { StaticImageData } from "next/image";
import { useResponsive } from "../../../../../common";

export type AppDashboardSidebarProps = {
  links?: SideLinksProps[];
  open: boolean;
  hrefLink: string;
  rateIcon?: string | React.ElementType | StaticImageData;
  isMobileDrawer?: boolean;
  onMobileClose?: () => void;
  mobileProfileProps?: {
    firstName: string;
    lastName: string;
    userMail?: string;
    profileClick?: () => void;
  };
  handleLogout: () => void;
  handleDeactivateAccount: () => void;
  showSideLinks?: boolean;
  ratePercent?: number;
  ratingItems?: {
    text: string;
    isCompleted: boolean;
    percentage: number;
  }[];
  showProfileRating?: boolean;
};

export const SIDEBAR_WIDTH = 320;
export const COLLAPSED_WIDTH = 100;

const openedMixin = (theme: Theme): CSSObject => ({
  width: SIDEBAR_WIDTH,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "visible",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "visible",
  width: COLLAPSED_WIDTH,
});

export function AppDashboardSidebar({
  links,
  open,
  isMobileDrawer = false,
  onMobileClose,
  mobileProfileProps,
  handleLogout,
  handleDeactivateAccount,
  hrefLink,
  showSideLinks = true,
  ratePercent,
  ratingItems,
  showProfileRating,
  rateIcon = () => <RateReviewIcon sx={{width: "24px", height: "24px"}}/>
}: AppDashboardSidebarProps) {
  const theme = useTheme();
  const { isMobile, isHydrating } = useResponsive();

  const sidebarLinks = links || [];

  return (
    <Stack
      sx={{
        position: "relative",
        height: isMobileDrawer ? "100%" : "100vh",
        maxHeight: isMobileDrawer ? "100%" : "100vh",
        maxWidth: isMobileDrawer ? "100%" : SIDEBAR_WIDTH,
        borderRight: "1px solid #E1E1E1",
        background: "#F9F9F9",
        width: "100%",
        mb: "20px",
        zIndex: theme.zIndex.appBar + 1,
        // Apply desktop transitions only when not mobile drawer and not hydrating
        ...(!isMobileDrawer && !isMobile && {
          ...(open && {
            ...openedMixin(theme),
            // Disable transition during hydration
            ...(isHydrating && { transition: 'none' }),
          }),
          ...(!open && {
            ...closedMixin(theme),
            // Disable transition during hydration
            ...(isHydrating && { transition: 'none' }),
          }),
        }),
        // Mobile styles - hide on mobile unless it's a drawer
        display: isMobile && !isMobileDrawer ? 'none' : 'flex',
      }}
    >
      {/* Fixed Header Section - Always visible */}
      <Box
        sx={{
          flexShrink: 0,
          p: "20px 24px",
        }}
      >
        {/* Mobile Profile Header - only show in mobile drawer mode */}
        {isMobileDrawer && mobileProfileProps && (
          <Box>
            <MobileProfileHeader
              onMobileClose={onMobileClose}
              mobileProfileProps={mobileProfileProps}
            />
          </Box>
        )}

        {/* Desktop Logo */}
        {(!isMobile) && (
          <StyledLink href={hrefLink || "#"}>
            <RowStack
              sx={{
                width: '100%',
                mt: open ? "0px" : "15px",
              }}
              justifyContent={(open) ? "flex-start" : "center"}
              mb={"20px"}
            >
              {(open) ? (
                <AppLogo sx={{width: "214px", height: "71.33px"}}/>
              ) : (
                <StyledImage
                  src={logoIcon}
                  alt="Logo"
                  sx={{ width: "35px", height: "35px"}}
                />
              )}
            </RowStack>
          </StyledLink>
        )}

        {/* Profile Rating - Fixed at top */}
        {!isMobileDrawer && !isMobile && showProfileRating && (
          <ProfileRating
            ratePercent={ratePercent ?? 0}
            ratingItems={ratingItems ?? []}
            open={open}
            isMobile={isMobile}
            rateIcon={rateIcon}
          />
        )}
      </Box>

      {/* Scrollable Navigation Section */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          paddingLeft: "24px",
          paddingRight: "20px",
          '::-webkit-scrollbar': { display: 'none' },
          scrollbarWidth: 'none',
        }}
      >
        {/* Navigation Links */}
        {showSideLinks && !showProfileRating && (
          <Stack spacing={isMobileDrawer ? "20px" : "31px"} sx={{ mt: "10px", flex: 1 }}>
            {sidebarLinks.map((item, index) => (
              <SideLinks
                sideIcon={item.sideIcon}
                sideLink={item.sideLink}
                link={item.link}
                key={index}
                isSideBarOpen={isMobileDrawer ? true : open}
              />
            ))}
          </Stack>
        )}
      </Box>

      {/* Mobile Actions */}
      {isMobileDrawer && mobileProfileProps && (
        <MobileLogoutAndDeactivate
          handleLogout={handleLogout}
          handleDeactivateAccount={handleDeactivateAccount}
        />
      )}
    </Stack>
  );
}