import { CSSObject, Stack, Theme,useTheme } from "@mui/material";
import { AppLogo } from "../../../../AppLogo";
import { RowStack } from "../../../../RowStack";
import { AppSearchField } from "../../../../TextField";
import { SideLinks, SideLinksProps } from "../../components";

export type AppDashboardSidebarProps = {
  links?: SideLinksProps[];
  open: boolean;
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
}: AppDashboardSidebarProps) {
  const theme = useTheme();

  const sidebarLinks = links || [];



  return (
    <Stack
      justifyContent="space-between"
      sx={{
        position: "relative",
        overflowY: "auto",
        height: "100vh",
        maxHeight: "100vh",
        paddingY: "20px",
        paddingLeft: open ? "32px" : "10px",
        paddingRight: open ? "32px" : "10px",
        maxWidth: SIDEBAR_WIDTH,
        background: "#F9F9F9",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
        width: "100%",
        zIndex: theme.zIndex.appBar + 1,
        ...(open && {
          ...openedMixin(theme),
        }),
        ...(!open && {
          ...closedMixin(theme),
        }),
      }}
    >
      {/* Top section */}
      <Stack>
        {/* Logo */}
        <RowStack sx={{ width: '100%'}} justifyContent={open ? "flex-start" : "center"} mb={"30px"}>
          {open ? (
            <AppLogo sx={{width: "214px", height: "71.33px"}}/>
          ) : (
            <AppLogo sx={{width: "90px", height: "35px",pt : "10px"}}/>
          )}
        </RowStack>

        {/* Search Box (shown only in open state) */}
        {open && (
          <AppSearchField
            placeholder="Search"
            iconPosition="start"
            fullWidth
            sx={{
              border: "1px solid #D5D5D5",
            }}
          />
        )}

        {/* Navigation Links */}
        <Stack spacing={"40px"} mt="30px">
          {sidebarLinks.map((item, index) => (
            <SideLinks
              sideIcon={item.sideIcon}
              sideLink={item.sideLink}
              link={item.link}
              key={index}
              isSideBarOpen={open}
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}