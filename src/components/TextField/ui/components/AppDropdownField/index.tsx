import { MenuItem, useTheme, Radio } from "@mui/material";
import { AppTextField, AppTextFieldProps } from "../AppTextField";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useField } from "formik";

export type AppDropdownFieldProps = Omit<
  AppTextFieldProps,
  "select" | "value" | "onChange" | "name"
> & {
  name: string;
  dropdownData: string[];
  onChange?: (e: React.ChangeEvent<{ value: unknown }>) => void;
  showRadioSelection?: boolean;
  maxHeight?: number | string;
  enableScroll?: boolean;
  onDropdownOpen?: () => void;
  onDropdownClose?: () => void;
};

export const AppDropdownField = ({
  name,
  dropdownData,
  onChange,
  placeholder,
  showRadioSelection = false,
  maxHeight = 300,
  enableScroll = false,
  onDropdownOpen, // Extract custom props
  onDropdownClose, // Extract custom props
  ...rest // Now rest won't contain custom props
}: AppDropdownFieldProps) => {
  const theme = useTheme();
  // Connect to Formik
  const [field, meta] = useField<string>(name);
  const hasError = Boolean(meta.touched && meta.error);

  // Check if field has a value for proper placeholder display
  const hasValue = field.value !== "" && field.value !== undefined;

  return (
    <AppTextField
      select
      {...field}
      {...rest} // Safe to spread now - no custom props
      error={hasError}
      helperText={hasError ? meta.error : rest.helperText}
      onChange={(e) => {
        field.onChange(e);
        if (onChange) {
          onChange(e as React.ChangeEvent<{ value: unknown }>);
        }
      }}
      SelectProps={{
        IconComponent: KeyboardArrowDown,
        displayEmpty: true,
        onOpen: () => {
          onDropdownOpen?.(); // Use extracted prop directly
        },
        onClose: () => {
          onDropdownClose?.(); // Use extracted prop directly
        },
        renderValue: (selected) => {
          if (!selected || selected === "") {
            return placeholder;
          }
          // Always return just the text value, never the radio button
          return selected as string;
        },
        // Only add MenuProps if scroll is enabled - otherwise keep original behavior
        ...(enableScroll && {
          MenuProps: {
            PaperProps: {
              sx: {
                maxHeight: maxHeight,
                overflowY: 'auto',
                padding: '16px',
                borderRadius: '10px',
                // Smooth dropdown animation
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                // Custom scrollbar styling
                '&::-webkit-scrollbar': {
                  width: '6px',
                },
                '&::-webkit-scrollbar-track': {
                  background: '#f1f1f1',
                  borderRadius: '3px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: '#c1c1c1',
                  borderRadius: '3px',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                  background: '#a8a8a8',
                },
              },
            },
            // Add smooth transition to the menu itself
            transitionDuration: 300,
          },
        }),
        sx: {
          ".MuiSvgIcon-root": {
            color: theme.palette.text.primary,
            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          },
          // Remove outline and maintain consistent border with default color
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#D5D5D5',
            borderWidth: '1px',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#D5D5D5',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#D5D5D5',
          },
          // Apply styles when placeholder is showing
          ...(hasValue ? {} : {
            color: "text.secondary",
            fontStyle: "italic"
          })
        },
        ...rest.SelectProps // Safe to spread SelectProps since custom props are filtered out
      }}
    >
      {/* Add empty option for placeholder - appears when nothing is selected */}
      {/* Only show if NOT using radio selection */}
      {!showRadioSelection && (
        <MenuItem disabled value="">
          <em>{placeholder}</em>
        </MenuItem>
      )}
      {dropdownData.map((option) => (
        <MenuItem
          key={option}
          value={option}
          sx={{
            // Only add radio styling if showRadioSelection is true
            ...(showRadioSelection && {
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              pl: 2,
              // Maintain padding within the scrollable area
              mx: 0,
              // Smooth hover effect
              transition: 'background-color 0.2s ease',
            }),
            // Remove default hover background for consistent styling
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
            },
            // Remove focus outline
            '&.Mui-focusVisible': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
            }
          }}
        >
          {/* Only show radio if showRadioSelection is true */}
          {showRadioSelection && (
            <Radio
              checked={field.value === option}
              size="small"
              sx={{
                padding: 0,
                marginRight: 1,
                // Default (unchecked) state - use default theme color
                color: theme.palette.action.disabled,
                // Checked state - orange color
                '&.Mui-checked': {
                  color: "#F98D31",
                },
                // Remove hover/focus effects on radio
                '&:hover': {
                  backgroundColor: 'transparent',
                },
                // Prevent pointer events to avoid interference
                pointerEvents: 'none'
              }}
            />
          )}
          {option}
        </MenuItem>
      ))}
    </AppTextField>
  );
};