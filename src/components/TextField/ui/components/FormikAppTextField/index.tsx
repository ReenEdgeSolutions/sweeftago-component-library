"use client";

import { AppTextField, AppTextFieldProps } from "../AppTextField";
import { useFormikAppTextField } from "../../../common";

export type FormikAppTextFieldProps = Omit<AppTextFieldProps, "success"> & {
  validateBeforeTouch?: boolean;
};

export const FormikAppTextField = (props: FormikAppTextFieldProps) => {
  const { field, handleChange, hasError, errorMessage, label } = useFormikAppTextField(props);

  return (
    <AppTextField
      {...field}
      {...props}
      onChange={handleChange}
      error={hasError}
      errorMessage={errorMessage}
      label={label}
      placeholder=""
    />
  );
};