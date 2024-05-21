import { InputProps } from "./input.types";

export const Input: React.FC<InputProps> = ({
  onChange,
  placeholder,
  type,
  value,
  errorMessage,
  isInvalid,
  defaultValue,
}) => {
  const invalid = !!errorMessage || isInvalid;

  const validStyles =
    "border-gray-300 focus:ring-1 focus:ring-purple-600 focus:border-transparent shadow-xl";
  const invalidStyles =
    "border-red-500 focus:ring-1 focus:ring-red-600 focus:border-transparent shadow-xl";

  return (
    <div className="flex flex-col w-full bg-transparent z-20 gap-8">
      <div className="flex flex-col gap-1 w-full">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`border  rounded-md p-2 w-full focus:outline-none ${invalid ? invalidStyles : validStyles}`}
          defaultValue={defaultValue}
        />
        {invalid && (
          <span className="text-red-500 text-sm font-semibold">
            {errorMessage}
          </span>
        )}
      </div>
    </div>
  );
};
