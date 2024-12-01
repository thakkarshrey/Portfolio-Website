import React from "react";
import "./Input.css";

export type InputProps = {
    name: string;
    variant?: "standard";
    onChange?: (event: React.SyntheticEvent<HTMLInputElement>) => void;
    customIcon?: React.ReactElement;
    disabled?: boolean
} & React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;

const Input = ({
    name,
    variant,
    onChange,
    customIcon,
    disabled,
    ...props
}: InputProps) => {

    /* function definition to handle on change */
    const handleChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
        onChange && onChange(event);
    };
    /* function definition to handle on change */

    return (
        <>
            <div className="input-container">
                <input
                    id={name}
                    {...props}
                    disabled={disabled}
                    className={`input-field ${disabled && "input-field-disabled"} ${variant ? `input-field-${variant}` : "input-field-outlined"} `}
                    onChange={handleChange}
                />
                {
                    customIcon &&
                    <div className="input-field-custom-icon flex_box flex_box--items-center flex_box--justify-center">
                        {customIcon}
                    </div>
                }
            </div>
        </>
    );
};

export default Input;
