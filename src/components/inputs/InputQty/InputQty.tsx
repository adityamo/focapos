import React from "react";
import { Control, useController } from "react-hook-form";

type Props = {
  label?: string;
  name: string;
  control: Control<any>;
  min?: number;
  max?: number;
  step?: number;
  required?: boolean;
};

function InputQty({
  label,
  name,
  control,
  min = 1,
  max = 50,
  step = 1,
  required,
}: Props) {
  const {
    field: { onChange, value },
    fieldState: { error, invalid },
  } = useController({
    name,
    control,
    rules: {
      required: required ? "This field is required" : undefined,
      min: { value: min, message: `Minimum value is ${min}` },
      max: { value: max, message: `Maximum value is ${max}` },
    },
  });

  const handleIncrement = () => {
    const newValue = Math.min(Number(value || 0) + step, max);
    onChange(newValue);
  };

  const handleDecrement = () => {
    const newValue = Math.max(Number(value || 0) - step, min);
    onChange(newValue);
  };

  return (
    <div className="space-y-3">
      {label && (
        <label className="block text-xs font-medium text-gray-900 dark:text-white">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        <button
          type="button"
          onClick={handleDecrement}
          className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-10 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
        >
          <svg
            className="w-3 h-3 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h16"
            />
          </svg>
        </button>
        <input
          type="number"
          value={value || ""}
          onChange={(e) => onChange(Number(e.target.value))}
          min={min}
          max={max}
          step={step}
          className={`bg-white border h-10 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
            invalid ? "border-red-500" : "border-gray-300"
          }`}
        />
        <button
          type="button"
          onClick={handleIncrement}
          className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-10 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
        >
          <svg
            className="w-3 h-3 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
      </div>
      {invalid && <p className="text-xs text-red-600 mt-2">{error?.message}</p>}
    </div>
  );
}

export default InputQty;
