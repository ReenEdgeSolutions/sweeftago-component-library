import {Avatar, Box, IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { StaticImageData } from "next/image";
import { pxToRem } from "../../../../../../../../common";

interface MobileProfileHeaderProps{
  mobileProfileProps?: {
    firstName: string;
    lastName: string;
    userMail?: string;
    userImg?: string | StaticImageData;
    profileClick?: () => void;
  };
  onMobileClose?: () => void;
}

export const MobileProfileHeader = ({
  mobileProfileProps,
  onMobileClose,
}: MobileProfileHeaderProps) => {
  return(
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 20px',
        borderBottom: '1px solid #E1E1E1',
        marginBottom: '20px',
        marginTop: '-20px',
        marginLeft: '-16px',
        marginRight: '-16px',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {mobileProfileProps && (
          <>
            <Avatar
              src={typeof mobileProfileProps.userImg === "string" ? mobileProfileProps.userImg : mobileProfileProps.userImg?.src}
              alt={mobileProfileProps.firstName}
              sx={{
                width: 32,
                height: 32,
                backgroundColor: !mobileProfileProps.userImg ? "#FF8A00" : " #fff",
                color: "#fff",
                fontSize: pxToRem(14),
                fontWeight: 400,
              }}
              onClick={mobileProfileProps.profileClick}
            >
              {`${mobileProfileProps.firstName.charAt(0)}${mobileProfileProps.lastName.charAt(0)}`}
            </Avatar>
            <Box>
              <Box sx={{ fontSize: '14px', fontWeight: 500, color: '#252423' }}>
                {mobileProfileProps.firstName} {mobileProfileProps.lastName}
              </Box>
              <Box
                sx={{
                  fontSize: '12px',
                  color: '#666',
                  cursor: mobileProfileProps.profileClick ? 'pointer' : 'default',
                }}
                onClick={mobileProfileProps.profileClick}
              >
                View Profile →
              </Box>
            </Box>
          </>
        )}
      </Box>
      {onMobileClose && (
        <IconButton
          onClick={onMobileClose}
          sx={{ padding: '4px', color: '#615D5D' }}
        >
          <CloseIcon />
        </IconButton>
      )}
    </Box>
  )
}