import { useState } from "react";
import { FormData } from "../types";

type FormTitle = "Personal Details" | "Education" | "Experience" | "Projects" | "Extras";

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    skills: "",

    exp1_org: "",
    exp1_pos: "",
    exp1_desc: "",
    exp1_dur: "",
    exp2_org: "",
    exp2_pos: "",
    exp2_desc: "",
    exp2_dur: "",

    proj1_title: "",
    proj1_link: "",
    proj1_desc: "",
    proj2_title: "",
    proj2_link: "",
    proj2_desc: "",

    edu1_school: "",
    edu1_year: "",
    edu1_qualification: "",
    edu1_desc: "",
    edu2_school: "",
    edu2_year: "",
    edu2_qualification: "",
    edu2_desc: "",
    
    extra_1: "",
    extra_2: "",
  });
  const [page, setPage] = useState<number>(0);

  const formTitle: FormTitle[] = [
    "Personal Details",
    "Education",
    "Experience",
    "Projects",
    "Extras"
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
    <h1 className="text-3xl">Enter Personal Details</h1>
    <form>

    </form>
    </div>
  );
};

export default Form;
