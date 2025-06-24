import { CSSObject, Divider, Stack, Theme, useTheme, useMediaQuery, } from "@mui/material";
import { AppLogo } from "../../../../AppLogo";
import { RowStack } from "../../../../RowStack";
import logoIcon from "./ui/assets/icons/logo-icon.png";
import { SideLinks, SideLinksProps } from "../../components";
import { StyledImage } from "../../../../StyledImage";
import { StyledLink } from "../../../../StyledLink";
import { MobileLogoutAndDeactivate, MobileProfileHeader, ProfileRating } from "./ui/components";

export type AppDashboardSidebarProps = {
  links?: SideLinksProps[];
  open: boolean;
  hrefLink: string;
  // Mobile drawer mode
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
  showProfileRating
}: AppDashboardSidebarProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const sidebarLinks = links || [];
  return (
    <Stack
      spacing="40px"
      sx={{
        position: "relative",
        overflowY: "auto",
        height: isMobileDrawer ? "100%" : "100vh",
        maxHeight: isMobileDrawer ? "100%" : "100vh",
        paddingY: "40px",
        paddingLeft: "24px",
        paddingRight: "20px",
        '::-webkit-scrollbar': { display: 'none' },
        scrollbarWidth: 'none',
        maxWidth: isMobileDrawer ? "100%" : SIDEBAR_WIDTH,
        borderRight: isMobileDrawer ? "none" : "1px solid #E1E1E1",
        background: "#F9F9F9",
        width: "100%",
        zIndex: theme.zIndex.appBar + 1,
        // Apply desktop transitions only when not mobile drawer
        ...(!isMobileDrawer && !isMobile && {
          ...(open && {
            ...openedMixin(theme),
          }),
          ...(!open && {
            ...closedMixin(theme),
          }),
        }),
        // Mobile styles - hide on mobile unless it's a drawer
        display: isMobile && !isMobileDrawer ? 'none' : 'flex',
      }}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      {/* Top section */}
      <Stack>
        {/* Mobile Profile Header - only show in mobile drawer mode */}
        {isMobileDrawer && mobileProfileProps && <MobileProfileHeader
          onMobileClose={onMobileClose}
          mobileProfileProps={mobileProfileProps}
        />}

        {/* Logo - show when not mobile or when sidebar is open or in mobile drawer */}
        {(!isMobile) && (
          <Stack spacing={3}>
            <StyledLink href={hrefLink || "#"}>
              <RowStack
                sx={{ width: '100%'}}
                justifyContent={(open) ? "flex-start" : "center"}
                mb={"30px"}
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
            <Divider orientation="horizontal" flexItem color='#D4D3CB' />
          </Stack>
        )}

        {!isMobileDrawer && !isMobile && showProfileRating &&(
          <ProfileRating
            ratePercent={ratePercent ?? 0}
            ratingItems={ratingItems ?? []}
            open = { open }
            isMobile={isMobile}
          />
        )}

        {/* Navigation Links */}
        {showSideLinks && !showProfileRating && (
          <Stack spacing={isMobileDrawer ? "20px" : "40px"} mt={isMobileDrawer ? "10px" : "30px"}>
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
      </Stack>

      {isMobileDrawer && mobileProfileProps && (
        <MobileLogoutAndDeactivate
          handleLogout={handleLogout}
          handleDeactivateAccount={handleDeactivateAccount}
        />
      )}
    </Stack>
  );
}