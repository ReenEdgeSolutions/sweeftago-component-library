import {
  Box,
  Drawer,
  IconButton,
  Tooltip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";
import { useState, useEffect } from "react";

interface MobilePaginationDrawerProps {
  children?: React.ReactNode;
}

export const MobilePaginationDrawer = ({
  children
}: MobilePaginationDrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Handle clicks outside to close drawer
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen) {
        const target = event.target as HTMLElement;
        const drawerPaper = document.querySelector('.MuiDrawer-paper');
        const arrowButton = document.querySelector('[data-testid="mobile-pagination-arrow"]');

        if (
          drawerPaper && !drawerPaper.contains(target) &&
          arrowButton && !arrowButton.contains(target)
        ) {
          setIsOpen(false);
        }
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  if (!isMobile) return null;

  return (
    <>
      {/* Fixed Arrow Button at Bottom Right */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 5,
          right: 20,
          zIndex: 1000,
        }}
      >
        <Box
          sx={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px 12px 0 0',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 -1px 10px rgba(0, 0, 0, 0.09)',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.15)',
              transform: 'translateY(-2px)',
            },
          }}
        >
          <Tooltip title="Pagination" placement="top">
            <IconButton
              data-testid="mobile-pagination-arrow"
              onClick={handleToggle}
              sx={{
                width: '40px',
                height: '40px',
                borderRadius: '12px 12px 0 0',
                color: '#666',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              {isOpen ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {/* Drawer */}
      <Drawer
        anchor="bottom"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: '12px 12px 0 0',
            border: 'none',
            // boxShadow: '0 -1px 10px rgba(0, 0, 0, 0.09)',
            width: '100%',
            height: '50px',
            animation: 'slideUp 0.3s ease-out',
            zIndex: 1500,
          },
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        <Box sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 20px',
        }}>
          {children}
        </Box>
      </Drawer>

      <style>
        {`
          @keyframes slideUp {
            from {
              transform: translateY(100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  );
};
