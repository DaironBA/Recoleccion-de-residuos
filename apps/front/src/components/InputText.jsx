import { useState } from "react";

function InputText({ className, ...props }) {
    const [isFocused, setIsFocused] = useState(false);

    // Funciones para manejar el enfoque y desenfoque
    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            <label htmlFor={props.id} className="block text-sm font-semibold">{props.label}{props.required && <span >*</span>} </label>
            <div className={`flex items-center border border-gray-300 rounded-xl p-2 w-full h-10 ${isFocused ? 'border-gray-700 outline-none' : 'border-gray-300'}`}>
                {/* Ícono al inicio */}
                {props.startIcon && <props.startIcon className={`text-gray-700 aspect-square h-full mr-2 ${props.onStartIconClick ? 'cursor-pointer' : ''}`} onClick={props.onStartIconClick} />}
                <input
                    className='flex-1 w-full h-10 outline-none'
                    type={props.type}
                    id={props.id}
                    name={props.name}
                    placeholder={props.placeholder}
                    required={props.required}
                    onFocus={handleFocus}  // Cuando el input obtiene el foco
                    onBlur={handleBlur}    // Cuando el input pierde el foco
                />
                {props.endIcon && <props.endIcon className={`text-gray-700 aspect-square h-full ml-2 ${props.onEndIconClick ? 'cursor-pointer' : ''}`} onClick={props.onEndIconClick} />}
            </div>
        </div>
    );
}

export default InputText;
