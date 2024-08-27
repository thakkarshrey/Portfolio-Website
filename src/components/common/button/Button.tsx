import "./Button.css";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "small";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, variant, size, ...props }: Props) => {
  return (
    <button
      className={`button 
        ${variant && `button--${variant}`} 
        ${size && `button--${size}`}
        `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
