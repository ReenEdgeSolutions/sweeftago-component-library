// AppFileField.tsx
import { useCallback } from "react";
import { useDropzone, Accept } from "react-dropzone";
import { useField, useFormikContext } from "formik";
import {
  Box,
  Typography,
  IconButton,
  SxProps,
  Theme,
} from "@mui/material";
import { AttachFile } from "@mui/icons-material";
import deleteIcon from "../../../../../assets/icons/trash.svg";
import { StyledImage } from "../../../../StyledImage";

export interface AppFileFieldProps {
  /** the Formik field name to bind to */
  name: string;
  /** single‑file only */
  multiple?: false;
  /** mime‑types / extensions to accept */
  accept?: Accept;
  /** optional styling on the outer box */
  sx?: SxProps<Theme>;
}

interface MyFormValues {
  attachment?: File;
}

export function AppFileField({
  name,
  multiple = false,
  accept,
  sx,
}: AppFileFieldProps) {
  const { setFieldValue } = useFormikContext<MyFormValues>();
  const [field] = useField<File | undefined>(name);
  const value = field.value;

  // Drop‑handler: either first file or array
  const onDrop = useCallback(
    (files: File[]) => {
      const next = multiple ? files : files[0] ?? undefined;
      setFieldValue(name, next);
    },
    [multiple, name, setFieldValue]
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({ onDrop, multiple, accept });

  return (
    <Box
      {...getRootProps()}
      sx={{
        display: "flex",
        alignItems: "center",
        p: 1.5,
        border: "1px solid",
        borderColor: (theme) =>
          isDragActive
            ? theme.palette.primary.main
            : theme.palette.text.secondary,
        borderRadius: 1,
        cursor: "pointer",
        position: "relative",
        ...sx,
      }}
    >
      <input {...getInputProps()} />

      {/* startAdornment */}
      <AttachFile sx={{ mr: 1, color: "text.secondary" }} />

      {/* placeholder / filename */}
      <Typography
        variant="body2"
        color={value ? "text.primary" : "text.secondary"}
        sx={{ flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
      >
        {isDragActive
          ? "Drop file here…"
          : value
          ? value.name
          : "Click or drag to upload"}
      </Typography>

      {/* clear button */}
      {value && (
        <IconButton
          size="small"
          onClick={(e) => {
            e.stopPropagation();
            setFieldValue(name, undefined);
          }}
          sx={{
            position: "absolute",
            right: 4,
            // center vertically
            top: "50%",
            transform: "translateY(-50%)",
          }}
          title="Remove"
        >
          <StyledImage
            src={deleteIcon}
            alt="delete"
            width={10}
            height={10}
            sx={{ width: "20px", height: "20px" }}
          />
        </IconButton>
      )}
    </Box>
  );
}
