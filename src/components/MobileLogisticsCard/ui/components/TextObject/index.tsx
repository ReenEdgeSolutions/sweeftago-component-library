import { Typography } from "@mui/material"

export interface TitleAndTextProps {
  object: string;
  objectValue: string;
}

export const TextObject = ({
  object,
  objectValue
}: TitleAndTextProps) => {
  return(
    <Typography
      sx={{
        fontSize: "10px",
        fontWeight: 400,
        lineHeight: "130%",
        color: "#979797",
      }}
    >
      { object }

      <Typography component="span" sx={{
        fontSize: "12px",
        fontWeight: 500,
        lineHeight: "140%",
        color: "#979797",
        marginLeft: "4px",
      }}>
        { objectValue }
      </Typography>
    </Typography>
  )
}