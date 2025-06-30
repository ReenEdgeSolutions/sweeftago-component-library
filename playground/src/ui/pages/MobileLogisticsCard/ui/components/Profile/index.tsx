import { pxToRem, RowStack, StyledImage } from "@component-library"
import { Avatar, Grid, IconButton, Stack, Typography } from "@mui/material"
import verifiedIcon from "../../assets/icons/verified.svg";
import unverifiedIcon from "../../assets/icons/unverified.svg";

import moreIcon from "../../assets/icons/action.svg"

export interface ProfileProps {
  ProfilePhoto: string;
  profileName: string;
  ID: string;
  isVerified: boolean;
  onMoreOptionsClick: () => void;
}

export const Profile = ({
  ProfilePhoto,
  profileName,
  ID,
  isVerified,
  onMoreOptionsClick,
}: ProfileProps) => {
  return(
    <RowStack spacing ="16px" width="100%">
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

      <Stack flex={1}>
        <Grid container width={"100%"}>
          <Grid size={{xs: 6}}>
            <Stack>
              <Typography sx={{
                fontsize: pxToRem(14),
                fontWeight: 500,
                lineHeight: "130%",
                color: "#615D5D",
              }}>
                { profileName }
              </Typography>

              <Typography sx={{
                fontsize: pxToRem(12),
                fontWeight: 400,
                lineHeight: "140%",
                color: "#615D5D",
              }}>
                { ID }
              </Typography>
            </Stack>
          </Grid>

          <Grid size={{xs: 6}} sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}>
            <StyledImage
              src={isVerified ? verifiedIcon : unverifiedIcon}
              alt={isVerified ? "Verified" : "Unverified"}
              sx={{
                width: "20px",
                height: "20px",
              }}
            />
          </Grid>
        </Grid>
      </Stack>

      <IconButton
        onClick={onMoreOptionsClick}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          alignSelf: "flex-start",
          ml: "auto",
          p: 0
        }}
      >
        <StyledImage
          src={moreIcon}
          alt="More Options"
          sx={{
            width: "20px",
            height: "20px",
          }}
        />
      </IconButton>
    </RowStack>
  )
}