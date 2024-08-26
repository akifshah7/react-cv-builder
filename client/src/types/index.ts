export type PersonalDetails = {
  jobTitle: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  address: string;
  postalCode: string;
  drivingLicense: string;
  nationality: string;
  placeOfBirth: string;
  dateOfBirth: string;
};

export type TextAreaState = {
  textValue: string;
  bold: boolean;
  italic: boolean;
  underline: boolean;
  strikethrough: boolean;
  numberedList: boolean;
  bulletList: boolean;
};
