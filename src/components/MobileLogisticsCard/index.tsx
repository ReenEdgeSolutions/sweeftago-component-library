import { Box, Divider, Stack } from "@mui/material"
import { MobileProfile, ProfileProps } from "./ui/components";
import { AppButton } from "../AppButton";
import { MobilePaginationDrawer } from "../MobilePaginationDrawal";
import { CustomPagination, CustomPaginationProps } from "../CustomPagination";

 export interface MobileLogisticsCardProps {
  profile: ProfileProps;
  onViewProfileClick: () => void;
  paginationProps: CustomPaginationProps
}

export const MobileLogisticsCard = ({
  profile,
  onViewProfileClick,
  paginationProps,
}: MobileLogisticsCardProps) => {
  return (
    <>
      <Stack sx={{
        p: "16px 12px",
        border: "1px solid #D6D4D1",
        borderRadius: "10px",
        width: "100%",
      }}>
        <MobileProfile  {...profile}/>

        <Box sx={{
          width: "80%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
        }}>
          <Divider sx={{
            width: "100%",
            height: "1px",
            backgroundColor: "#D6D4D1",
            margin: "10px 0",
            border: "none",
          }}/>
        </Box>

        <AppButton sx={{
          p: 0,
          mt: "24px",
          backgroundColor: "transparent",
          textDecoration: "underline",
          color: "#F98D31",
          alignSelf: "flex-end",
          "&:hover": {
            backgroundColor: "transparent",
            padding: 0,
            textDecoration: "underline",
          },
          "&:active": {
            backgroundColor: "transparent",
          }
        }}
        onClick={onViewProfileClick}
        disableArrow
        >
          View Profile
        </AppButton>
      </Stack>

      <MobilePaginationDrawer>
        {paginationProps &&(
          <CustomPagination {...paginationProps} />
        )}
      </MobilePaginationDrawer>
    </>
  )
}

export { TextObject , MobileProfile } from "./ui/components";