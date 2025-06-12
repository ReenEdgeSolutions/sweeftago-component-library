import { AppButton, FormikAppTextField, pxToRem, RowStack, StyledImage } from "@component-library";
import { Avatar, Badge, Box, IconButton, Stack, Typography } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Form, Formik } from "formik";
import * as Yup from 'yup';
import { useRef, useState } from "react";
import profileImg from "../../assets/image/profile.png"
import { StaticImageData } from "next/image";
import verifyIcon from "../../assets/icons/verified.svg";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  businessName: Yup.string()
    .required("Business name is required"),
  whatsappPhoneNumber: Yup.string()
    .required("Whatsapp phone number is required")
    .matches(/^\d+$/, "Phone number must contain only digits"),
});

export function GeneralInfo({
  infoIsCompleted,
  isVerified,
  setTabValue
}: {
  infoIsCompleted: () => void;
  isVerified: boolean;
  setTabValue: (value: number) => void;
}) {
  const [profileImage, setProfileImage] = useState<string | StaticImageData>(profileImg);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  interface ImageChangeEvent extends React.ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement & { files: FileList };
  }

  const handleImageChange = (event: ImageChangeEvent) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const initialValues = {
    email: "",
    businessName: "",
    whatsappPhoneNumber: "",
  }

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Submitting to backend", values);

    infoIsCompleted();
    setTabValue(1)
  };

  return (
    <Box
      sx={{
        border: "1px solid #D6D4D1",
        borderRadius: "10px",
        p: "16px 24px",
        display: "flex",
        flexDirection: "column",
        gap: "56px",
        width: "100%",
      }}
    >
      <Box sx={{ display: 'flex', p: 2 }}>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
            <IconButton
              onClick={handleImageClick}
              sx={{
                bgcolor: '#FFEBD9',
                '&:hover': { bgcolor: '#FFEBD9', opacity: 0.9 },
                boxShadow: 2,
              }}
              size="small"
            >
              <CameraAltIcon fontSize="small" sx={{color:"#F98D31"}}/>
            </IconButton>
          }
        >
          <Avatar
            src={typeof profileImage === 'string' ? profileImage : profileImage.src}
            alt="Profile Picture"
            sx={{ width: 100, height: 100}}
          />
        </Badge>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageChange}
          accept="image/*"
          style={{ display: 'none' }}
        />

        <RowStack>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: pxToRem(20),
              lineHeight: "120%",
              color: "#252423",
              alignSelf: "flex-end",
              ml: "10px"
            }}
          >
            Cakes & Creams
          </Typography>

          {isVerified && (
            <StyledImage
              src={verifyIcon}
              alt="Verified Icon"
              sx={{
                width: "24px",
                height: "24px",
                marginLeft: "8px",
                alignSelf: "flex-end",
              }}
            />
          )}
        </RowStack>

      </Box>

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
                component="div"
                sx={{
                  fontSize: pxToRem(20),
                  fontWeight: 500,
                  lineHeight: "120%"
                }}
              >
                General Information
              </Typography>

              <FormikAppTextField
                name="email"
                label="Email"
              />

              <FormikAppTextField
                name="businessName"
                label="Business Name"
              />

              {/* <FormikAppNumberField
                name="whatsappPhoneNumber"
                label="Whatsapp Phone Number"
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
