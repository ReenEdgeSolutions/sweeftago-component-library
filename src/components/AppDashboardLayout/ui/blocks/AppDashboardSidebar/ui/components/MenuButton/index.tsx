import { IconButton } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";

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
        top: "87px",
        left: isMenuOpen ? "306px" : "85px",
        width: "27px",
        height: "27px",
        borderRadius: "50%",
        backgroundColor: "#F5F5F5",
        transition: "transform 0.3s ease",
        zIndex: (theme) => theme.zIndex.appBar + 2,
        "&:hover": {
          backgroundColor: "#faf7f7",
        },
        border: '1px solid rgb(214, 212, 212)'
      }}
    >
      <ArrowForwardIos
        sx={{
          fontSize: "15px",
          transform: isMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.3s ease",
        }}
      />
    </IconButton>
  );
};
