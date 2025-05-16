import { CSSObject, Stack, Theme, Typography, useTheme } from "@mui/material";
import { AppLogo } from "../../../../AppLogo";
import { RowStack } from "../../../../RowStack";
import { AppSearchField } from "../../../../TextField";
import { usePathname } from "next/navigation";
import { StyledImage } from "../../../../StyledImage";
import { SideLinksProps } from "../../components";

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
  const pathName = usePathname();
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
            <RowStack
              key={index}
              alignItems="center"
              spacing={1.5}
              sx={{
                padding: open ? "12px 16px" : "12px 8px",
                borderRadius: "8px",
                cursor: "pointer",
                backgroundColor: pathName === item.link ? " #FDDDC1" : "transparent",
                "&:hover": {
                  backgroundColor: "#FDDDC1",
                },
                justifyContent: open ? "flex-start" : "center",
              }}
            >
              {/* Icon */}
              <StyledImage
                sx={{
                  color: pathName === item.link ? "#FF8A00" : "#666",
                  display: "flex",
                  // width: "40px"
                }}
                src={item.sideIcon}
                alt="side-icons"
              />

              {/* Text (only show when sidebar is open) */}
              {open && (
                <Typography
                  sx={{
                    color: pathName === item.link ? " #FF8A00" : "#333",
                    fontWeight: pathName === item.link ? 600 : 500,
                    fontSize: "14px",
                    lineHeight: "20px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.sideLink}
                </Typography>
              )}
            </RowStack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}