import { StyledImage } from "../StyledImage";
import sweeftLogo from "../../assets/icons/logo.svg";
import { SxProps } from "@mui/material";

type AppLogoProps = {
  sx?: SxProps;
};

export const AppLogo = ({
  sx
}: AppLogoProps) => {
  return <StyledImage src={sweeftLogo} sx={{ ...sx }} alt={"sweeftago Logo"} />;
};
