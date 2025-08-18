import { RecursivePartial } from "../../../common";

type ColorType = {
  blue: string;
  green: string;
  yellow: string;
  pink: string;
  error: string;
};

// Define the types for button styles
interface ButtonStyle {
  background: string;
  color: string;
  border: string;
  hoverBackground: string;
  hoverColor: string;
  hoverBorder: string;
  focusBackground?: string;
  focusColor?: string;
  focusBorder?: string;
  shadow?: string;
}

// Define types for text field styles
interface TextFieldStyleState {
  colors: {
    background: string;
    placeholder: string;
    text: string;
    label: string;
    border: string;
    errorBg?: string;
    errorBorder?: string;
    error: string;
  };
}

interface TextFieldStyleVariant {
  default: TextFieldStyleState;
  focused: TextFieldStyleState;
}

// Button collection interface
interface ButtonCollection {
  contained: {
    primary: ButtonStyle;
    secondary: ButtonStyle;
    inherit: ButtonStyle;
  };
  outlined: {
    primary: ButtonStyle;
    secondary: ButtonStyle;
    inherit: ButtonStyle;
  };
  text: {
    primary: ButtonStyle;
    secondary: ButtonStyle;
    inherit: ButtonStyle;
  };
}

// TextField collection interface
interface TextFieldCollection {
  outlined: TextFieldStyleVariant;
  filled: TextFieldStyleVariant;
}

export interface BaseThemeExtension {
  font: {
    default: string;
    title: string;
    body: string;
  };
  color: ColorType;
  button: ButtonCollection;  // Fixed: was ButtonStyle, should be ButtonCollection
  textField: TextFieldCollection;  
}

// Single module declaration - no duplicates
declare module "@mui/material/styles" {
  interface Theme extends BaseThemeExtension {
    /**
     * Dummy field to avoid `no-empty-object-type` lint error
     */
    _augmentedBrand?: never;
  }

  interface ThemeOptions extends RecursivePartial<BaseThemeExtension> {
    /**
     * Same dummy field for ThemeOptions
     */
    _augmentedBrand?: never;
  }
}