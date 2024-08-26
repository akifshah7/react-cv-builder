import PersonalDetails from "./details/PersonalDetails";
import ProfessionalSummary from "./details/ProfessionalSummary";
import EmploymentHistory from "./details/EmploymentHistory";

const Form = () => {
  return (
    <div>
      <PersonalDetails />
      <ProfessionalSummary />
      <EmploymentHistory />
    </div>
  );
};

export default Form;
