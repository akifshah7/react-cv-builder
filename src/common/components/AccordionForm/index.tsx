import React, { useState } from "react";
import Input from "../Input";
import TextArea from "../TextArea";

const Form: React.FC = () => {
  return (
    <section className="grid grid-cols-1 mx-4 gap-4 md:grid-cols-2">
      {/* First Row */}
      <div className="col-span-1">
        <Input labelText="Job Title" name="jobTitle" />
      </div>
      <div className="col-span-1">
        <Input labelText="Employer" name="employer" />
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 col-span-1">
        <div>
          <Input placeholder="MM / YYYY" labelText="Start Date" name="startDate" />
        </div>
        <div>
          <Input placeholder="MM / YYYY" labelText="End Date" name="endDate" />
        </div>
      </div>
      <div className="col-span-1">
        <Input labelText="City" name="city" />
      </div>

      {/* Third Row */}
      <div className="col-span-2">
        <TextArea
          label="Description"
          placeholder="e.g. Led a team of software engineers to develop and deploy a complex application in a short timeframe"
          bottomLabel="Recruiter tip: write 200+ characters to increase interview chances"
        />
      </div>
    </section>
  );
};

const AccordionForm: React.FC = () => {
  const [formId, setFormId] = useState<string | null>(null);
  return (
    <div className="collapse collapse-arrow w-auto mx-4 rounded-sm border-[0.8px]">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title text-sm font-bold">(Not specified)</div>
      <div className="collapse-content m-0 p-0">
        <Form />
      </div>
    </div>
  );
};

export default AccordionForm;
