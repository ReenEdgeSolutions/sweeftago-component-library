import { Grid } from "@mui/material"
import { Cards } from "./ui/component"

interface AppDeliveryCardsProps {
  deliverydata: {
    id: number
    background: string
    cardLabel: string
    cardValue: string
  }[]
}

export const AppDeliveryCards = ({
  deliverydata,
}: AppDeliveryCardsProps) => {
  return(
    <Grid container spacing={"24px"}>
      {deliverydata.map(item => (
        <Grid size={{sm: 6, md: 3}} key={item.id}>
          <Cards
            background={item.background}
            cardLabel={item.cardLabel}
            cardValue={item.cardValue}
          />
        </Grid>
      ))}
    </Grid>
  )
}