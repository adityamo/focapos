import React from "react";
import { Control, useController } from "react-hook-form";

type Props = {
  label?: string;
  name: string;
  placeholder: string;
  control: Control<any>;
  cols?: number;
  rows?: number;
  required?: boolean;
  readOnly?: boolean;
  minLength?: number;
  maxLength?: number;
  mandatory?: any;
};

function InputTextArea({
  label,
  name,
  placeholder,
  control,
  mandatory,
  required,
  ...rest
}: Props) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  return (
    <div className="space-y-4">
      <div>
        {label && (
          <label className="block text-xs lg:text-[13px] text-slate-700 font-medium mb-2 dark:text-white">
            {label}
          </label>
        )}
        <div className="relative">
          <textarea
            ref={ref}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            className={`py-3 px-4 block w-full border ${invalid ? "border-red-500" : "border-gray-200"}  rounded-lg text-xs lg:text-[13px] focus:outline-none focus:ring focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600`}
            {...rest}
          ></textarea>
          {invalid ? (
            <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
              <svg
                className="flex-shrink-0 size-4 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" x2="12" y1="8" y2="12"></line>
                <line x1="12" x2="12.01" y1="16" y2="16"></line>
              </svg>
            </div>
          ) : (
            ""
          )}
        </div>
        {invalid ? (
          <p
            className="text-sm text-red-600 mt-2"
            id="hs-validation-name-error-helper"
          >
            {error?.message}
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default InputTextArea;
