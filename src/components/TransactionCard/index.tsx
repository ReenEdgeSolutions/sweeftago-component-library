import { TransactionData, transanctionStatus } from "../../common";
import { Box, Chip, Typography } from "@mui/material";
import dateIcon from "./ui/assets/icons/date.svg";
import amountIcon from "./ui/assets/icons/amount.svg";
import { LabelAndImg } from "../LabelAndImg";
import { pxToRem } from "../../common";
import { RowStack } from "../RowStack";
import ShortenedText from "../ShortenedText";

interface TransactionCardProps {
  transaction: TransactionData;
  handleCardClick: () => void;
}

export const TransactionCard = ({ transaction, handleCardClick }: TransactionCardProps) => {

  const statusColors = transanctionStatus(transaction.status);

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      // style: 'currency',
      // currency: transaction.currency,
      minimumFractionDigits: 0,
    }).format(amount);
  };

    /**
   * Formats an ISO timestamp into "YYYY-MM-DD HH:mm:ss"
   * @param isoString an ISO-8601 timestamp, e.g. "2025-06-22T14:51:55.291242Z"
   */
 function formatIsoToDateTime(isoString: string): string {
    const date = new Date(isoString);

    const pad = (n: number) => n.toString().padStart(2, "0");

    const year = date.getUTCFullYear();
    const month = pad(date.getUTCMonth() + 1);
    const day = pad(date.getUTCDate());
    const hours = pad(date.getUTCHours());
    const minutes = pad(date.getUTCMinutes());
    const seconds = pad(date.getUTCSeconds());

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: "24px",
        border: '1px solid #D5D5D5',
        borderRadius: '10px',
        boxShadow: 'none',
        padding: {xs:'16px', sm: '16px 24px'},
        '&:hover': {
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          borderColor: '#D1D5DB',
        },
        width: "100%",
        height: "100%",
        cursor: "pointer"
      }}
      onClick={handleCardClick}
    >
      <RowStack sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography
          sx={{
            fontSize: pxToRem(16),
            fontWeight: 600,
            color: '#111827',
            mb: 1,
          }}
        >
          {ShortenedText({
            text: transaction.referenceNumber,
            maxLength: 16,
          })}
        </Typography>


        <Chip
          label={transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
          sx={{
            ...statusColors,
            fontWeight: {xs:400,sm:500},
            fontSize: {xs:pxToRem(10),sm:pxToRem(12)},
            height: 'auto',
            '& .MuiChip-label': {
              px: 2,
              py: 0.5,
            },
          }}
        />
      </RowStack>

      <RowStack justifyContent="space-between" alignItems="center">
        <LabelAndImg
          icon={dateIcon}
          label={formatIsoToDateTime(transaction.transactionDate)}
        />

        <LabelAndImg
          icon={amountIcon}
          label={`₦${formatAmount(transaction.amount)}`}
        />
      </RowStack>
    </Box>
  );
};