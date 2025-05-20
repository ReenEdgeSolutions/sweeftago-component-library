import { IconButton, Typography } from "@mui/material";
import { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import { pxToRem } from "../../../../../common";
import { RowStack } from "../../../../RowStack";
import { StyledImage } from "../../../../StyledImage";
import { StyledLink } from "../../../../StyledLink";

export type SideLinksProps = {
  sideIcon: StaticImageData;
  sideLink: string;
  link: string;
  isSideBarOpen?: boolean;
};

export function SideLinks({ sideIcon, sideLink, link, isSideBarOpen }: SideLinksProps) {
  const pathname = usePathname();
  const isActive = pathname.includes(link);
  return (
    <StyledLink href={link || "#"}>
      <RowStack
        spacing={1}
        sx={{
          width: "100%",
          borderRadius: "12px",
          padding: "12px 10px",
          background: isActive ? "#FDDDC1" : "transparent",
          "&:hover": {
            background: "#FDDDC1",
            "& .text-change": {
              color: "primary.main",
            },
            "& .icon-button img": {
              filter:
                "invert(56%) sepia(76%) saturate(1690%) hue-rotate(346deg) brightness(95%) contrast(91%)",
            },
          },
        }}
      >
        <IconButton
          disableRipple
          className="icon-button"
          sx={{
            padding: 0,
            "& img": {
              width: "20px",
              height: "auto",
              filter: isActive
                ? "invert(56%) sepia(76%) saturate(1690%) hue-rotate(346deg) brightness(95%) contrast(91%)" // for #F05A25
                : "invert(58%) sepia(6%) saturate(0%) hue-rotate(251deg) brightness(94%) contrast(90%)", // #8C8C8C
              transition: "filter 0.3s ease",
            },
          }}
        >
          <StyledImage
            src={sideIcon}
            alt="side-icons"
            width={24}
            height={24}
            sx={{
              width: "24px",
              height: "24px",
            }}
          />
        </IconButton>
        {isSideBarOpen && (
          <Typography
            sx={{
              color: isActive ? "#252423" : "#615D5D",
              fontWeight: 500,
              fontSize: {
                xs: isActive ? pxToRem(12) : pxToRem(14),
                sm: isActive ? pxToRem(14) : pxToRem(16),
              },
              lineHeight: {
                xs: "20px",
                sm: "24px",
              },
              transition: "all .3s ease-in-out",
            }}
            className="text-change"
          >
            {sideLink}
          </Typography>
        )}
      </RowStack>
    </StyledLink>
  );
}
