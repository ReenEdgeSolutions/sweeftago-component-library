// "use client";

// import { Box, InputAdornment, IconButton, MenuItem, Select } from "@mui/material";
// import { useState, useEffect } from "react";
// import { StyledImage } from "../../../../../../components/StyledImage";
// import { pxToRem } from "../../../../../../common/utils";
// import arrowDownIcon from "../../../assets/icons/arrow_down.png";

// interface CountryCodeProps {
//   values: {
//     countryShort: string;
//     countryCode: string;
//   };
//   setFieldValue: (field: string, value: string) => void;
//   countryCodeData: Array<{ code: string; country: string }>;
//   setIsDropdownOpen: (val: boolean) => void;
// }

// export const CountryCode = ({
//   values,
//   setFieldValue,
//   countryCodeData,
//   setIsDropdownOpen,
// }: CountryCodeProps) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isInitialized, setIsInitialized] = useState(false);

//   useEffect(() => {
//     if (!isInitialized && countryCodeData.length > 0) {
//       const nigeriaCountry = countryCodeData.find(
//         (item) => item.code === "+234" && item.country === "NG"
//       );
//       if (nigeriaCountry) {
//         setFieldValue("countryShort", nigeriaCountry.country);
//         setFieldValue("countryCode", nigeriaCountry.code);
//       }
//       setIsInitialized(true);
//     }
//   }, [countryCodeData, setFieldValue, isInitialized]);

//   const handleIconClick = (e: React.MouseEvent) => {
//     e.stopPropagation(); // Prevent click outside event from closing the dropdown
//     setIsOpen((prev) => {
//       const newState = !prev;
//       setIsDropdownOpen(newState);
//       return newState;
//     });
//   };

//   const currentCountryShort = values.countryShort || "NG";
//   const currentCountryCode = values.countryCode || "+234";

//   return (
//     <InputAdornment
//       position="start"
//       sx={{
//         mr: 0,
//         backgroundColor: "transparent",
//         height: "100%",
//         display: "flex",
//         alignItems: "center",
//         py: 0,
//         pt: "15px",
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "flex-start",
//           borderRight: "1px solid #ccc",
//           mr: 1.5,
//         }}
//       >
//         <Box
//           component="span"
//           sx={{
//             height: "24px",
//             fontSize: pxToRem(14),
//             fontWeight: 400,
//             color: "#252423",
//             marginRight: "2px",
//             display: "flex",
//             alignItems: "center",
//             ml: "16px",
//             mr: "10px",
//           }}
//         >
//           {currentCountryCode}
//         </Box>

//         <IconButton
//           onClick={handleIconClick}
//           size="small"
//           sx={{
//             padding: 0,
//             zIndex: 2,
//             width: "24px",
//             height: "24px",
//             "&:hover": { backgroundColor: "transparent" },
//           }}
//         >
//           <StyledImage
//             src={arrowDownIcon.src}
//             alt="arrow down"
//             sx={{
//               width: "10px",
//               height: "5px",
//               transition: "transform 0.3s ease",
//               transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
//             }}
//           />
//         </IconButton>

//         <Select
//           open={isOpen}
//           onOpen={(e) => {
//             e.stopPropagation();
//             setIsOpen(true);
//             setIsDropdownOpen(true);
//           }}
//           onClose={() => {
//             setIsOpen(false);
//             setIsDropdownOpen(false);
//           }}
//           value={currentCountryShort}
//           onChange={(e) => {
//             const selected = countryCodeData.find(
//               (item) => item.country === e.target.value
//             );
//             if (selected) {
//               setFieldValue("countryShort", selected.country);
//               setFieldValue("countryCode", selected.code);
//             }
//           }}
//           sx={{
//             ".MuiOutlinedInput-notchedOutline": { border: "none" },
//             ".MuiSelect-select": {
//               paddingLeft: "0",
//               minWidth: "24px",
//               width: "24px",
//               fontSize: 0,
//               py: 0,
//               color: "transparent",
//               overflow: "hidden",
//               ml: "-30px",
//               mr: "-20px",
//             },
//             height: "24px",
//             border: "none",
//             backgroundColor: "transparent",
//             opacity: 0.01,
//             "&:hover": { backgroundColor: "transparent" },
//             "&.Mui-focused": {
//               backgroundColor: "transparent",
//               ".MuiOutlinedInput-notchedOutline": { border: "none" },
//             },
//             ".MuiSvgIcon-root": { display: "none" },
//           }}
//           IconComponent={() => null}
//           renderValue={() => ""}
//           MenuProps={{
//             sx: {
//               "& .MuiPaper-root": {
//                 mt: 1,
//               },
//             },
//           }}
//         >
//           {countryCodeData.map((item) => (
//             <MenuItem key={item.country} value={item.country}>
//               {item.code} {item.country}
//             </MenuItem>
//           ))}
//         </Select>
//       </Box>
//     </InputAdornment>
//   );
// };
