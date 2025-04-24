"use client";

import { Box, Stack, Typography, useTheme } from "@mui/material";
import { AppButton, AppHeader, AppLogo } from "@component-library";
import { toast } from "react-toastify";
import {
  AppTextField,
  FormikAppPasswordField,
  FormikAppTextField,
} from "../../../../../src/components/TextField/ui/components";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const TestSchema = Yup.object().shape({
  email: Yup.string().email("Must be Email").required("Email is required"),
});

export const Home = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false)

  const navLinksData = [
    {
      link: 'Solutions',
      href: '#',
      // onclick: () => {
      //   setDrawerOpen(true)
      // },
      // dropdown: <SolutionComponent />,
    },
    {
      link: 'How It Works',
      href: '#',
      onclick: () => {
        // scrollToSection('services')
        setOpen(false)
      }
    },
    {
      link: "FAQ's",
      href: '#',
      onclick: () => {
        // scrollToSection('faq')
        setOpen(false)
      }
    },
    {
      link: 'Support',
      href: '#',
      onclick: () => {
        setOpen(false)
      }
    },
  ]
  const handleButtonClick = () => {
    toast.success("You clicked the button!");
  };

  return (
    <>
      <AppHeader
       open={open}
       setOpen={setOpen}
       appHeaderLinks={navLinksData}
       background={theme.palette.background.paper}
      >
        <AppButton>Header</AppButton>
      </AppHeader>
      <Stack
        sx={{
          width: "100vw",
          height: "100vh",
        }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography
          variant={"h2"}
          component={"h1"}
          sx={{
            fontWeight: 800,
            marginBottom: "40px",
            fontFamily: (theme) => theme.font.title,
          }}
        >
          Welcome to the Playground
        </Typography>
        <Box
          sx={{
            background: "black",
          }}
        >
          <AppLogo />
        </Box>

        <AppButton onClick={handleButtonClick}>This Is An AppButton</AppButton>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={TestSchema}
          // validate={(values) => {
          // const errors: any = {};

          // // Check if all validations pass
          // const allValid = emailValidations.every(validation => validation(values.email));

          // if (!allValid) {
          //   errors.email = 'Please fix all requirements';
          // }

          // return errors;
          // }}
          onSubmit={() => {}}
        >
          <Form>
            <Box
              sx={{
                width: "65%",
              }}
            >
              <FormikAppTextField
                name={"email"}
                type={"email"}
                placeholder={"me@organisation.com"}
                variant={"outlined"}
              />
              <FormikAppPasswordField
                name={"password"}
                type={"password"}
                placeholder={"me@organisation.com"}
                variant={"outlined"}
                helperText={[
                  "Must contain @ symbol",
                  "Must have a domain extension",
                  "Must not contain spaces",
                  "Must be a valid email format",
                ]}
                // helperTextValidations={[
                //   (value) => value && value.includes("@"),
                //   (value) => value && /\.[a-z]{2,}$/i.test(value),
                //   (value) => value && !value.includes(" "),
                //   (value) => value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
                // ]}
              />
            </Box>
          </Form>
        </Formik>

        <AppTextField
          name={"email"}
          type={"email"}
          placeholder={"me@organisation.com"}
          variant={"outlined"}
          // helperText="this is the test"
        />
      </Stack>
    </>
  );
};
