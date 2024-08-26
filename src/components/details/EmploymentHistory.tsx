import React from "react";
import ExpandableCardForm from "../../common/components/ExpandableCardForm";

const EmploymentHistory: React.FC = () => {
  return (
    <div className="p-4 flex flex-col gap-y-2">
      <h1 className="text-xl font-bold text-black mx-4">Employment History</h1>
      <p className="text-text-light-gray text-sm mx-4">
        Show your relevant experience (last 10 years). Use bullet points to note
        your achievements, if possible - use numbers/facts (Achieved X, measured
        by Y, by doing Z).
      </p>
      <ExpandableCardForm />
    </div>
  );
};

export default EmploymentHistory;
