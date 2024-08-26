import { atom } from "recoil";
import { TextAreaState } from "../../types";

export const textAreaState = atom<TextAreaState>({
  key: "textAreaState",
  default: {
    textValue: "",
    bold: false,
    italic: false,
    underline: false,
    strikethrough: false,
    numberedList: false,
    bulletList: false,
  },
});
