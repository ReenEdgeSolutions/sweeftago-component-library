"use client"
import { AppAuthLayout } from "@component-library"
import { Box } from "@mui/material"

export const FormAuthLayout = () => {
  return (
    <AppAuthLayout
      HeaderProps={{
        handleDesktopHelpClick: () => {},
        handleMobileHelpClick: () => {},
      }}
    >
      <Box>
        auth layout
      </Box>
    </AppAuthLayout>
  )
}
