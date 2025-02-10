import React from "react";
import TextArea from "../../common/components/TextArea";

const ProfessionalSummary: React.FC = () => {
  return (
    <div className="p-4 mx-4 flex flex-col gap-y-2">
      <h1 className="text-xl font-bold text-black">
        Professional Summary
      </h1>
      <TextArea
        label="Write 2-4 short & energetic sentences to interest the reader! Mention
        your role, experience & most importantly - your biggest achievements,
        best qualities and skills."
        placeholder="e.g. Passionate science teacher with 8+ years of experience and a track record of..."
        bottomLabel="Recruiter tip: write 400-600 characters to increase interview chances"
      />
    </div>
  );
};

export default ProfessionalSummary;
