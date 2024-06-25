import React from "react";

type InputProps = {
  labelText?: string;  
  placeholder?: string;
  customStyles?: string
};

const Input: React.FC<InputProps> = ({ placeholder, labelText, customStyles }) => {
  return (
    <div className="flex flex-col w-[45%] mx-2">
      <label className="mb-2 text-t-light-gray text-xs">{labelText || ""}</label>
      <input
        placeholder={placeholder || ""}
        className={`bg-light-gray rounded-sm p-4 w-full focus:outline-none border-b-0 focus:border-b-2 focus:border-blue-400 ${customStyles}`}
      />
    </div>
  );
};

export default Input;
