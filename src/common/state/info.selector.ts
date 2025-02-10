import { selector } from "recoil";
import { personalDetailsState } from "./person-details.atom";

export const infoSelector = selector<string>({
    key: 'infoSelector',
    get: ({get}) => {
        const personalDetails = get(personalDetailsState);

        const infoFields = [
            personalDetails.address,
            personalDetails.city,
            personalDetails.postalCode,
            personalDetails.country,
            personalDetails.phone,
            personalDetails.email
        ];

        return infoFields.filter(field => field).join(', ');
    },
    
})