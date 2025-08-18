import { forwardRef, useImperativeHandle, useState } from "react";

const CheckboxInput = forwardRef(
  ({ className, required, validations, labelPosition = "start", ...props }, ref) => {
    const [isChecked, setIsChecked] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
      setIsChecked(e.target.checked);
    };

    const runValidation = () => {
      let isValid = true;
      if (required && !isChecked) {
        setError("Este campo es obligatorio.");
        isValid = false;
      } else {
        setError("");
      }
      return isValid;
    };

    useImperativeHandle(ref, () => ({
      isValid: () => runValidation(),
      getValue: () => isChecked,
    }));

    const labelContent = (
      <>
        <input
          type="checkbox"
          id={props.id}
          name={props.name}
          checked={isChecked}
          required={required}
          onChange={handleChange}
          className="h-4 w-4 border-gray-300 rounded cursor-pointer"
        />
        {required && <span className="text-red-500">*</span>}
      </>
    );

    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {labelPosition === "end" && labelContent}
        <label htmlFor={props.id} className="block text-sm font-semibold">
          {props.label}
        </label>
        {labelPosition === "start" && labelContent}
        {error && <p className="text-red-500 text-xs">{error}</p>}
      </div>
    );
  }
);

export default CheckboxInput;
