import { FiberManualRecord } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { pxToRem } from "src/common";


export const StatusRenderer: React.FC<{ status: string }> = ({ status }) => {

  const color = (status: string) => {
    switch (status.toLowerCase()) {
      case 'unpaid':
        return '#F93232';
      case 'pending':
        return '#877615';
      case 'paid':
        return '#37BD57';
      case 'active':
        return '#4CAF50';
      case 'inactive':
        return '#9E9E9E';
      case 'intransit':
        return '#11B0FF';
      case 'delivered':
        return '#37BD57';
      case 'cancelled':
        return '#F93232';
      case 'scheduled':
        return '#FF9800';
      case 'ongoing':
        return '#11B0FF';
      case 'new':
        return '#877615';
      default:
        return '#9E9E9E';
    }
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: "10px" }}>
      <FiberManualRecord
        sx={{
          fontSize: pxToRem(16),
          color: color(status),
        }}
      />
      <Typography sx={{
        fontSize: pxToRem(16),
        fontWeight: 400,
        lineHeight: "140%",
      }}>
        {status}
      </Typography>
    </Box>
  );
};