import { Grid } from "@mui/material"
import { Cards } from "./ui/component"

interface AppDeliveryCardsProps {
  deliverydata: {
    id: number
    background: string
    cardLabel: string
    cardValue: string
  }[]
  isProfileComplete?: boolean
}

export const AppDeliveryCards = ({
  deliverydata,
  isProfileComplete
}: AppDeliveryCardsProps) => {
  return(
    <Grid container spacing={"24px"} width="100%">
      {deliverydata.map(item => (
        <Grid size={{sm: 6, md: 3}} key={item.id}>
          <Cards
            background={item.background}
            cardLabel={item.cardLabel}
            cardValue={item.cardValue}
            isProfileComplete = {isProfileComplete}
          />
        </Grid>
      ))}
    </Grid>
  )
}