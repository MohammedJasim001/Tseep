import { ChangeEvent } from 'react';

interface Option {
  value: string;
  label: string;
}

interface RadioProps {
  label: string;
  options: Option[];
  name: string;
  selectedValue?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  error?:string
}

const RadioGroup = ({ 
  label, 
  options, 
  name, 
  selectedValue, 
  onChange,
  className = "",
  error
}: RadioProps) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label className="block text-gray-700 mb-1 font-bold">
        {label} 
      </label>
      <div className="flex items-center gap-4">
        {options.map((option) => (
          <label key={option.value} className="flex items-center">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={onChange}
              className="mr-2"
            />
            {option.label}
          </label>
        ))}
      </div>
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
};

export default RadioGroup;