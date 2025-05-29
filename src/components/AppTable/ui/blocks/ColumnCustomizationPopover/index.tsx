import { Box, Typography, FormControlLabel, Checkbox, Stack} from '@mui/material';
import { AppModal } from '../../../../AppModal';
import { TableColumn } from '../../../common';
import { pxToRem } from 'src/common';
import { AppButton } from 'src/components/AppButton';
import { RowStack } from 'src/components/RowStack';

interface ColumnCustomizationModalProps {
  columns: TableColumn[];
  visibleColumns: string[];
  maxVisibleColumns: number;
  onColumnToggle: (columnId: string) => void;
  open: boolean;
  onClose: () => void;
}

export const ColumnCustomizationModal: React.FC<ColumnCustomizationModalProps> = ({
  columns,
  visibleColumns,
  maxVisibleColumns,
  onColumnToggle,
  open,
  onClose,
}) => {
  const handleColumnToggle = (columnId: string) => {
    onColumnToggle(columnId);
  };

  const handleApply = () => {
    onClose();
  };

  return (
    <AppModal
      open={open}
      handleClose={onClose}
      label="customize-columns-modal"
      minHeight="400px"
      sx={{
        '& .MuiDialog-paper': {
          minWidth: '300px',
          maxWidth: '400px',
          p: "16px",
        },
      }}
    >
      <Stack>
        <Box sx={{ p: 3 }}>
          <Typography
            component="h3"
            sx={{
              mb: "10px",
              color: '#252423',
              borderBottom: '1px solid #E0E0E0',
              fontSize: pxToRem(16),
              fontWeight: 500,
              lineHeight: '140%',
              pb: "15px"
            }}
          >
            Maximum of {maxVisibleColumns} columns
          </Typography>

          <Stack spacing={2}>
            {columns.map((column) => {
              const isChecked = visibleColumns.includes(column.id);
              const isDisabled = !isChecked && visibleColumns.length >= maxVisibleColumns;

              return (
                <FormControlLabel
                  key={column.id}
                  control={
                    <Checkbox
                      checked={isChecked}
                      onChange={() => handleColumnToggle(column.id)}
                      disabled={isDisabled}
                      sx={{
                        color: '#D5D5D5',
                        '&.Mui-checked': {
                          color: '#F98D31',
                        },
                        '&.Mui-disabled': {
                          color: '#E0E0E0',
                        },
                      }}
                    />
                  }
                  label={
                    <Typography
                      component="span"
                      sx={{
                        color: "#615D5D",
                        fontWeight: 400,
                        fontSize: pxToRem(16),
                        lineHeight: '140%',
                      }}
                    >
                      {column.label}
                    </Typography>
                  }
                  sx={{
                    margin: 0,
                    cursor: isDisabled ? 'not-allowed' : 'pointer',
                    p: 1,
                    borderRadius: '8px',
                    '&:hover': {
                      backgroundColor: isDisabled ? 'transparent' : 'rgba(249, 141, 49, 0.04)',
                    },
                  }}
                />
              );
            })}
          </Stack>
        </Box>

        {/* Modal Footer */}
        <RowStack sx={{
          justifyContent: 'space-between',
          gap: "20px",
          mt: "30px",
          borderTop: '1px solid #E0E0E0'
        }}>
          <AppButton
            disableArrow
            onClick={onClose}
            sx={{
              borderColor: '#D5D5D5',
              color: 'text.primary',
              backgroundColor: 'transparent',
              '&:hover': {
                borderColor: '#F98D31',
                backgroundColor: 'rgba(249, 142, 49, 0.25)',
              },
            }}
            fullWidth
          >
            Cancel
          </AppButton>

          <AppButton
            disableArrow
            variant="contained"
            onClick={handleApply}
            sx={{
              backgroundColor: '#F98D31',
              '&:hover': {
                backgroundColor: '#E07B28',
              },
            }}
            fullWidth
          >
            Proceed
          </AppButton>
        </RowStack>
      </Stack>
    </AppModal>
  );
};