"use client"
import {StyledImage } from "../StyledImage"
import { Box, Grid } from "@mui/material"
import { LayoutHeader, LayoutHeaderProps } from "../LayoutHeader"
import { useMediaQuery, useTheme } from '@mui/material';
import rightBg from "./ui/assets/image/right-auth.png"

interface AppAuthLayoutProps {
  children: React.ReactNode
  HeaderProps: LayoutHeaderProps
}

export const AppAuthLayout = ({
  children,
  HeaderProps,
}: AppAuthLayoutProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return(
    <Box
      sx={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LayoutHeader
        { ...HeaderProps}
      />


      <Grid container
        spacing="40px"
        sx={{
          width: "100%",
          height: "100%" ,
          p:{
            xs: "94px 16px 0 16px",
            sm: "143px 32px 0 32px",
            md: "143px 44px 0 44px",
          }
        }}
      >
        <Grid size={{ xs: 12, md: 6 }}
          sx={{
            justifyContent:"flex-start",
          }}
        >
          {children}
        </Grid>

        {! isMobile && (
          <Grid size={{md: 6 }} >
            <StyledImage
              src={rightBg}
              alt="right background"
              sx={{
                width:"100%",
                height:"auto",
              }}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  )
}