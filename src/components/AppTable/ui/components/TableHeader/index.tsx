import React from 'react';
import {Typography,Stack, Box, IconButton } from '@mui/material';
import { Settings } from '@mui/icons-material';

import { AppButton } from '../../../../AppButton';
import { RowStack } from '../../../../RowStack';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { pxToRem } from '../../../../../common';
import { StyledImage } from '../../../../../components';
import deleteIcon from '../../assets/icon/delete.svg'

interface TableHeaderProps {
  title?: string;
  showCustomizeButton: boolean;
  onCustomizeClick: (event: React.MouseEvent<HTMLElement>) => void;
  handleExport?: () => void;
  showTitle?: boolean;
  showAddRiderButton?: boolean;
  handleRiderAddClick?: () => void;
  handleDeleteAsignRider?: (data :number) => void;
}

export const TableHeader: React.FC<TableHeaderProps> = ({
  title = "All Deliveries",
  showCustomizeButton,
  onCustomizeClick,
  handleExport,
  showTitle = false,
  showAddRiderButton= false,
  handleRiderAddClick,
  handleDeleteAsignRider
}) => {
  return (
    <Box width="100%" mb="24px">
      {showCustomizeButton && (
        <RowStack justifyContent={"space-between"} sx={{  width: '100%', alignItems: 'center'}}>
          { showTitle && (
            <Typography
              sx={{
                fontSize: pxToRem(20),
                fontWeight: 500,
                lineHeight: '120%',
                padding: '16px 0',
                color: '#252423'
              }}
            >
              {title}
            </Typography>
          )}

          <RowStack spacing={"16px"} sx={{ alignItems: 'center' }}>
            <AppButton
              onClick={handleExport}
              disableArrow
              startIcon={<FileUploadOutlinedIcon sx={{width: "24px", height: "24px"}}/>}
              sx={{
                color: "#615D5D",
                border: "1px solid #D5D5D5",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              Export
            </AppButton>

            <Stack direction="row" spacing={1}>
              <AppButton
                variant="outlined"
                startIcon={<Settings />}
                onClick={onCustomizeClick}
                disableArrow
                sx={{
                  borderColor: '#D5D5D5',
                  color: '#615D5D',
                  backgroundColor: 'transparent',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    borderColor: '#D5D5D5',
                    color: '#615D5D',
                  },
                }}
              >
                Customize table
              </AppButton>
            </Stack>
          </RowStack>
        </RowStack>
      )}

      {showAddRiderButton && (
        <RowStack justifyContent={"space-between"} sx={{  width: '100%', alignItems: 'center'}}>
          <Typography
            sx={{
              fontSize: pxToRem(20),
              fontWeight: 500,
              lineHeight: '120%',
              padding: '16px 0',
              color: '#252423'
            }}
          >
            {title}
          </Typography>

          <RowStack sx={{
            width: "247px",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <IconButton
              onClick={() => handleDeleteAsignRider?.(0)}
            >
              <StyledImage
                src={deleteIcon}
                alt="Delete Rider"
                sx={{ width: "49px", height: "48px" }}
              />
            </IconButton>

            <AppButton
              variant="contained"
              disableArrow
              startIcon={"+"}
              onClick={handleRiderAddClick}
            >
              Assign Rider
            </AppButton>
          </RowStack>
        </RowStack>
      )}
    </Box>
  );
};