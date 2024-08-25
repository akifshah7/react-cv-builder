import React from "react";

type InputProps = {
  labelText?: string;  
  placeholder?: string;
  customStyles?: string;
  name: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ placeholder, labelText, customStyles, name, value, onChange }) => {
  return (
    <div className="w-[45%] mx-4">
      <label className="mb-2 text-text-light-gray text-xs">{labelText || ""}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder || ""}
        className={`bg-light-gray rounded-sm p-4 w-full focus:outline-none border-b-0 focus:border-b-2 focus:border-blue-400 ${customStyles}`}
      />
    </div>
  );
};

export default Input;
