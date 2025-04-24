import { Box, Collapse, SxProps, Theme } from "@mui/material";
import arrowRightIcon from "../../assets/icons/arrow-up-right.svg";
import { StyledImage } from "../../../../StyledImage";

export type FooterlinkArrowProps = {
  isHovered?: boolean;
  filter?: string;
  iconProps?: SxProps<Theme>;
  isLarge?: boolean;
};

export const FooterLinkArrow = ({
  isHovered,
  filter = "none",
  iconProps,
  isLarge,
}: FooterlinkArrowProps) => {
  return (
    <Collapse in={isHovered} orientation={"horizontal"}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          // ml: "8px",
        }}
      >
        <StyledImage
          src={arrowRightIcon}
          alt={"Arrow right icon"}
          sx={{
            filter: `${filter} !important`,
            width: isLarge ? "24px" : "16px",
            height: "16px",
            ...iconProps,
          }}
        />
      </Box>
    </Collapse>
  );
};
