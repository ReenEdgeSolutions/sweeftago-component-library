import { Grid } from "@mui/material"
import { Cards } from "./ui/component"
import { StaticImageData } from "next/image"

interface AppDeliveryCardsProps {
  deliverydata: {
    id: number
    background: string
    cardLabel: string
    cardValue: string | number
    labelIcon?: string | StaticImageData
    rightIcon?: string | StaticImageData
    EnableTextIcon?: boolean
    textIconColor?: string
    showRightItems?: boolean
    rightText?: string
    handleCardClick?: () => void
  }[]
  isProfileComplete?: boolean
  enableAdminCard?: boolean
  isClickable?: boolean
}

export const AppDeliveryCards = ({
  deliverydata,
  isProfileComplete,
  enableAdminCard = false,
  isClickable = false
}: AppDeliveryCardsProps) => {
  return(
    <Grid container
    spacing={{
      xs:"12px",
      sm:"24px"
    }}
    width="100%"
    // justifyContent="center"
    // alignItems="center"
    // sx={{
    //   display: 'flex',
    //   flexWrap: 'wrap'
    // }}
    >
      {deliverydata.map(item => (
        <Grid
          size={{
            xs: 12,
            sm: 6,
            md: deliverydata.length === 3 ? 4 : deliverydata.length > 3 ? 3 : 6
          }}
          key={item.id}>
          <Cards
            background={item.background}
            cardLabel={item.cardLabel}
            cardValue={item.cardValue}
            isProfileComplete = {isProfileComplete}
            enableAdminCard={enableAdminCard}
            labelIcon={item.labelIcon}
            rightText={item.rightText}
            rightIcon={item.rightIcon}
            textIconColor={item.textIconColor}
            EnableTextIcon={item.EnableTextIcon}
            showRightItems={item.showRightItems}
            isClickable={isClickable}
            handleCardClick={item.handleCardClick}
          />
        </Grid>
      ))}
    </Grid>
  )
}