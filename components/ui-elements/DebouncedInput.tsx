
import React, { useState, useEffect } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import { ThemedInput } from './ThemedInput';

interface DebouncedInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: string | number;
  onChange: (value: string) => void;
  debounce?: number;
}

export const DebouncedInput: React.FC<DebouncedInputProps> = ({ 
  value: initialValue, 
  onChange, 
  debounce = 300, 
  ...props 
}) => {
  const [value, setValue] = useState(initialValue);
  const debouncedValue = useDebounce(value, debounce);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    if (debouncedValue !== initialValue) {
      onChange(String(debouncedValue));
    }
  }, [debouncedValue, onChange, initialValue]);

  return (
    <ThemedInput
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
