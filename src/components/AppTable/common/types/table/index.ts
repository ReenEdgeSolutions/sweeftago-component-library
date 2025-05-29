import { SxProps, Theme } from '@mui/material';
import { StaticImageData } from 'next/image';
import { JSX } from 'react';

export interface TableColumn {
  id: string;
  label: string | React.ReactNode;
  sortable?: boolean;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
  format?: (value: any, row: any) => React.ReactNode;
  visible?: boolean;
  render?: (value: any) => JSX.Element | string | StaticImageData;
}

export interface TableAction {
  label: string;
  onClick: (row: any, index: number) => void;
  icon?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  disabled?: (row: any) => boolean;
}

export interface TableStyles {
  container?: SxProps<Theme>;
  table?: SxProps<Theme>;
  headerCell?: SxProps<Theme>;
  bodyCell?: SxProps<Theme>;
  bodyRow?: SxProps<Theme>;
  pagination?: SxProps<Theme>;
  customizeButton?: SxProps<Theme>;
}
