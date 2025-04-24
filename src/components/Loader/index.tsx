import { CircularProgress, CircularProgressProps } from "@mui/material";

export type LoaderProps = CircularProgressProps & {
  loaderColor?: string;
};

export const Loader = ({
  size = "28px",
  loaderColor = "#F05A25",
  sx,
  ...rest
}: LoaderProps) => {
  return (
    <CircularProgress
      size={size}
      sx={{
        color: loaderColor || "white",
        ...sx,
      }}
      {...rest}
    />
  );
};
