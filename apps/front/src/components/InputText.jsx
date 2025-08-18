import { forwardRef, useImperativeHandle, useState } from "react";

const InputText = forwardRef(({ className, required, validations, max, min, ...props }, ref) => {
    // Validations = ['email']
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
            }else{
            setError("");
            }
        }
        if (max) {
            if (value.length > max) {
                setError(`Este campo debe tener como máximo ${max} caracteres.`);
                isValid = false;
            }else{
                setError("");
            }
        }

        if (min) {
            if (value.length < min) {
                setError(`Este campo debe tener como mínimo ${min} caracteres.`);
                isValid = false;
            }else {
                setError("");
            }
        }
        if (validations && validations.length > 0) {
            validations.forEach((validation) => {
                if (validation === 'email') {
                    if (!/\S+@\S+\.\S+/.test(value)) {
                        setError("Este campo debe ser un correo electrónico válido.");
                        isValid = false;
                    }else{
                        setError("");
                    }
                }
            });
        }

        return isValid;
    };

    useImperativeHandle(ref, () => ({
        isValid: () => runValidation(value),
        getValue: () => value,
    }));
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            <label htmlFor={props.id} className="block text-sm font-semibold">{props.label}{props.required && <span >*</span>} </label>
            <div className={`relative flex items-center border border-gray-300 rounded-xl w-full h-10 overflow-hidden ${isFocused ? 'border-gray-700 outline-none' : 'border-gray-300'}`}>
                {/* Ícono al inicio */}
                {props.startIcon && <props.startIcon className={`absolute left-2 text-gray-700 aspect-square h-full mr-2 ${props.onStartIconClick ? 'cursor-pointer' : ''}`} onClick={props.onStartIconClick} />}
                <input
                    className={`flex-1 w-full pl-2 h-10 outline-none ${props.startIcon ? 'pl-10' : ''} ${props.endIcon ? 'pr-10' : ''}`}
                    type={props.type ?? 'text'}
                    id={props.id}
                    name={props.name}
                    placeholder={props.placeholder}
                    required={required}
                    onFocus={handleFocus}  // Cuando el input obtiene el foco
                    onBlur={handleBlur}    // Cuando el input pierde el foco
                    onChange={handleChange}
                    {...(max ? { maxLength: max } : {})}
                    {...(min ? { minLength: min } : {})}
                />
                {props.endIcon && <props.endIcon className={`absolute right-2 text-gray-700 aspect-square h-full ml-2 ${props.onEndIconClick ? 'cursor-pointer' : ''}`} onClick={props.onEndIconClick} />}
                {max && (
                <div className="text-right text-xs text-gray-500">
                    {value.length}/{max}
                </div>
                )}
            </div>
            {error && <p className="text-red-500 text-xs">{error}</p>}
        </div>
    );
});

export default InputText;
