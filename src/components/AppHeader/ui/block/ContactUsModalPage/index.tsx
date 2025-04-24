// import { Box, Stack, Typography} from "@mui/material";
// import { Form, Formik } from "formik";
// import * as Yup from "yup";
// import { ApiContactUsPayload } from "@/common/types";
// import { useContactUs } from "@/common/hooks";

// interface ContactUsModalPageProps {
//   onClose: () => void;
//   onSuccess: () => void;
// }

// export const ContactUsModalPage = ({ onClose, onSuccess }: ContactUsModalPageProps) => {
//   const { mutate: contactUs } = useContactUs();

//   // Define form validation schema
//   const validationSchema = Yup.object({
//     fullName: Yup.string()
//       .trim()
//       .required("Full name is required")
//       .min(2, "Full name must be at least 2 characters"),
//     email: Yup.string()
//       .email("Please enter a valid email address")
//       .required("Email address is required"),
//     textAria: Yup.string()
//       .trim()
//       .required("Message is required")
//       .min(2, "Message must be at least 2 characters"),
//   });

//     const initialValues = {
//       fullName: "",
//       email: "",
//       message: ""
//     }

//     const handleSubmit = async (values: ApiContactUsPayload) => {
//     try {
//       const result = await contactUs(values);
//       console.log("res", result.status);
//       if(result.status === 200) {
//         onClose();
//         onSuccess();
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <Stack
//       sx={{
//         width: { xs: "328px", sm: "510px",md: "724px" },
//         p:{ xs: "20px", sm: "30px", md: " 42px 20px"},
//         borderRadius: { xs: "8px", sm: "20px" },
//         backgroundColor: " #f2f2f2",
//       }}
//     >
//       <Box sx={{ p:{sm:"0 55px",md: " 0 137px"} }} >
//         <Typography
//           sx={{
//             fontSize: {xs: pxToRem(24), md: pxToRem(30)},
//             fontWeight: {xs: 600, md: 700},
//             lineHeight: {xs: "32px", md: "38px"},
//             color: (theme) => theme.palette.text.primary,
//             textAlign: "center",
//             mb: "8px"
//           }}
//         >
//           Get in Touch
//         </Typography>

//         <Typography
//           sx={{
//             fontSize:{xs: pxToRem(14), md: pxToRem(16)},
//             fontWeight: {xs: 400, md: 500},
//             lineHeight: {xs: "20px", md: "24px"},
//             color: (theme) => theme.palette.text.secondary,
//             textAlign: "center",
//             mb: "24px"
//           }}
//         >
//           Have any questions or inquiries? We’re happy to hear from you!
//         </Typography>

//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
//           {({isSubmitting, values, errors }) => (
//               <Form>
//               <Stack spacing={"24px"}>
//                 <Box width="100%">
//                   <Typography
//                     sx={{
//                       fontSize: pxToRem(14),
//                       fontWeight: 500,
//                       color: (theme) => theme.palette.text.primary,
//                       mb: "6px"
//                     }}
//                   >
//                     Full name
//                   </Typography>
//                   <FormikAppTextField
//                     name="fullName"
//                     type="text"
//                     placeholder="Input full name"
//                     variant="outlined"
//                   />
//                 </Box>

//                 <Box width="100%">
//                   <Typography
//                     sx={{
//                       fontSize: pxToRem(14),
//                       fontWeight: 500,
//                       color: (theme) => theme.palette.text.primary,
//                       mb: "6px"
//                     }}
//                   >
//                     Email address
//                   </Typography>
//                   <FormikAppTextField
//                     name="email"
//                     type="email"
//                     placeholder="Input your email address"
//                     variant="outlined"
//                   />
//                 </Box>

//                 <FormikAppTextField
//                   name="message"
//                   type="text"
//                   placeholder="Type in your message..."
//                   // variant="outlined"
//                   multiline
//                   rows={2}
//                   sx={{
//                     "& .MuiInputBase-root": {
//                       padding: 0, // Removes padding inside the input
//                     },
//                   }}
//                 />

//                 <RowStack spacing={"20px"}
//                   sx={{
//                     mt: {xs:"32", md: "60px"},
//                     justifyContent: "space-between"
//                   }}
//                 >
//                   <AppButton
//                     onClick={onClose}
//                     disableArrow
//                     sx={{
//                       width: "104px",
//                       backgroundColor: "transparent",
//                       border: (theme) => `1px solid ${theme.driverWaitlist.border}`,
//                       cursor: 'pointer',
//                       "&:hover": {
//                         backgroundColor: "transparent",
//                         border: (theme) => `1px solid ${theme.driverWaitlist.border}`,
//                       }
//                     }}
//                   >
//                     Cancel
//                   </AppButton>

//                   <AppButton
//                     type="submit"
//                     disabled={Object.keys(errors).length > 0 || !values.fullName || !values.email }
//                     isLoading={isSubmitting}
//                     disableArrow
//                     sx={{flex: 1}}
//                   >
//                     Continue
//                   </AppButton>
//                 </RowStack>
//               </Stack>
//             </Form>
//           )}

//         </Formik>
//       </Box>
//     </Stack>
//   );
// };