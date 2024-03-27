import { forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, type = "text", error, ...rest }, ref) => {
    return (
      <div className="flex flex-col">
        <label>{label}</label>

        <input type={type} ref={ref} {...rest} className="border py-2 px-4" />

        {error && <span className="block text-red-600">{error.message}</span>}
      </div>
    );
  }
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
