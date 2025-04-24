import { AppTextField, AppTextFieldProps } from "../AppTextField";
import { StyledImage } from "../../../../StyledImage";
import searchIcon from "../../../../../assets/icons/search.svg";
import { Box, BoxProps, IconButton } from "@mui/material";
import { MouseEventHandler } from "react";

export type AppSearchFieldProps = AppTextFieldProps & {
  boxProps?: BoxProps;
  useCustomContainer?: boolean;
  onclick?: MouseEventHandler<HTMLButtonElement>;
};

export const AppSearchField = ({
  boxProps,
  useCustomContainer,
  onclick,
  ...props
}: AppSearchFieldProps) => {
  const { sx, ...restBoxProps } = boxProps || {};

  // Handle click event
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (onclick) {
      onclick(event);
    } else {
      console.log("Search button clicked");
    }
  };

  const Field = (
    <AppTextField
      {...props}
      type={"text"}
      variant={"filled"}
      slotProps={{
        input: {
          endAdornment: (
            <IconButton onClick={handleClick}>
              <StyledImage src={searchIcon} alt={"Search"} />
            </IconButton>
          ),
          disableUnderline: true,
        },
      }}
      borderRadius={props.borderRadius || "4px"}
      padding={
        props.padding || {
          xs: "8px 17px !important",
          sm: "10px 10px !important",
        }
      }
    />
  );

  if (useCustomContainer) {
    return Field;
  }

  return (
    <Box
      sx={{
        width: "45%",
        ...sx,
      }}
      {...restBoxProps}
    >
      {Field}
    </Box>
  );
};
