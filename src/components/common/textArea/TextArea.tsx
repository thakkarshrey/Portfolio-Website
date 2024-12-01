import React from "react";
import "./TextArea.css";

export type InputProps = {
  name: string;
  disabled?: boolean;
  onChange?: (event: React.SyntheticEvent<HTMLTextAreaElement>) => void;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = ({ name, onChange, disabled, ...props }: InputProps) => {

  /* function definition to handle on change */
  const handleChange = (event: React.SyntheticEvent<HTMLTextAreaElement>) => {
    onChange && onChange(event)
  };
  /* function definition to handle on change */
  return (
    <>
      <div className="textarea-container">
        <textarea
          id={name}
          {...props}
          disabled={disabled}
          className={`text-area ${disabled && "text-area-disabled"} text-area-outlined`}
          onChange={handleChange}
        />
      </div>
    </>

  );
};

export default TextArea;

