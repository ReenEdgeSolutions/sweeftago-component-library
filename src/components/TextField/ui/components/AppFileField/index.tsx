"use client";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import deleteIcon from "../../assets/icons/cancel.png";
import { useField } from "formik";
import { useDropzone } from "react-dropzone";
import { useEffect, useState } from "react";
import { RowStack } from "../../../../RowStack";
import { StyledImage } from "../../../../StyledImage";
import { pxToRem } from "../../../../../common";

interface CustomFileUploadProps {
  name: string;
  accept: Record<string, string[]>;
  handleUpload?: (file: File) => void;
  onFileMetaExtract?: (meta: { name: string; size: string; preview: string }) => void;
}

export const AppFileField = ({
  name,
  accept,
  onFileMetaExtract,
  handleUpload,
}: CustomFileUploadProps) => {
  const [, , helpers] = useField(name);
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileSize, setFileSize] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isUploaded, setIsUploaded] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + " B";
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
    else return (bytes / 1048576).toFixed(1) + " MB";
  };

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      helpers.setValue(file);
      if (handleUpload && file) {
        if (file) {
          handleUpload?.(file);
        }
      }

      const name = file ? file.name : "";
      const size = file ? formatFileSize(file.size) : "0 B";
      const previewUrl = file ? URL.createObjectURL(file) : "";

      setFileName(name);
      setFileSize(size);
      setPreview(previewUrl);
      setIsUploaded(true);

      // Call the handleUpload prop
      if (handleUpload) {
        if (file) {
          handleUpload(file);
        }
      }

      if (onFileMetaExtract) {
        onFileMetaExtract({ name, size, preview: previewUrl });
      }
    }
  };

  const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
    accept,
    multiple: false,
    maxSize: 5 * 1024 * 1024, // 5MB in bytes
    onDrop, // Use the local onDrop function
  });

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    helpers.setValue("");
    setFileName(null);
    setFileSize(null);
    if (preview) {
      URL.revokeObjectURL(preview);
      setPreview(null);
    }
    setIsUploaded(false);

    if (onFileMetaExtract) {
      onFileMetaExtract({ name: "", size: "", preview: "" });
    }
  };

  return (
    <Box sx={{ marginBottom: "24px" }}>
      {isUploaded ? (
        <Box
          sx={{
            border: "1px solid #D5D5D5",
            borderRadius: "10px",
            padding: "16px 20px",
            display: "flex",
            flexDirection: "column",
            cursor: "pointer",
            minHeight: "100px",
          }}
        >
          <RowStack justifyContent={"space-between"} alignItems="center" mb="16px">
            <RowStack justifyContent={"flex-start"} alignItems="center">
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "4px",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "11px",
                }}
              >
                <Box
                  component="img"
                  src={preview!}
                  alt="Preview"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>

              <Stack spacing={"4px"} justifyContent={"center"} alignItems="flex-start">
                <Typography
                  sx={{
                    fontSize: { xs: pxToRem(14), md: pxToRem(16) },
                    fontWeight: 400,
                    color: "#252423",
                    lineHeight: "140%",
                  }}
                >
                  {fileName}
                </Typography>

                <Typography
                  sx={{
                    fontSize: pxToRem(10),
                    fontWeight: 400,
                    color: "#252423",
                    lineHeight: "130%",
                  }}
                >
                  {fileSize}
                </Typography>
              </Stack>
            </RowStack>

            <IconButton onClick={handleDelete} size="small" sx={{ padding: "4px" }}>
              <StyledImage
                src={deleteIcon}
                alt="Delete"
                sx={{
                  width: "24px",
                  height: "24px",
                }}
              />
            </IconButton>
          </RowStack>

          <Box
            sx={{
              width: "100%",
              height: "7px",
              backgroundColor: "#E8F5E9",
              marginTop: "4px",
              marginBottom: "2px",
              borderRadius: "2px",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "#4CAF50",
              }}
            />
          </Box>

          <Typography variant="body2" color="textSecondary" sx={{ paddingLeft: "4px" }}>
            Completed
          </Typography>
        </Box>
      ) : (
        <Box>
          <Box
            {...getRootProps()}
            sx={{
              border: "1px dashed #D5D5D5",
              borderRadius: "4px",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              minHeight: "100px",
              backgroundColor: isDragActive ? "#f7f7f7" : "transparent",
              "&:hover": { backgroundColor: "#f7f7f7" },
            }}
          >
            <input {...getInputProps()} />
            <CloudUploadIcon sx={{ fontSize: 40, color: "#D5D5D5", marginBottom: 2 }} />
            <Typography variant="body1" color="textPrimary" align="center">
              {isDragActive ? "Drop the file here..." : "Click or drag to upload"}
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 1 }}>
              or browse your file
            </Typography>
          </Box>
          {/* Error handling for file rejections */}
          tsx
          {fileRejections.length > 0 && (
            <Typography
              sx={{
                color: "error.main",
                fontSize: pxToRem(12),
                mt: 1,
                textAlign: "center",
              }}
            >
              {fileRejections[0]?.errors?.[0]?.message || "File upload failed"}
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};
