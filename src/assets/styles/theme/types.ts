import { RecursivePartial } from "../../../common";

type ColorType = {
  blue: string;
  green: string;
  yellow: string;
  pink: string;
};


export type ButtonStateStyle = {
  background: string;
  border: string;
  color: string;
  hoverBackground: string;
  hoverColor: string;
  hoverBorder: string;
};

export type ButtonVariantStyle = {
  primary: ButtonStateStyle;
  secondary: ButtonStateStyle;
  inherit: ButtonStateStyle;
};

export type ButtonStyle = {
  contained: ButtonVariantStyle;
  outlined: ButtonVariantStyle;
  text: ButtonVariantStyle;
};

export type TextFieldStateStyle = {
  colors: {
    background: string;
    placeholder: string;
    text: string;
    label: string;
    border: string;
    error: string;
  };
};

export type TextFieldVariantStyle = {
  default: TextFieldStateStyle;
  focused: TextFieldStateStyle;
};

export type TextFieldStyle = {
  filled: TextFieldVariantStyle;
  outlined: TextFieldVariantStyle;
  assessment: TextFieldVariantStyle;
};

export type DataGridStyle = {
  header: {
    background: string;
    color: string;
  };
  row: {
    background: string;
    color: string;
    border: string;
    hoverBorder: string;
    hoverBackground: string;
    hoverShadow: string;
  };
};

export interface BaseThemeExtension {
  font: {
    default: string;
    title: string;
    body: string;
  };
  color: ColorType;
  button: ButtonStyle;
  textField: TextFieldStyle;
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
