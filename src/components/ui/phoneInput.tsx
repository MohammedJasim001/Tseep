import { InputHTMLAttributes } from 'react';
import { CountryFlag } from './country';

interface PhoneInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  className?: string;
  error?:string
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const PhoneInput = ({ 
  label, 
  placeholder, 
  className = "",
  error,
  name,
  value,
  onChange,
  onBlur,
}: PhoneInputProps) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-1 font-bold">
        {label}
      </label>
        <div className={`flex items-center gap-2 ${className}`}>
        <span className="text-lg w-28 p-2  border border-gray-200 rounded-md"><CountryFlag/> </span>
        <input 
           placeholder={placeholder}
           className={`w-full p-2 border border-gray-300 rounded-md ${error ? 'border-red-500' : ''} ${className}`}
           name={name}
           value={value}
           onChange={onChange}
           onBlur={onBlur}
        />
      </div>
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
};

export default PhoneInput;