import { atom } from "recoil";
import { PersonalDetails } from "../../types";

export const personalDetailsState = atom<PersonalDetails>({
  key: "personalDetailsState",
  default: {
    jobTitle: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
    postalCode: "",
    drivingLicense: "",
    nationality: "",
    placeOfBirth: "",
    dateOfBirth: "",
  },
});
