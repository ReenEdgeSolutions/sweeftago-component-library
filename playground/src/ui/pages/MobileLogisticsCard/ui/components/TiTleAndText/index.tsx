import { RowStack, StyledImage } from "@component-library";
import { Stack, Typography, Box } from "@mui/material"
import rating from "../../assets/icons/rating.svg";

export interface TitleAndTextProps {
  title: string;
  text: string;
  showRating?: boolean;
  bgColor: string
}

export const TitleAndText = ({
  title,
  text,
  showRating= false,
  bgColor
}: TitleAndTextProps) => {
  return(
    <Stack spacing={"8px"} >
      <Typography
        sx={{
          fontSize: "10px",
          fontWeight: 400,
          lineHeight: "130%",
          color: "#615D5D",
          alignSelf: "center"
        }}
      >
        { title }
      </Typography>

      <RowStack alignSelf="center">
        {showRating && (
          <Box
            sx={{
              width: "16px",
              height: "16px",
              borderRadius: "50%"
,              backgroundColor: {bgColor}
            }}
          />
        )}

        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "130%",
            color: "#615D5D",
          }}
        >
          { text }
        </Typography>
      </RowStack>
    </Stack>
  )
}