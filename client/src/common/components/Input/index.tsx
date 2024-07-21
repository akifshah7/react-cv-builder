import React from "react";

type InputProps = {
  labelText?: string;  
  placeholder?: string;
  customStyles?: string;
};

const Input: React.FC<InputProps> = ({ placeholder, labelText, customStyles }) => {
  return (
    <div className="w-[45%] mx-4">
      <label className="mb-2 text-text-light-gray text-xs">{labelText || ""}</label>
      <input
        placeholder={placeholder || ""}
        className={`bg-light-gray rounded-sm p-4 w-full focus:outline-none border-b-0 focus:border-b-2 focus:border-blue-400 ${customStyles}`}
      />
    </div>
  );
};

export default Input;
