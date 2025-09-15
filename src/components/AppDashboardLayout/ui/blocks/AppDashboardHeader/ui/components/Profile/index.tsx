import { Avatar, Stack, Typography } from "@mui/material";
import { pxToRem } from "../../../../../../../../common";
import { RowStack } from "../../../../../../../RowStack";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { StaticImageData } from "next/image";

export interface ProfileProps {
  firstName: string;
  lastName: string;
  userMail: string;
  userImg?: string | StaticImageData;
  profileClick: () => void;
  profileRef?: React.RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void);
}

export const Profile = ({ profileClick, userImg, userMail, lastName, firstName, profileRef }: ProfileProps) => {
  return (
    <RowStack
      ref={profileRef || null}
      spacing={1}
      onClick={profileClick}
      sx={{
        cursor: "pointer",
        padding: "14px 0 14px 16px",
        "&:hover": {
          backgroundColor: "transparent",
        },
        alignItems: "center",
      }}
    >
      <Avatar
        src={typeof userImg === "string" ? userImg : userImg?.src}
        alt={firstName}
        sx={{
          width: 40,
          height: 40,
          backgroundColor: !userImg ? "#FF8A00" : " #fff",
          color: "#fff",
          fontSize: pxToRem(14),
          fontWeight: 400,
          flexShrink: 0,
        }}
      >
        {`${firstName.charAt(0)}${lastName.charAt(0)}`}
      </Avatar>

      <Stack
        spacing="7px"
        sx={{
          flex: 1,
          minWidth: 0,
        }}
      >
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: pxToRem(16),
            lineHeight: "140%",
            color: "#252423",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "block",
            width: "100%",
          }}
        >
          {firstName} {lastName}
        </Typography>

        <Typography
          sx={{
            fontWeight: 400,
            fontSize: pxToRem(12),
            lineHeight: "16px",
            color: "#666",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "block",
            width: "100%",
          }}
        >
          {userMail}
        </Typography>
      </Stack>

      <KeyboardArrowDownIcon
        sx={{
          color: "#888",
          fontSize: 20,
          flexShrink: 0,
        }}
      />
    </RowStack>
  );
};