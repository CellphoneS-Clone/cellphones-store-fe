import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface SelectOption {
  value: number | string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  placeholder?: string;
  value?: SelectOption | null;
  onChange: (option: SelectOption) => void;
  label: string;
  disabled?: boolean;
  className?: string;
  id?: string;
  name?: string;
}

const Select = ({ 
  options, 
  placeholder = " ", 
  value, 
  onChange, 
  label, 
  disabled = false,
  className = '',
  id,
  name,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: SelectOption) => {
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={selectRef}>
      <div
        id={id}
        className={cn(
          
          isOpen ? "border-b-1 border-blue-700  focus:w-full transition-colors duration-300 ease-in-out bg-inherit ":"border-b w-full border-gray-300 py-1  cursor-pointer",
      
          className
        )}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <span className={`${!value ? 'text-transparent' : 'text-gray-800'}`}>
            {value ? value.label : placeholder}
          </span>
          <svg
            className={`h-5 w-5 text-gray-400 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      
      <label
        htmlFor={id}
        className={`absolute text-sm left-0 cursor-text transition-all ${
          isOpen || value ? ' -top-4 text-xs  ' + (isOpen ? 'text-blue-700 text-7xl' : 'text-gray-500 text-xs') : 'top-1 text-gray-500'
        }`}
      >
        {label}
      </label>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {options.length > 0 ? (
            options.map((option) => (
              <div
                key={option.value}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </div>
            ))
          ) : (
            <div className="p-2 text-gray-500">Không có dữ liệu</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Select;