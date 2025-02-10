import React, { useState } from "react";
import { useRecoilState } from "recoil";
import Input from "../../common/components/Input";
import { personalDetailsState } from "../../common/state/person-details.atom";

const PersonalDetails: React.FC = () => {
  const [additionalDetails, setAdditionalDetails] = useState<boolean>(false);
  const [personalDetails, setPersonalDetails] = useRecoilState(personalDetailsState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalDetails({
      ...personalDetails,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-col gap-y-4 p-4 mx-4">
      <h1 className="text-xl font-bold text-black">Personal Details</h1>
      <div className="w-[45%]">
      <Input
        labelText="Wanted Job Title"
        name="jobTitle"
        value={personalDetails.jobTitle}
        onChange={handleInputChange}
      />
      </div>
      <div className="flex justify-between gap-x-4">
        <Input
          labelText="First Name"
          name="firstName"
          value={personalDetails.firstName}
          onChange={handleInputChange}
        />
        <Input
          labelText="Last Name"
          name="lastName"
          value={personalDetails.lastName}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex justify-between gap-x-4">
        <Input
          labelText="Email"
          name="email"
          value={personalDetails.email}
          onChange={handleInputChange}
        />
        <Input
          labelText="Phone"
          name="phone"
          value={personalDetails.phone}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex justify-between gap-x-4">
        <Input
          labelText="Country"
          name="country"
          value={personalDetails.country}
          onChange={handleInputChange}
        />
        <Input
          labelText="City"
          name="city"
          value={personalDetails.city}
          onChange={handleInputChange}
        />
      </div>
      {additionalDetails && (
        <>
          <div className="flex justify-between">
            <Input
              labelText="Address"
              name="address"
              value={personalDetails.address}
              onChange={handleInputChange}
            />
            <Input
              labelText="Postal Code"
              name="postalCode"
              value={personalDetails.postalCode}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-between">
            <Input
              labelText="Driving License"
              name="drivingLicense"
              value={personalDetails.drivingLicense}
              onChange={handleInputChange}
            />
            <Input
              labelText="Nationality"
              name="nationality"
              value={personalDetails.nationality}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-between">
            <Input
              labelText="Place Of Birth"
              name="placeOfBirth"
              value={personalDetails.placeOfBirth}
              onChange={handleInputChange}
            />
            <Input
              labelText="Date Of Birth"
              name="dateOfBirth"
              value={personalDetails.dateOfBirth}
              onChange={handleInputChange}
            />
          </div>
        </>
      )}
      <button
        onClick={() => setAdditionalDetails(!additionalDetails)}
        className="w-full text-start p-1 text-text-blue text-sm font-bold"
      >
        {!additionalDetails
          ? "Edit Additional Details"
          : "Hide Additional Details"}
      </button>
    </div>
  );
};

export default PersonalDetails;
