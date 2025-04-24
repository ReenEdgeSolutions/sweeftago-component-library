import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  useTheme,
} from '@mui/material';
import { HeaderLink } from './ui/components';
import { Menu, Close } from '@mui/icons-material';
import React, { ReactNode } from 'react';
import { StyledLink } from '../StyledLink';
import { AppLogo } from '../AppLogo';
import { Centered } from '../Centered';
import { RowStack } from '../RowStack';

interface AppHeaderLinkProp {
  link: string;
  href: string;
  onclick?: () => void;
  dropdown?: ReactNode;
}

type AppHeaderProps = {
  appHeaderLinks: AppHeaderLinkProp[];
  children?: ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  background?: string;
}

export function AppHeader({
  appHeaderLinks,
  children,
  open,
  setOpen,
  background
}: AppHeaderProps) {
  const theme = useTheme();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };


  const DrawerList = (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: "37px",
        padding: '16px'
      }}
      role="presentation"
    >
      <Box
        sx={{
          width: '102.05px',
          height: '28.41px'
        }}
      >
        <StyledLink href={'/'}>
          {background ? (
          <AppLogo />
          ): (
          <AppLogo whiteLogo />
          )}
        </StyledLink>
      </Box>
      <List
        sx={{
          width: '100%',
          // maxWidth: '400px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          paddingTop: { xs: '30px' },
        }}
      >
        {appHeaderLinks.map((item, index) =>
          <ListItem
            key={index}
            sx={{
              width: '100%',
              padding: { xs: '0px' },
            }}
          >
            <HeaderLink
              href={item.href}
              link={item.link}
              onclick={item.onclick}
              dropdown={item.dropdown}
              background={background}
            />
          </ListItem>
        )}
      </List>
      {children}
    </Box>
  );

  return (
    <>
      <AppBar
        sx={{
          background: "#0000008C",
          padding: {
            xs: '15px 16px',
            md: '22px 20px',
            lg: '22px 60px',
          },
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          transition: 'background 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        {/* Desktop View */}
        <Centered 
          justifyContent={'space-between'}
          sx={{
            display: {
              xs: 'none',
              lg: 'flex'
            },
          }}
        >
          <RowStack
            spacing={{
              sm: '25px',
              lg: '40px'
            }}
          >
            <StyledLink href={'/'}>
              <AppLogo
                whiteLogo
                sx={{
                  width: {
                    sm: '85px',
                    md: '111.37px',
                    lg: '158.07px'
                  },
                  height: {
                    sm: '31px',
                    lg: '37px',
                  },
                }}
              />
            </StyledLink>
            <RowStack
              spacing={{
                sm: '8px',
                md: '18px',
                lg: '40px'
              }}
            >
              {appHeaderLinks.map((item, index) =>
                <HeaderLink
                  link={item.link}
                  href={item.href}
                  key={index}
                  onclick={item.onclick}
                  dropdown={item.dropdown}
                />
              )}
            </RowStack>
          </RowStack>
          {children}
        </Centered>

        {/* Mobile View */}
        <Centered 
          justifyContent={'space-between'}
          sx={{
            display: {
              xs: 'flex',
              lg: 'none'
            }
          }}
        >
          <StyledLink href={'/'}>
            <AppLogo whiteLogo />
          </StyledLink>
          <IconButton
            onClick={toggleDrawer(true)}
            sx={{
              borderRadius: 0,
              width: '28px',
              height: '28px',
              color: theme.palette.text.primary,
              backgroundColor: 'white',
              '&:hover': {
                backgroundColor: 'white',
              },
            }}
          >
            <Menu />
          </IconButton>
        </Centered>
        <Drawer
          open={open}
          anchor="right"
          onClose={toggleDrawer(false)}
          sx={{
            '& .MuiDrawer-paper': {
              padding: {
                // xs: '16px',
                sm: '30px'
              },
              width: '100%',
              maxWidth: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: background || '#2D2D2DF2',
              position: 'relative'
            },
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              left: {
                xs: open ? '85vw' : '-100px',
                sm: open ? '90vw' : '-100px',
                md: open ? '92vw' : '-100px'
              },
              top: {
                xs: '32px',
                sm: '48px',
                md: '40px',
              },
              transition: 'left 0.3s ease-in-out',
              background: background ? '#EEECEB' : 'transparent'
            }}
          >
            <IconButton
              onClick={toggleDrawer(false)}
              sx={{
                borderRadius: 0,
                width: '28px',
                height: '28px',
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.default,
              }}
            >
              <Close />
            </IconButton>
          </Box>
          <Centered
            justifyContent="end"
            alignContent="end"
            flexDirection="column"
          >
            {DrawerList}
          </Centered>
        </Drawer>
      </AppBar>
    </>

  );
}
