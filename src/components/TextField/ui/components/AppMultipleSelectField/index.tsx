import { Box, IconButton, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import { AppTextField } from "../AppTextField";
import { RowStack } from "../../../../RowStack";
import { pxToRem } from "../../../../../common";
import fileAttach from "./ui/assets/icons/attach.svg"
import { StyledImage } from "../../../../StyledImage";
import deleteIcon from "../../../../../assets/icons/trash.svg"

type AppMultipleSelectFieldProps = {
  items: {
    cargoItemName: string;
    quantity: string;
    weight: string;
    attachment: File | null;
  }[];
  onDelete: (idx: number) => void;
  onAddClick?: () => void;
  addItem?: boolean;
};

export function AppMultipleSelectField({
  items,
  onDelete,
  onAddClick,
  addItem = true
}: AppMultipleSelectFieldProps) {
  return (
    <Box position="relative" sx={{ width: "100%" }}>
      <AppTextField
        multiline
        rows={Math.max(1, items.length + 1)}
        InputProps={{
          readOnly: true,
          sx: {
            color: "transparent",
            caretColor: "transparent",
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          px: 1,
          py: 1,
          pointerEvents: "none",
          overflowY: "auto",
        }}
      >
        {items.map((it, i) => {
          // build your display label
          const label = `${it.cargoItemName} (${it.weight})${it.quantity}`;
          return (
            <RowStack
              key={i}
              justifyContent="space-between"
              sx={{ pointerEvents: "auto", mb: 1 }}
            >
              <Box display="flex" alignItems="center" gap={0.5}>
                <Typography
                 sx={{
                  color: (theme) => theme.palette.text.primary,
                  fontWeight: 500,
                  fontFamily: (theme) => theme.font.body,
                  fontSize: pxToRem(16),
                  lineHeight: '24px'
                 }}
                >{label}</Typography>
                {it.attachment && (
                  <StyledImage src={fileAttach} alt="file" width={10} height={10} sx={{ width: '15px', height: '15px' }}  />
                )}
              </Box>
              <IconButton
                size="small"
                onClick={() => onDelete(i)}
                sx={{ pointerEvents: "auto" }}
              >
                <StyledImage src={deleteIcon} alt="file" width={10} height={10} sx={{ width: '15px', height: '15px' }}  />
              </IconButton>
            </RowStack>
          );
        })}
        {addItem && (
          <Box
            onClick={onAddClick}
            sx={{
              pointerEvents: "auto",
              mt: 2,
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              color: (theme) => theme.palette.text.secondary,
            }}
          >
            <Add fontSize="small" />
            <Typography variant="body2" ml={0.5}>
              Add item
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
