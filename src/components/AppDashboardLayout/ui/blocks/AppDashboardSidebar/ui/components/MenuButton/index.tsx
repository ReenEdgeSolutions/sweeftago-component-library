import { IconButton } from "@mui/material";

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
        top: "40px",
        left: isMenuOpen ? "280px" : "85px",
        width: "30px",
        height: "30px",
        zIndex: (theme) => theme.zIndex.appBar + 2,
        backgroundColor: "white",
        border: "1px solid #E1E1E1",
        borderRadius: "50%",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
          backgroundColor: "#F5F5F5",
        },
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        style={{ transform: isMenuOpen ? "rotate(180deg)" : "rotate(0deg)" }}
      >
        <path
          d={isMenuOpen ? "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" : "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}
          fill="#555"
        />
      </svg>
    </IconButton>
  );
};