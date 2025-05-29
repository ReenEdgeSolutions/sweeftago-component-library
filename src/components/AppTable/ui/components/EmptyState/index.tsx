import { TableRow, TableCell, Typography } from '@mui/material';

interface EmptyStateProps {
  colSpan: number;
  message: string;
  loading: boolean;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  colSpan,
  message,
  loading,
}) => (
  <TableRow>
    <TableCell
      colSpan={colSpan}
      align="center"
      sx={{ py: 4 }}
    >
      <Typography color={loading ? 'text.primary' : 'text.secondary'}>
        {loading ? 'Loading...' : message}
      </Typography>
    </TableCell>
  </TableRow>
);