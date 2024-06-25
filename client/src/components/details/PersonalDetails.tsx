import React, { useState } from "react";
import Input from "../../common/Input";

const PersonalDetails: React.FC = () => {
  const [additionalDetails, setAdditionalDetails] = useState<boolean>(false);

  return (
    <div className="p-4 w-full h-full flex flex-col gap-y-4">
      <h1 className="text-xl font-bold text-black mx-4">Personal Details</h1>
      <Input labelText="Wanted Job Title" />
      <div className="flex justify-between">
        <Input labelText="First Name" />
        <Input labelText="Last Name" />
      </div>
      <div className="flex justify-between">
        <Input labelText="Email" />
        <Input labelText="Phone" />
      </div>
      <div className="flex justify-between">
        <Input labelText="Country" />
        <Input labelText="City" />
      </div>
      {additionalDetails && (
        <>
          <div className="flex justify-between">
            <Input labelText="Address" />
            <Input labelText="Postal Code" />
          </div>
          <div className="flex justify-between">
            <Input labelText="Driving License" />
            <Input labelText="Nationality" />
          </div>
          <div className="flex justify-between">
            <Input labelText="Place Of Birth" />
            <Input labelText="Date Of Birth" />
          </div>
        </>
      )}
      <button
        onClick={() => setAdditionalDetails(!additionalDetails)}
        className="w-1/4 text-t-blue text-sm font-bold mx-2"
      >
        {!additionalDetails ? "Edit Additional Details" : "Hide Additional Details"}
      </button>
    </div>
  );
};

export default PersonalDetails;
