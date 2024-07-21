import React, { useState } from "react";

type TextAreaProps = {
  label: string;
  placeholder: string;
  bottomLabel: string;
};

const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  label,
  bottomLabel,
}) => {
  const [bold, setBold] = useState<boolean>(false);
  const [italic, setItalic] = useState<boolean>(false);
  const [underline, setUnderline] = useState<boolean>(false);
  const [strikethrough, setStrikethrough] = useState<boolean>(false);
  const [numberedList, setNumberedList] = useState<boolean>(false);
  const [bulletList, setBulletList] = useState<boolean>(false);

  // State variable to track the value of the textarea
  const [textValue, setTextValue] = useState<string>("");

  // Handler to update the state when the user types
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    setTextValue(event.target.value);
  };

  return (
    <div className="mx-4 mb-2">
      <label className="text-text-light-gray text-sm">{label}</label>
      <div className="relative mt-2">
        <div className="bg-light-gray h-0 w-full flex absolute p-3 gap-x-3 rounded-sm">
          <button
            onClick={() => setBold(!bold)}
            className={`icon-[octicon--bold-24] h-5 w-5 ${
              bold ? "text-text-blue" : "text-black"
            }`}
          ></button>
          <button
            onClick={() => setItalic(!italic)}
            className={`icon-[octicon--italic-16] h-5 w-5 ${
              italic ? "text-text-blue" : "text-black"
            }`}
          ></button>
          <button
            onClick={() => setUnderline(!underline)}
            className={`icon-[mingcute--underline-fill] h-5 w-5 ${
              underline ? "text-text-blue" : "text-black"
            }`}
          ></button>
          <button
            onClick={() => setStrikethrough(!strikethrough)}
            className={`icon-[mingcute--strikethrough-fill] h-5 w-5 ${
              strikethrough ? "text-text-blue" : "text-black"
            }`}
          ></button>

          <div className="border-1 border-black border-r h-5"></div>

          <button
            onClick={() => setNumberedList(!numberedList)}
            className={`icon-[pajamas--list-numbered] h-5 w-5 ${
              numberedList ? "text-text-blue" : "text-black"
            }`}
          ></button>
          <button
            onClick={() => setBulletList(!bulletList)}
            className={`icon-[ooui--list-bullet-ltr] h-5 w-5 ${
              bulletList ? "text-text-blue" : "text-black"
            }`}
          ></button>

          <div className="border-1 border-black border-r h-5"></div>
        </div>
        <textarea
          value={textValue}
          onChange={handleChange}
          placeholder={placeholder}
          className="bg-light-gray w-full h-56 mt-6 rounded-sm focus:outline-none focus:border-b-2 focus:border-blue-400 px-4 py-6 text-black"
        />
        <label className="text-text-light-gray text-sm">{bottomLabel}</label>
      </div>
    </div>
  );
};

export default TextArea;
