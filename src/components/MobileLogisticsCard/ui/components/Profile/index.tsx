import { RowStack } from "../../../../RowStack";
import { StyledImage } from "../../../../StyledImage";
import { pxToRem } from "../../../../../common/utils";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import verifiedIcon from "../../assets/icons/verified.svg";
import unverifiedIcon from "../../assets/icons/unverified.svg";
import { TextObject } from "../TextObject";

export interface ProfileProps {
  ProfilePhoto: string;
  profileName: string;
  ID: string;
  isVerified: boolean;
  onMoreOptionsClick: (event: React.MouseEvent<HTMLButtonElement>, ID?: string) => void;
  phoneNumber: string;
  lastTrip: string;
  statusText: string;
  statusTextColor: string;
  statusBackgroundColor: string;
}

export const MobileProfile = ({
  ProfilePhoto,
  profileName,
  ID,
  isVerified,
  onMoreOptionsClick,
  phoneNumber,
  lastTrip,
  statusText,
  statusTextColor,
  statusBackgroundColor
}: ProfileProps) => {
  return(
    <RowStack spacing ="16px" width="100%">
      <Box alignSelf={"flex-start"} >
        <Avatar
          sx={{
            width: "40px",
            height: "40px",
            backgroundColor: "#D9D9D9",
            color: "#615D5D",
            fontSize: "16px",
          }}
          src={ProfilePhoto}
          alt="Profile Photo"
        />
      </Box>

      <Stack flex={1} spacing={"6px"}>
        <RowStack sx={{
          alignItems: "center",
          width: "100%",
          gap: "10px",
        }}>
          <Typography sx={{
            fontsize: pxToRem(14),
            fontWeight: 500,
            lineHeight: "130%",
            color: "#615D5D",
          }}>
            { profileName }
          </Typography>

          <StyledImage
            src={isVerified ? verifiedIcon : unverifiedIcon}
            alt={isVerified ? "Verified" : "Unverified"}
            sx={{
              width: "20px",
              height: "20px",
            }}
          />
        </RowStack>

        <RowStack sx={{
          alignItems: "center",
          width: "100%",
          gap: "10px",
        }}>
          <Typography sx={{
            fontsize: pxToRem(12),
            fontWeight: 400,
            lineHeight: "140%",
            color: "#615D5D",
          }}>
            { ID }
          </Typography>

          <Typography sx={{
            fontsize: pxToRem(10),
            fontWeight: 500,
            lineHeight: "130%",
            color: statusTextColor,
            backgroundColor: statusBackgroundColor,
            padding: "2px 6px",
            borderRadius: "10px",
          }}>
            {statusText}
          </Typography>
        </RowStack>

        <TextObject
          object="Phone Number:"
          objectValue={phoneNumber}
        />

        <TextObject
          object="Last Trip:"
          objectValue={lastTrip}
        />
      </Stack>

      <IconButton
        onClick={(event) => onMoreOptionsClick(event, ID)}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          alignSelf: "flex-start",
          ml: "auto",
          p: 0
        }}
      >
         <MoreHorizIcon />
      </IconButton>
    </RowStack>
  )
}