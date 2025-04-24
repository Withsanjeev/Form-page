import React from "react";

interface FormInputProps {
  label: string;
  placeholder?: string;
  characterLimit?: number;
  value: string;
  onChange: (value: string) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder = "Type here",
  characterLimit,
  value,
  onChange,
}) => {
  return (
    <div className="mb-5">
      <div className="text-lg font-semibold text-[#252525] mb-2">{label}</div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="text-base text-[#666] w-full border bg-white p-4 rounded-lg border-solid border-[#6E7E92] outline-none"
      />
      {characterLimit && (
        <div className="text-xs text-[#666] mt-2">
          Text Limit {characterLimit} character{characterLimit !== 1 ? "s" : ""}{" "}
          only
        </div>
      )}
    </div>
  );
};

export default FormInput;
