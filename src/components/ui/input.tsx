import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
  placeholder?: string;
  className?: string;
  error?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Input = ({ 
  label, 
  type = "text", 
  placeholder, 
  className = "", 
  error,
  name,
  value,
  onChange,
  onBlur,
  ...rest // Catch any other props
}: InputProps) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-1 font-bold">
        {label} 
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full p-2 border border-gray-300 rounded-md ${error ? 'border-red-500' : ''} ${className}`}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...rest}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
};

export default Input;