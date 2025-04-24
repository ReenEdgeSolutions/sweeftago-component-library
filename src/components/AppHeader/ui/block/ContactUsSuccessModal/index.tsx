// import { Box, Stack, Typography } from "@mui/material";
// import successIcon from "@/ui/assets/icons/success.png"
// import { StyledImage, pxToRem} from '@flxfleet-frontend-apps/component-library';


// export const ContactUsSuccessModal = () => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         width: { xs: "320px", md: "478px"},
//         borderRadius: "20px",
//         p: "44px",
//         gap: {xs: "30px", sm: "60px"},
//       }}
//     >
//       <Stack spacing="24px" alignItems={"center"} maxWidth={"256px"} mx={"auto"}>
//         <StyledImage
//           src={successIcon}
//           alt="success icon"
//           sx={{
//             width: {xs: "50px", sm: "92px"},
//             height: {xs: "50px", sm: "92px"}
//           }}
//         />

//         <Typography
//           sx={{
//             fontSize: pxToRem(20),
//             fontWeight: 500,
//             lineHeight: "30px",
//             textAlign: "center",
//             color: (theme) => theme.palette.text.primary,
//           }}
//         >
//           Message sent, our team will respond to you, typically within 24 hours
//         </Typography>
//       </Stack>
//     </Box>
//   );
// }