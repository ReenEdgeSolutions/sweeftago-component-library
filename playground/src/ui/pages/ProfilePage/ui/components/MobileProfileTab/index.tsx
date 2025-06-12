import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  LinearProgress,
  Avatar,
  Chip,
  IconButton
} from '@mui/material';
import {
  Person,
  LocalShipping,
  Lock,
  ChevronRight,
  Edit
} from '@mui/icons-material';

interface Tab {
  icon: string;
  tabTitle: string;
  active: boolean;
  component: React.ReactNode;
}

interface MobileProfileTabsProps {
  tabs: Tab[];
  onTabClick: (event: React.SyntheticEvent, index: number) => void;
  generalInfoComplete: number;
  pickupDetailsComplete: number;
}

export function MobileProfileTabs({
  tabs,
  onTabClick,
  generalInfoComplete,
  pickupDetailsComplete
}: MobileProfileTabsProps) {

  const getTabIcon = (index: number) => {
    switch (index) {
      case 0: return <Person />;
      case 1: return <LocalShipping />;
      case 2: return <Lock />;
      default: return <Person />;
    }
  };

  const getCompletionPercentage = (index: number) => {
    switch (index) {
      case 0: return generalInfoComplete;
      case 1: return pickupDetailsComplete;
      case 2: return 100; // Password is always considered complete
      default: return 0;
    }
  };

  const overallCompletion = Math.round(
    (generalInfoComplete + pickupDetailsComplete + 100) / 3
  );

  return (
    <Box sx={{ p: 2 }}>
      {/* Profile Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Avatar
          src="/api/placeholder/48/48"
          sx={{ width: 48, height: 48, mr: 2 }}
        />
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" fontWeight="bold">
            Cakes & Creams
          </Typography>
          <Chip
            icon={<div style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#4CAF50'
            }} />}
            label="Verified"
            size="small"
            sx={{ mt: 0.5 }}
          />
        </Box>
        <IconButton size="small">
          <Edit />
        </IconButton>
      </Box>

      {/* Profile Completion Card */}
      <Card sx={{ mb: 3, bgcolor: '#f8f9fa' }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="subtitle2" color="text.secondary">
              Profile Completed
            </Typography>
            <Typography variant="h6" fontWeight="bold" color="primary">
              {overallCompletion}%
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={overallCompletion}
            sx={{
              height: 8,
              borderRadius: 4,
              bgcolor: '#e0e0e0',
              '& .MuiLinearProgress-bar': {
                borderRadius: 4,
                bgcolor: overallCompletion === 100 ? '#4CAF50' : '#2196F3'
              }
            }}
          />
          <Box sx={{ display: 'flex', mt: 2, gap: 1 }}>
            <Chip
              label="General Information"
              size="small"
              color={generalInfoComplete === 100 ? "success" : "default"}
              variant={generalInfoComplete === 100 ? "filled" : "outlined"}
            />
            <Chip
              label="Pickup Details"
              size="small"
              color={pickupDetailsComplete === 100 ? "success" : "default"}
              variant={pickupDetailsComplete === 100 ? "filled" : "outlined"}
            />
          </Box>
        </CardContent>
      </Card>

      {/* Tab List */}
      <List sx={{ bgcolor: 'background.paper', borderRadius: 2 }}>
        {tabs.map((tab, index) => {
          const completion = getCompletionPercentage(index);
          return (
            <ListItem
              key={index}
              onClick={(e) => onTabClick(e, index)}
              sx={{
                cursor: 'pointer',
                borderRadius: 1,
                mb: 1,
                '&:hover': {
                  bgcolor: 'action.hover'
                },
                '&:last-child': {
                  mb: 0
                }
              }}
            >
              <ListItemIcon>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    bgcolor: completion === 100 ? 'success.light' : 'grey.100',
                    color: completion === 100 ? 'success.main' : 'grey.600'
                  }}
                >
                  {getTabIcon(index)}
                </Box>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="subtitle1" fontWeight="medium">
                    {tab.tabTitle}
                  </Typography>
                }
                secondary={
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                    <LinearProgress
                      variant="determinate"
                      value={completion}
                      sx={{
                        width: 60,
                        height: 4,
                        borderRadius: 2,
                        mr: 1,
                        bgcolor: 'grey.200',
                        '& .MuiLinearProgress-bar': {
                          borderRadius: 2,
                          bgcolor: completion === 100 ? 'success.main' : 'primary.main'
                        }
                      }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      {completion}%
                    </Typography>
                  </Box>
                }
              />
              <ChevronRight color="action" />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}