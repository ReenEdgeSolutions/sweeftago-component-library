import { Box, Collapse, SxProps, Theme } from "@mui/material";
import { StyledImage } from "../../../components";
import arrowRightIcon from "../../../assets/icons/arrow.svg";

export type AppButtonArrowProps = {
  isHovered?: boolean;
  filter?: string;
  iconProps?: SxProps<Theme>;
  isLarge?: boolean;
};

export const AppButtonArrow = ({
  isHovered,
  filter = "none",
  iconProps,
  isLarge,
}: AppButtonArrowProps) => {
  return (
    <Collapse in={isHovered} orientation={"horizontal"}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          ml: "8px",
        }}
      >
        <StyledImage
          src={arrowRightIcon}
          alt={"Arrow right icon"}
          sx={{
            filter: `${filter} !important`,
            width: isLarge ? "24px" : "15px",
            height: "auto",
            ...iconProps,
          }}
        />
      </Box>
    </Collapse>
  );
};
