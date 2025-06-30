import { Stack } from "@mui/material"
import { CardArticles, Profile, ProfileProps, CardArticlesProps } from "./ui/components";
import { AppButton } from "@component-library";

 export interface MobileLogisticsCardProps {
  profile: ProfileProps;
  cardArticles: CardArticlesProps;
  onViewProfileClick: () => void;
}

export const MobileLogisticsCard = ({
  profile,
  cardArticles,
  onViewProfileClick
}: MobileLogisticsCardProps) => {
  return (
    <Stack spacing={"24px"} sx={{
      p: "16px 12px",
      border: "1px solid #D6D4D1",
      borderRadius: "10px",
      width: "100%",
    }}>
      <Stack spacing={"12px"}>
        <Profile  {...profile}/>
        <CardArticles  {...cardArticles}/>
      </Stack>

      <AppButton sx={{
        p: 0,
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
      >
        View Profile
      </AppButton>
    </Stack>
  )
}