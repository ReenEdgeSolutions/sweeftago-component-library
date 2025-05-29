import React from 'react';
import { Stack, Avatar, Typography } from '@mui/material';
import { Person } from '@mui/icons-material';
import { StaticImageData } from 'next/image';

interface AvatarRendererProps {
  value: string;
  row: {
    avatar?: string | StaticImageData;
    profileImage?: string | StaticImageData;
  };
}

export const AvatarRenderer: React.FC<AvatarRendererProps> = ({ value, row }) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const displayName = String(value || '');
  const avatarSrc = row?.avatar || row?.profileImage;

  return (
    <Stack
      direction="row"
      spacing={1.5}
      alignItems="center"
      sx={{ py: 0.5 }} // Add some vertical padding to match table cell spacing
    >
      <Avatar
        src={avatarSrc ? String(avatarSrc) : undefined}
        sx={{
          width: 40,
          height: 40,
          fontSize: '0.875rem', // Make initials text smaller
          fontWeight: 500
        }}
      >
        {!avatarSrc && displayName ? getInitials(displayName) : <Person fontSize="small" />}
      </Avatar>
      <Typography
        variant="body2"
        sx={{
          fontWeight: 500,
          color: 'text.primary',
          fontSize: '0.875rem'
        }}
      >
        {displayName}
      </Typography>
    </Stack>
  );
};