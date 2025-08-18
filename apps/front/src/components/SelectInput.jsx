import { forwardRef, useImperativeHandle, useState } from "react";

const SelectInput = forwardRef(({ className, required, validations, options, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [error, setError] = useState("");
    const [value, setValue] = useState("");

    // Funciones para manejar el enfoque y desenfoque
    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleChange = (e) => {
        const val = e.target.value;
        setValue(val);
    };

    const runValidation = () => {
        let isValid = true;
        if (required) {
            if (!value) {
                setError("Este campo es obligatorio.");
                isValid = false;
            } else {
                setError("");
            }
        }

        if (validations && validations.length > 0) {
            validations.forEach((validation) => {
                if (validation === 'email' && value && !/\S+@\S+\.\S+/.test(value)) {
                    setError("Este campo debe ser un correo electrónico válido.");
                    isValid = false;
                }
            });
        }

        return isValid;
    };

    useImperativeHandle(ref, () => ({
        isValid: () => runValidation(),
        getValue: () => value,
        setValue: (val) => setValue(val),
    }));

    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            <label htmlFor={props.id} className="block text-sm font-semibold">
                {props.label}
                {required && <span>*</span>}
            </label>
            <div
                className={`relative flex items-center border border-gray-300 rounded-xl w-full h-10 overflow-hidden ${isFocused ? 'border-gray-700 outline-none' : 'border-gray-300'}`}
            >
                <select
                    id={props.id}
                    name={props.name}
                    value={value}
                    required={required}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={`flex-1 w-full pl-2 pr-2 h-10 outline-none cursor-pointer bg-white ${isFocused ? 'text-gray-900' : 'text-gray-700'}`}
                >
                    <option value="" disabled>
                        {props.placeholder || "Seleccione una opción"}
                    </option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
            {error && <p className="text-red-500 text-xs">{error}</p>}
        </div>
    );
});

export default SelectInput;
