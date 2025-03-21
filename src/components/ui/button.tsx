import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  form?: string;
  name?: string;
  value?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  disabled,
  type = "button",
  form,
  name,
  value,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-2 bg-[var(--button-background)] text-[var(--button-text)] rounded-md hover:bg-[var(--button-hover)] transition-all disabled:bg-gray-400 disabled:cursor-not-allowed ${className}`}
      type={type}
      form={form}
      name={name}
      value={value}
    >
      {children}
    </button>
  );
};

export default Button;