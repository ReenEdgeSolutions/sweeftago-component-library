import { CheckCircle } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { pxToRem } from "../../../../../common"

export const VerificationRenderer: React.FC<{ verification: string }> = ({ verification }) => {
  const isVerified = verification?.toLowerCase() === 'verified';

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <CheckCircle
        sx={{
          fontSize: 16,
          color: isVerified ? '#37BD57' : '#797979'
        }}
      />
      <Typography
        sx={{
          fontSize: pxToRem(16),
          fontWeight: 400,
          lineHeight: "140%"
        }}>
        {verification}
      </Typography>
    </Box>
  );
};