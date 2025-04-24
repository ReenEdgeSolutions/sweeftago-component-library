import {
  Box,
  Divider,
  List,
  ListItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Grid } from "@mui/material";
import instagram from "./ui/assets/icons/instagram.svg";
import facebook from "./ui/assets/icons/facebook.svg";
import twitter from "./ui/assets/icons/twitter.svg";
import linkedIn from "./ui/assets/icons/linkedin.svg";
import { Footerlabel, FooterLinks, PolicyLexLinks, SocialLinks } from "./ui/components";
import { Form as FormikForm, Formik } from "formik";
import * as Yup from "yup";
import { Centered } from "../Centered";
import { StyledLink } from "../StyledLink";
import { AppLogo } from "../AppLogo";
import { RowStack } from "../RowStack";
import { pxToRem } from "../../common";
import { FormikAppTextField } from "../TextField";
import { AppButton } from "../AppButton";

const socialIcons = [
  {
    icon: facebook,
    name: "facebook",
    link: "https://web.facebook.com/flxfleetinc/",
  },
  {
    icon: instagram,
    name: "instagram",
    link: "https://www.instagram.com/flxfleetinc/",
  },
  {
    icon: twitter,
    name: "twitter",
    link: "https://x.com/flxfleetinc",
  },
  {
    icon: linkedIn,
    name: "linkedIn",
    link: "https://www.linkedin.com/company/flxfleetinc/",
  },
];

const serviceLinks = [
  {
    footerLink: "Individuals",
    link: "#",
    isNew: false,
    isDisabled: true,
  },
  {
    footerLink: "Drivers",
    link: "#",
    isNew: false,
  },
  {
    footerLink: "Moving helpers",
    link: "#",
    isNew: false,
  },
  {
    footerLink: "Business",
    link: "#",
    isNew: true,
  },
];

const contactLinks = [
  {
    footerLink: "Contact",
    link: "#",
    isNew: false,
    isDisabled: true,
  },
  {
    footerLink: "Email support",
    link: "#",
    isNew: false,
  },
  {
    footerLink: "Live chat",
    link: "#",
    isNew: false,
  },
  {
    footerLink: "Report incident",
    link: "#",
    isNew: false,
    isDisabled: true,
  },
  {
    footerLink: "Community",
    link: "#",
    isNew: false,
  },
];

const aboutLinks = [
  {
    footerLink: "Company info",
    link: "#",
    isNew: false,
    isDisabled: true,
  },
  {
    footerLink: "Careers",
    link: "#",
    isNew: false,
    isDisabled: true,
  },
  {
    footerLink: "About Us",
    link: "#",
    isNew: false,
  },
  {
    footerLink: "Investors",
    link: "#",
    isNew: true,
  },
];

const policyLexLinks = [
  {
    name: "English",
    link: "#",
  },
  {
    name: "privacy",
    link: "#",
  },
  {
    name: "legal",
    link: "#",
  },
];

type AppFooterProps = {
  handleSubmit: (values: { email: string }) => Promise<void>;
};

export function AppFooter({ handleSubmit }: AppFooterProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        background: theme.navbar.navlinks,
        width: "100%",
        padding: {
          xs: "57px 16px",
          sm: "64px 16px",
          lg: "64px 80px",
        },
        fontFamily: theme.font.body,
      }}
    >
      <Grid
        container
        sx={{ width: "100%" }}
        spacing={{
          xs: "40px",
          sm: "20px",
          md: "40px",
        }}
      >
        <Grid
          size={{
            xs: 12,
            sm: 4,
            md: 2,
          }}
          sx={{}}
        >
          <Centered
            alignItems={"start"}
            direction={{
              xs: "row",
              sm: "column",
            }}
            spacing={{
              sm: 3,
            }}
            justifyContent={{
              xs: "space-between",
              sm: "start",
            }}
            sx={{
              width: "100%",
            }}
          >
            <StyledLink href={"/"}>
              <AppLogo
                sx={{
                  width: {
                    xs: "93.044px",
                    sm: "158.07px",
                  },
                  height: {
                    xs: "25.899px",
                    sm: "44px",
                  },
                }}
              />
            </StyledLink>
            <RowStack spacing={2}>
              {socialIcons.map((social, index) => (
                <SocialLinks key={index} icon={social.icon} link={social.link} name={social.name} />
              ))}
            </RowStack>
          </Centered>
        </Grid>
        <Grid
          size={{
            xs: 12,
            sm: 7,
            md: 6,
          }}
          order={{
            xs: 3,
            sm: 0,
          }}
          sx={{}}
        >
          <Grid container>
            <Grid
              size={{
                xs: 6,
                sm: 4,
              }}
            >
              <Stack spacing={1.5}>
                <Footerlabel label="Product & Service" />
                <List>
                  {serviceLinks.map((service, index) => (
                    <ListItem key={index} disableGutters>
                      <FooterLinks
                        link={service.link}
                        footerLink={service.footerLink}
                        isNew={service.isNew}
                        isDisabled={service.isDisabled}
                      />
                    </ListItem>
                  ))}
                </List>
              </Stack>
            </Grid>
            <Grid
              size={{
                xs: 6,
                sm: 4,
              }}
            >
              <Stack spacing={1.5}>
                <Footerlabel label="Support" />
                <List>
                  {contactLinks.map((service, index) => (
                    <ListItem key={index} disableGutters>
                      <FooterLinks
                        link={service.link}
                        footerLink={service.footerLink}
                        isNew={service.isNew}
                        isDisabled={service.isDisabled}
                      />
                    </ListItem>
                  ))}
                </List>
              </Stack>
            </Grid>
            <Grid
              size={{
                xs: 6,
                sm: 4,
              }}
            >
              <Stack spacing={1.5}>
                <Footerlabel label="About" />
                <List>
                  {aboutLinks.map((service, index) => (
                    <ListItem key={index} disableGutters>
                      <FooterLinks
                        link={service.link}
                        footerLink={service.footerLink}
                        isNew={service.isNew}
                        isDisabled={service.isDisabled}
                      />
                    </ListItem>
                  ))}
                </List>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          size={{
            xs: 12,
            sm: 6,
            md: 4,
          }}
          order={{
            xs: 2,
            sm: 0,
          }}
          sx={{}}
        >
          <Stack spacing={1}>
            <Footerlabel label="Join Our Newsletter" />
            <Typography
              sx={{
                color: theme.palette.text.secondary,
                fontSize: pxToRem(14),
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "20px",
              }}
            >
              Be the first to know about our latest updates, exclusive offers, and more.
            </Typography>
            <Box
              sx={{
                marginTop: "16px",
              }}
            >
              <Formik
                initialValues={{
                  email: "",
                }}
                validationSchema={Yup.object().shape({
                  email: Yup.string().email("Must be an Email").required("Email is required"),
                })}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, values, errors }) => (
                  <FormikForm>
                    <Footerlabel label="Email" />
                    <RowStack spacing={1.5} alignItems={"flex-start"}>
                      <Stack spacing={1} sx={{ width: "60%" }} marginTop={1}>
                        <FormikAppTextField
                          name="email"
                          type="email"
                          placeholder={"input email address"}
                          variant={"outlined"}
                        />
                      </Stack>
                      <AppButton
                        type="submit"
                        sx={{
                          mt: 2,
                          fontSize: pxToRem(10),
                          padding: "8px 16px",
                        }}
                        disableArrow
                        isLoading={isSubmitting}
                        disabled={!values.email || !!errors.email}
                      >
                        {"Join the waitlist"}
                      </AppButton>
                    </RowStack>
                  </FormikForm>
                )}
              </Formik>

              {isMobile && (
                <Divider
                  sx={{
                    backgroundColor: (theme) => theme.palette.text.secondary,
                    opacity: "0.1",
                    mt: "40px",
                  }}
                />
              )}
            </Box>
          </Stack>
        </Grid>
      </Grid>

      <Divider
        sx={{
          backgroundColor: (theme) => theme.palette.text.secondary,
          opacity: "0.1",
          my: "32px",
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "flex-start", sm: "space-between" },
          gap: "32px",
          mt: { xs: "16px", sm: "44px" },
          alignItems: "center",
        }}
      >
        <Grid container spacing={"16px"} sx={{ flexWrap: "nowrap" }}>
          {policyLexLinks.map((list, index) => (
            <Grid key={index} sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <PolicyLexLinks link={list.link} name={list.name} />

              {index !== policyLexLinks.length - 1 && (
                <Box
                  sx={{
                    height: "4px",
                    width: "4px",
                    backgroundColor: (theme) => theme.palette.text.secondary,
                    borderRadius: "50%",
                  }}
                />
              )}
            </Grid>
          ))}
        </Grid>

        <Typography
          sx={{
            fontWeight: 500,
            fontSize: pxToRem(12),
            lineHeight: "18px",
            fontStyle: "normal",
            color: (theme) => theme.palette.text.secondary,
          }}
        >
          © {new Date().getFullYear()} FlxFleet. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}
