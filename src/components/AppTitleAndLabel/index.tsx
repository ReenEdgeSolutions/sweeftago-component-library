import { Stack, Typography } from "@mui/material"
import { pxToRem } from "../../common/utils"
import { RowStack } from "../RowStack"
import { StyledImage } from "../StyledImage"
import editIcon from "../../assets/icons/edit.svg"

interface AppTitleAndDescProps {
  title: string
  label: string
  fontSize?: string | number
  enableEdit?: boolean
  handleEditClick?: () => void
}

export const AppTitleAndLabel = ({
  title,
  label,
  fontSize = pxToRem(20),
  enableEdit = false,
  handleEditClick
}: AppTitleAndDescProps) => {
  return(
    <Stack spacing="8px">
      <RowStack justifyContent="space-between" alignItems="center">
        <Typography
          sx={{
            fontSize: {
              xs:pxToRem(14),
              md:fontSize
            },
            fontWeight: 600,
            lineHeight: {xs:"140%",md: '120%'},
            color: "#252423",
          }}
        >
          {title}
        </Typography>

        {enableEdit && (
          <StyledImage
            src={editIcon}
            alt="edit icon"
            sx={{
              width: "24px",
              height: "24px",
              cursor: "pointer",
            }}
            onClick={handleEditClick}
          />
        )}
      </RowStack>

      <Typography
        sx={{
          fontSize: {
            xs:pxToRem(14),
            sm:pxToRem(16),
          },
          fontWeight: 400,
          lineHeight: "140%",
          color: "#615D5D",
        }}
      >
        {label}
      </Typography>
    </Stack>
  )
}