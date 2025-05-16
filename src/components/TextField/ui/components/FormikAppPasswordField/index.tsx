import { FormikAppTextFieldProps } from "../FormikAppTextField";
import { useFormikAppTextField } from "../../../common";
import { AppPasswordField } from "../AppPasswordField";

export type FormikAppPasswordFieldProps = FormikAppTextFieldProps;

export const FormikAppPasswordField = (props: FormikAppPasswordFieldProps) => {
  const { ...restProps } = props;
  const { field, handleChange, hasError, errorMessage } =
    useFormikAppTextField(restProps);

  return (
    <AppPasswordField
      {...field}
      {...restProps}
      onChange={handleChange}
      error={hasError}
      errorMessage={errorMessage}
    />
  );
};
