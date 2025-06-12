import { AppButton, FormikAppPasswordField, pxToRem } from "@component-library";
import { Stack,Box, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from 'yup';
import { useRouter } from "next/navigation";

const validationSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .required("Current password is required")
    .min(8, "Password must be at least 8 characters long"),
  newPassword: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-zA-Z]/, "Password must contain at least one letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), undefined], 'Passwords must match')
    .required('Confirm Password is required'),
});

export function UserPasswordComponent() {
  const initialValues = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  }
  const router = useRouter();

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Form submitted with values:", values);
    // Here you would typically send the values to your backend API

    // fetch('/api/change-password',
    router.push('/vendor/home');
  }

  return (
    <Box
      sx={{
        border: "1px solid #D6D4D1",
        borderRadius: "10px",
        p: "16px 24px"
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid}) => (
          <Form>
            <Stack spacing={"24px"}
              sx={{width: '100%'}}
            >
              <Typography
              sx={{
                fontSize: pxToRem(20),
                fontWeight: 500,
                lineHeight: "120%"
              }}
              >
              Change Password
              </Typography>

              <FormikAppPasswordField
                name="currentPassword"
                label="current password"
              />

              <FormikAppPasswordField
                name="newPassword"
                label="Input New Password"
              />

              <FormikAppPasswordField
                name="confirmPassword"
                label="Confirm New Password"
              />
            </Stack>

            <AppButton
              type="submit"
              sx={{
                marginTop: '52px'
              }}
              fullWidth
              disabled={isSubmitting || !isValid}
            >
              Save Changes
            </AppButton>
          </Form>
        )}
      </Formik>
    </Box>
  )
}
