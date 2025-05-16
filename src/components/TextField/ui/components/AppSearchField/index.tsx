import { AppTextField, AppTextFieldProps } from "../AppTextField";
import { StyledImage } from "../../../../StyledImage";
import searchIcon from "../../../../../assets/icons/search.svg";
import { Box, BoxProps, IconButton } from "@mui/material";
import { MouseEventHandler } from "react";

export type AppSearchFieldProps = AppTextFieldProps & {
  boxProps?: BoxProps;
  useCustomContainer?: boolean;
  onclick?: MouseEventHandler<HTMLButtonElement>;
  iconPosition?: "start" | "end";
};

export const AppSearchField = ({
  boxProps,
  useCustomContainer,
  onclick,
  iconPosition = "end", // Default to end position if not specified
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

  // Create the search icon button
  const searchIconButton = (
    <IconButton onClick={handleClick}>
      <StyledImage src={searchIcon} alt={"Search"} />
    </IconButton>
  );

  // Determine which prop to use based on icon position
  const adornmentProps = iconPosition === "start"
    ? { startAdornment: searchIconButton }
    : { endAdornment: searchIconButton };

  // Since we can't modify AppTextField directly, we'll use regular sx props
  // and handle the borderRadius there
  const Field = (
    <AppTextField
      {...props}
      type={"text"}
      variant={"filled"}
      slotProps={{
        input: {
          ...adornmentProps,
          disableUnderline: true,
          ...(props.slotProps?.input || {}),
        },
      }}
      sx={{
        '& .MuiInputBase-root': {
          borderRadius: '10px',
          backgroundColor: '#F5F5F5',
        },
        ...props.sx
      }}
      padding={
        props.padding || {
          xs: "10px 20px !important",
          sm: "16px 20px !important",
        }
      }
    />
  );

  if (useCustomContainer) {
    return Field;
  }

  // Here we're returning the Box with 100% width to match the design
  return (
    <Box
      sx={{
        width: "100%", // Changed from 45% to 100%
        ...sx,
      }}
      {...restBoxProps}
    >
      {Field}
    </Box>
  );
};