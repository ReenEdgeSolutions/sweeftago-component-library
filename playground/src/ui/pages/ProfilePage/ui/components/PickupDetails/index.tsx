import { AppButton, FormikAppTextField, pxToRem } from "@component-library";
import { Stack, Typography,Box } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  pickupAddress: Yup.string()
    .required("Pickup address is required"),
  pickupPhoneNumber: Yup.string()
    .required("Pickup phone number is required")
    .matches(/^\d+$/, "Phone number must contain only digits"),
});

export function PickDetails({
  PickDetailsIsCompleted,
  setTabValue
}: {
  PickDetailsIsCompleted: () => void;
  setTabValue: (value: number) => void;
}) {
  const initialValues = {
    pickupAddress: "",
    pickupPhoneNumber: "",
  }

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Submitting to backend", values);

    PickDetailsIsCompleted();
    setTabValue(2);
  };

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
                Pickup Details
              </Typography>

              <FormikAppTextField
                name="pickupAddress"
                label="Pickup Address1"
                fullWidth
              />

              {/* <FormikAppNumberField
                name="pickupPhoneNumber"
                label="Pickup Phone Number"
              /> */}
            </Stack>

            <AppButton
              type="submit"
              sx={{
                marginTop: '52px'
              }}
              fullWidth
              disabled={isSubmitting || !isValid}
              disableArrow
            >
              Save Changes
            </AppButton>
          </Form>
        )}
      </Formik>
    </Box>

  )
}
