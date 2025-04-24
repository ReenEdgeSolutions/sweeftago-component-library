import { alpha, Typography, useTheme } from "@mui/material";
import { FooterLinkArrow, FooterlinkArrowProps } from "../LinkArrow";
import { useState } from "react";
import { StyledLink } from "../../../../StyledLink";
import { RowStack } from "../../../../RowStack";
import { pxToRem, useNavigate } from "../../../../../common";

type FooterLinksArrowProps = {
  link: string;
  footerLink: string;
  isDisabled?: boolean;
  arrowProps?: Omit<FooterlinkArrowProps, "isHovered">;
  isNew: boolean;
};

export function FooterLinks({
  link,
  footerLink,
  isDisabled,
  arrowProps,
  isNew,
}: FooterLinksArrowProps) {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (link !== "#") {
      navigate(link);
    } else {
      e.preventDefault();
    }
  };

  return (
    <StyledLink
      href={link || "#"}
      sx={{
        fontFamily: theme.font.body,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <RowStack spacing={1} alignItems="center">
        <Typography
          sx={{
            color: theme.palette.text.secondary,
            fontWeight: 400,
            fontSize: pxToRem(12),
            lineHeight: "18px",
            fontStyle: "normal",
          }}
        >
          {footerLink}
        </Typography>
        {isNew ? (
          <Typography
            sx={{
              color: "primary.main",
              padding: "2px 10px",
              borderRadius: "64px",
              background: alpha(theme.palette.primary.main, 0.1),
              border: `1px solid ${theme.footer.footerlinks}`,
            }}
          >
            New
          </Typography>
        ) : null}
        {!isDisabled && <FooterLinkArrow isHovered={isHovered} {...arrowProps} />}
      </RowStack>
    </StyledLink>
  );
}
