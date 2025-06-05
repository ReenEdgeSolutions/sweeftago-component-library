import { IconButton } from "@mui/material";
import { StyledImage } from "../../../../../../../StyledImage";


import sideMenuClosedIcon from "../../assets/icons/side-menu-closed.svg";
import sideMenuOpenedIcon from "../../assets/icons/side-menu-opened.svg";

export type MenuButtonProps = {
  onClick: () => void;
  isMenuOpen: boolean;
};

export const MenuButton = ({ onClick, isMenuOpen }: MenuButtonProps) => {
  return (
    <IconButton
      onClick={onClick}
      disableRipple
      sx={{
        padding: 0,
        position: "absolute",
        top: "75px",
        left: isMenuOpen ? "290px" : "70px",
        width: "30px",
        height: "30px",
        zIndex: (theme) => theme.zIndex.appBar + 2,
        borderRadius: "0",
      }}
    >
      <StyledImage src={isMenuOpen ? sideMenuOpenedIcon : sideMenuClosedIcon} alt={"Menu"} />
    </IconButton>
  );
};