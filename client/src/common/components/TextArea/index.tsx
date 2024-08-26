import React from "react";
import { useRecoilState } from "recoil";
import { textAreaState } from "../../state/prof-summary.atom";
import { TextAreaState } from "../../../types";

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
  const [textArea, setTextArea] = useRecoilState(textAreaState);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea({ ...textArea, textValue: event.target.value });
  };

  const toggleFormat = (format: keyof TextAreaState) => {
    setTextArea({ ...textArea, [format]: !textArea[format] });
  };

  return (
    <div className="mx-4 mb-2">
      <label className="text-text-light-gray text-sm">{label}</label>
      <div className="relative mt-2">
        <div className="bg-light-gray h-0 w-full flex absolute p-3 gap-x-3 rounded-sm">
          <button
            onClick={() => toggleFormat("bold")}
            className={`icon-[octicon--bold-24] h-5 w-5 ${
              textArea.bold ? "text-text-blue" : "text-black"
            }`}
          ></button>
          <button
            onClick={() => toggleFormat("italic")}
            className={`icon-[octicon--italic-16] h-5 w-5 ${
              textArea.italic ? "text-text-blue" : "text-black"
            }`}
          ></button>
          <button
            onClick={() => toggleFormat("underline")}
            className={`icon-[mingcute--underline-fill] h-5 w-5 ${
              textArea.underline ? "text-text-blue" : "text-black"
            }`}
          ></button>
          <button
            onClick={() => toggleFormat("strikethrough")}
            className={`icon-[mingcute--strikethrough-fill] h-5 w-5 ${
              textArea.strikethrough ? "text-text-blue" : "text-black"
            }`}
          ></button>

          <div className="border-1 border-black border-r h-5"></div>

          <button
            onClick={() => toggleFormat("numberedList")}
            className={`icon-[pajamas--list-numbered] h-5 w-5 ${
              textArea.numberedList ? "text-text-blue" : "text-black"
            }`}
          ></button>
          <button
            onClick={() => toggleFormat("bulletList")}
            className={`icon-[ooui--list-bullet-ltr] h-5 w-5 ${
              textArea.bulletList ? "text-text-blue" : "text-black"
            }`}
          ></button>

          <div className="border-1 border-black border-r h-5"></div>
        </div>
        <textarea
          value={textArea.textValue}
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
