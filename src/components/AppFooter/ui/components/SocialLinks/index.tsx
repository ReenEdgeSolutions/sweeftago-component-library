import { StaticImageData } from "next/image";
import { StyledImage } from "../../../../StyledImage";
import { StyledLink } from "../../../../StyledLink";

type SocialLinksProps = {
  icon: StaticImageData;
  link: string;
  name: string;
};

export function SocialLinks({ icon, link, name }: SocialLinksProps) {
  return (
    <StyledLink href={link} target="_blank">
      <StyledImage
        src={icon}
        alt={name}
        sx={{
          width: "24px",
          height: "24px",
        }}
      />
    </StyledLink>
  );
}
