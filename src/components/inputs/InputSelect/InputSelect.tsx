import React from "react";
import { Control, useController } from "react-hook-form";

type Props = {
  label?: string;
  name: string;
  placeholder: string;
  control: Control<any>;
  options: any[];
  readOnly?: boolean;
};

function InputSelect({
  label,
  name,
  placeholder,
  control,
  options = [],
  readOnly,
  ...rest
}: Props) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, error },
  } = useController({ name, control });

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const rawValue = event.target.value;
    const parsedValue = isNaN(Number(rawValue)) ? rawValue : Number(rawValue); // Parse value if it's a number
    onChange(parsedValue);
  };

  return (
    <div className="space-y-4">
      <div>
        {label && (
          <label className="block text-sm lg:text-[13px] text-slate-700 font-medium mb-2 dark:text-white">
            {label}
          </label>
        )}
        <div className="">
          <select
            id={name}
            name={name}
            onChange={handleChange}
            value={value ?? ""}
            ref={ref}
            onBlur={onBlur}
            className={`py-3 px-3 pe-9 block w-full ${invalid ? "border-red-500" : "border-gray-200"} rounded-lg text-sm lg:text-[13px] border focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600`}
            disabled={readOnly}
          >
            <option disabled={true} value={""} className="text-gray-500">
              {placeholder}
            </option>
            {options.map((val: any, key: any) => (
              <option key={key} value={val.code}>
                {val.display}
              </option>
            ))}
          </select>
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
            className="text-xs text-red-600 mt-2"
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

export default InputSelect;
