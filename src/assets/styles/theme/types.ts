import { RecursivePartial } from "../../../common";

type ColorType = {
  blue: string;
  green: string;
  yellow: string;
  pink: string;
  error: string;
};


// Add these declarations to your theme file

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

// Add these to extend the Material UI Theme
declare module '@mui/material/styles' {
  interface Theme {
    font: {
      default: string;
      title: string;
      body: string;
    };
    color: {
      blue: string;
      green: string;
      yellow: string;
      pink: string;
      error: string;
    };
    button: {
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
    };
    textField: {
      outlined: TextFieldStyleVariant;
      filled: TextFieldStyleVariant;
    };
  }

  // Add it to ThemeOptions as well
  interface ThemeOptions {
    font?: {
      default?: string;
      title?: string;
      body?: string;
    };
    color?: {
      blue?: string;
      green?: string;
      yellow?: string;
      pink?: string;
      error?: string;
    };
    button?: {
      contained?: {
        primary?: Partial<ButtonStyle>;
        secondary?: Partial<ButtonStyle>;
        inherit?: Partial<ButtonStyle>;
      };
      outlined?: {
        primary?: Partial<ButtonStyle>;
        secondary?: Partial<ButtonStyle>;
        inherit?: Partial<ButtonStyle>;
      };
      text?: {
        primary?: Partial<ButtonStyle>;
        secondary?: Partial<ButtonStyle>;
        inherit?: Partial<ButtonStyle>;
      };
    };
    textField?: {
      outlined?: Partial<TextFieldStyleVariant>;
      filled?: Partial<TextFieldStyleVariant>;
    };
  }
}

export interface BaseThemeExtension {
  font: {
    default: string;
    title: string;
    body: string;
  };
  color: ColorType;
  button: ButtonStyle;
  textField: {
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
  };
}

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
