import { Typography } from "@mui/material";
import { pxToRem, useNavigate } from "../../../../../common";
import { StyledLink } from "../../../../StyledLink";
import React from "react";

interface PolicyLexLinkProps {
  link: string;
  name: string;
}

export const PolicyLexLinks = ({ link, name }: PolicyLexLinkProps) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (link !== "#") {
      navigate(link);
    } else {
      e.preventDefault();
    }
  };

  return (
    <StyledLink href={link || "#"} onClick={handleClick}>
      <Typography
        sx={{
          color: (theme) => theme.palette.text.secondary,
          fontWeight: 500,
          fontSize: pxToRem(12),
          lineHeight: "18px",
          fontStyle: "normal",
          textTransform: "capitalize",
        }}
      >
        {name}
      </Typography>
    </StyledLink>
  );
};
