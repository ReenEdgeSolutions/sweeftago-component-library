import { Grid } from "@mui/material"
import { TitleAndText } from "../TiTleAndText"

export interface CardArticlesProps {
  status: string;
  earnings: string;
  lastTrip: string;
}

export const CardArticles = ({
  status,
  earnings,
  lastTrip,
}: CardArticlesProps) => {
  return(
    <Grid container spacing={"16px"} sx={{
      p: "12px",
      backgroundColor: "#EAEAEA",
      borderRadius: "8px",
    }}>
      <Grid size={{xs:4}} sx={{mx: "auto"}}>
        <TitleAndText
          title={"Status"}
          text={status}
          showRating={true}
        />
      </Grid>

      <Grid size={{xs:4}}>
        <TitleAndText
          title={"Earnings"}
          text={earnings}
        />
      </Grid>

      <Grid size={{xs:4}}>
        <TitleAndText
          title={"Last Trips"}
          text={lastTrip}
        />
      </Grid>
    </Grid>
  )
}