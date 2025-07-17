import { FiberManualRecord } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { colorMap, pxToRem } from "../../../../../common";

  export type StatusType =
  | 'Unpaid'
  | 'Pending'
  | 'Paid'
  | 'Active'
  | 'Inactive'
  | 'Intransit'
  | 'Delivered'
  | 'Cancelled'
  | 'Scheduled'
  | 'Ongoing'
  | 'New'
  | 'Completed'
  | 'Suspended'
  | 'Dispute'
  | 'Accepted'
  | 'Deactivated'
  | 'All';


  interface StatusTextProps {
    status?: StatusType;
  }

  export const StatusRenderer = ({ status }: StatusTextProps) => {
    // Handle the case when status is undefined
    if (!status) {
      return null; // or return a default status
    }

    return (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: "10px" }}>
        <FiberManualRecord
          sx={{
            fontSize: pxToRem(24),
            color: colorMap[status],
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