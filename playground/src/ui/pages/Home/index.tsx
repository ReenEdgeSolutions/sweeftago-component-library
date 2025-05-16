"use client"
import { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { AppOtpInput, AppButton } from "@component-library";
import { Box, Typography, Stack } from "@mui/material";
import { RowStack } from "@component-library";
import { LayoutHeader } from "../../../../../src/components/LayoutHeader";

const otpSchema = Yup.object().shape({
  otp: Yup.string()
    .matches(/^\d{6}$/, "OTP must be 6 digits")
    .required("OTP is required"),
});

export const Home = () => {
  const [time, setTime] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [hasConfirmedOnce, setHasConfirmedOnce] = useState(false);

  const number = "+1234567890"; // Replace with actual number

  // Countdown logic
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (time > 0) {
      timer = setTimeout(() => setTime(time - 1), 1000);
    } else {
      setCanResend(true);
    }
    return () => clearTimeout(timer as NodeJS.Timeout);
  }, [time]);

  // Trigger resend logic
  const handleResend = async () => {
    if (canResend && hasConfirmedOnce) {
      setTime(60);
      setCanResend(false);
      console.log("Resend OTP");
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F9F9F9",
      }}
    >
      <LayoutHeader
        handleDesktopHelpClick={() => {}}
        handleMobileHelpClick={() => {}}
      />

      <Box
        sx={{
          maxWidth: "614px",
          width: "100%",
          height: "100%" ,
          m: {
            xs: "90px 16px auto 16px",
            sm: "180px auto auto auto",
            md: "212px auto auto auto"
          },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          p:{
            xs: "16px",
            sm: "24px",
            md: "32px",
          },
          borderRadius: "10px",
          border: {xs: "none", sm: "1px solid #D5D5D5"}
        }}
      >
        <Stack spacing={"40px"}>
          <Stack spacing="8px">
            <Typography
              sx={{
                fontSize: { xs: "18px", md: "24px" },
                fontWeight: 600,
                color: "#252423",
                lineHeight: "120%",
                mb: "5px",
                textAlign: {xs: "left", sm : "center"}
              }}
            >
              OTP Verification
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "18px", md: "24px" },
                fontWeight: 600,
                color: "#615D5D",
                lineHeight: "120%",
                mb: "5px",
                textAlign: {xs: "left", sm : "center"}
              }}
            >
              Enter the 6-digit code sent to your number
              <Typography
                component={"span"}
                sx={{
                  ml: "5px",
                }}
              >
                ({number})
              </Typography>
            </Typography>
          </Stack>

          <Stack justifyContent={{xs: "flex-start", sm: "center"}} mx={{sm: "auto"}}>
          <Formik
            initialValues={{ otp: "" }}
            validationSchema={otpSchema}
            onSubmit={(values) => {
              console.log("OTP Submitted:", values.otp);
              setHasConfirmedOnce(true);
              // send to backend
            }}
          >
            {({ values, handleChange, handleSubmit, errors, touched}) => (
              <Form onSubmit={handleSubmit}>
                <AppOtpInput
                  otp={values.otp}
                  hasError={!!(errors.otp && touched.otp)}
                  errorMessage={touched.otp ? errors.otp : ""}
                  onchange={(value) => handleChange({ target: { name: "otp", value } })}
                  oncomplete={(value) => handleChange({ target: { name: "otp", value } })}
                />

                <AppButton
                  disableArrow
                  type="submit"
                  disabled={!/^\d{6}$/.test(values.otp)}
                  fullWidth
                  sx={{mt: "40px"}}
                >
                  Confirm
                </AppButton>
              </Form>
            )}
          </Formik>
          </Stack>

          <RowStack mt="40px" spacing={"5px"} justifyContent={{xs: "left", sm: "center"}}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#454341",
                lineHeight: "140%",
              }}
            >
              Did not receive it?
            </Typography>

            <AppButton
              variant="text"
              onClick={handleResend}
              disabled={!canResend || !hasConfirmedOnce}
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                color: canResend && hasConfirmedOnce ? "#FF7A00" : "#ccc",
                lineHeight: "140%",
                textTransform: "capitalize",
                padding: "0px",
              }}
              disableArrow
            >
              {canResend ? "Resend" : `Resend in ${time} sec`}
            </AppButton>
          </RowStack>
        </Stack>
      </Box>
    </Box>
  );
};