import React from "react";
import Input from "../../common/Input";

const PersonalDetails: React.FC = () => {
  return (
    <div className="p-4 w-full h-full flex flex-col gap-y-4">
      <h1 className="text-xl font-bold text-black mx-2">Personal Details</h1>
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
    </div>
  );
};

export default PersonalDetails;
