import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Typography, useTheme } from '@mui/material';
import { pxToRem } from '../../common';
import { StyledLink } from '../StyledLink';

export interface CustomBreadcrumbsProps {
  href: string;
  text: string;
  active?: boolean;
}

export type BreadcrumbsProps = {
  breadcrumbsData: CustomBreadcrumbsProps[];
};

export function AppBreadCrumbs({
  breadcrumbsData,
}: BreadcrumbsProps) {
  const theme = useTheme();

  const breadcrumbs = breadcrumbsData.map((breadcrumb, index) => {
    const isLast = index === breadcrumbsData.length - 1;

    if (isLast) {
      return (
        <Typography
          key={index}
          sx={{
            color: "#252423",
            fontFamily: theme.typography.fontFamily,
            fontSize: pxToRem(16),
            fontWeight: 400,
            lineHeight: '24px',
            fontStyle: 'normal',
          }}
        >
          {breadcrumb.text}
        </Typography>
      );
    }

    return (
      <StyledLink
        key={index}
        href={breadcrumb.href}
        sx={{
          color: "#797979",
          fontFamily: theme.typography.fontFamily,
          fontSize: pxToRem(16),
          fontWeight: 400,
          lineHeight: '24px',
          fontStyle: 'normal',
          "&:hover": {
            textDecoration: 'underline'
          }
        }}
      >
        {breadcrumb.text}
      </StyledLink>
    );
  });

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      {breadcrumbs}
    </Breadcrumbs>
  );
}