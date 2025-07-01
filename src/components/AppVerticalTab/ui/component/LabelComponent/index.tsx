import { Avatar, Typography} from "@mui/material";
import { RowStack } from "../../../../RowStack";
import { pxToRem } from "../../../../../common";

export type LabelComponentProps = {
  tabTitle: string;
  icon: string;
}

export function LabelComponent({
  tabTitle,
  icon
}: LabelComponentProps) {
  return (
    <RowStack spacing={2}>
      <Avatar
       src={icon}
       alt={tabTitle}
       sx={{
        width: '24px',
        height: '24px',
       }}
      />
      <Typography
       sx={{
        color: "#615D5D",
        fontWeight: 400,
        fontSize: pxToRem(16),
        lineHeight: '140%',
       }}
      >{tabTitle}</Typography>
    </RowStack>
  )
}
