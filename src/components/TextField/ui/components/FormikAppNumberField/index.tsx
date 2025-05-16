// "use client";

// import { useState, useEffect, useRef } from "react";
// import { FormikAppTextField, FormikAppTextFieldProps } from "../FormikAppTextField";
// import { CountryCode } from "./CountryCode";
// import { useFormikContext } from "formik";
// import { Box } from "@mui/material";

// type FormikAppNumberFieldProps = Omit<FormikAppTextFieldProps, "name" | "type"> & {
//   countryCodeData: Array<{ code: string; country: string }>;
// };

// export const FormikAppNumberField = ({
//   countryCodeData,
//   ...rest
// }: FormikAppNumberFieldProps) => {
//   const { values, setFieldValue } = useFormikContext<{
//     phoneNumber: string;
//     countryShort: string;
//     countryCode: string;
//   }>();

//   const [isFocused, setIsFocused] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const containerRef = useRef<HTMLDivElement>(null);

//   // Always show country code adornment
//   const showCountryCode = true;

//   useEffect(() => {
//     if (!values.countryCode && countryCodeData.length > 0) {
//       if (countryCodeData[0]) {
//         setFieldValue("countryCode", countryCodeData[0].code);
//         setFieldValue("countryShort", countryCodeData[0].country);
//       }
//     }
//   }, [countryCodeData, setFieldValue, values.countryCode]);

//   // Handle click outside to close dropdown and reset states
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
//         if (isDropdownOpen) {
//           setIsDropdownOpen(false);
//         }
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isDropdownOpen]);

//   return (
//     <Box ref={containerRef}>
//       <FormikAppTextField
//         {...rest}
//         isNumber={true}
//         isDropdownOpen={isDropdownOpen}
//         onFocus={(e) => {
//           setIsFocused(true);
//           rest.onFocus?.(e);
//         }}
//         onBlur={(e) => {
//           setIsFocused(false);
//           rest.onBlur?.(e);
//         }}
//         slotProps={{
//           input: {
//             startAdornment: (
//               <CountryCode
//                 values={{
//                   countryCode: values.countryCode,
//                   countryShort: values.countryShort,
//                 }}
//                 setFieldValue={setFieldValue}
//                 countryCodeData={countryCodeData}
//                 setIsDropdownOpen={setIsDropdownOpen}
//               />
//             ),
//             sx: {
//               paddingLeft: showCountryCode ? "0 !important" : undefined,
//             },
//           },
//         }}
//         sx={{
//           "& .MuiOutlinedInput-root": {
//             "& fieldset": { border: "1px solid #D5D5D5" },
//             "&:hover fieldset": { border: "1px solid #D5D5D5" },
//             "&.Mui-focused fieldset": { border: "1px solid #D5D5D5" },
//             "& input": {
//               paddingLeft: showCountryCode ? "0 !important" : undefined,
//             },
//           },
//           ...rest.sx,
//         }}
//       />
//     </Box>
//   );
// };