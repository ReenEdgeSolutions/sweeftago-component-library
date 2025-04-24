import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Collapse,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { ReactNode, useState } from "react";
import { pxToRem } from "../../../../../common";
import { StyledLink } from "../../../../StyledLink";
import { ExpandMore } from "@mui/icons-material";

type HeaderLinkProps = {
  href: string;
  link: string;
  onclick?: () => void;
  dropdown?: ReactNode;
  background?: string;
};

const CustomAccordion = styled(Accordion)(() => ({
  width: "100%",
  boxShadow: "0px",
  border: "none",
  padding: 0,
}));

const CustomAccordionSummary = styled(AccordionSummary)(() => ({
  width: "100%",
  boxShadow: "0px",
  border: "none",
  padding: 0,
}));

const CustomAccordionDetails = styled(AccordionDetails)(() => ({
  width: "100%",
  boxShadow: "0px",
  border: "none",
  padding: 0,
}));

export function HeaderLink({ link, href = "#", onclick, dropdown, background }: HeaderLinkProps) {
  const theme = useTheme();
  const [hover, setHover] = useState(false);
  const isMd = useMediaQuery(theme.breakpoints.down("lg"));

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    if (onclick) {
      onclick();
    }
  };

  const linkElement = (
    <StyledLink
      href={href}
      sx={{
        color: isMd && background ? theme.palette.text.primary : theme.navbar.navlinks,
        fontFamily: theme.font.body,
        fontSize: {
          sm: pxToRem(10),
          md: pxToRem(16),
        },
        lineHeight: {
          sm: "16px",
          lg: "22.4px",
        },
        fontWeight: 500,
        transition: "all .3s ease-in-out",
        "&:hover": {
          color: "primary.main",
        },
      }}
      onMouseEnter={() => setHover(true)}
      onClick={handleClick}
    >
      {link}
    </StyledLink>
  );

  if (dropdown) {
    return (
      <>
        <Box sx={{ position: "relative", width: "fit-content", display: { xs: 'none', lg: 'block' } }}>
          {linkElement}
          <Collapse in={hover} timeout="auto" unmountOnExit>
            <Box
              style={{
                position: "absolute",
                top: 30,
                left: 0,
                zIndex: 10,
                width: "100%",
                backgroundColor: theme.palette.background.paper,
                boxShadow: theme.shadows[3],
                borderRadius: "8px",
                opacity: hover ? 1 : 0,
                transform: hover ? "translateY(0)" : "translateY(-10px)",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseLeave={() => setHover(false)}
            >
              {dropdown}
            </Box>
          </Collapse>
        </Box>
        <Box sx={{ display: { xs: 'block', lg: 'none' }}}>
          <CustomAccordion elevation={0}>
            <CustomAccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography
                component="span"
                sx={{
                  color: theme.palette.text.primary,
                  fontFamily: theme.font.body,
                  fontSize: {
                    sm: pxToRem(10),
                    md: pxToRem(16),
                  },
                  lineHeight: {
                    sm: "16px",
                    lg: "22.4px",
                  },
                  fontWeight: 500,
                }}
              >
                {link}
              </Typography>
            </CustomAccordionSummary>
            <CustomAccordionDetails>{dropdown}</CustomAccordionDetails>
          </CustomAccordion>
        </Box>
      </>
    );
  }

  return linkElement;
}
