import { useForm } from "react-hook-form";
import { useWizard } from "react-use-wizard";
import { gradeLevel, type GradeLevel } from "./types";
import useFormStore from "./useFormStore";

type FormValues = {
  gradeLevel: GradeLevel;
};

const text = {
  "Elementary School": "Elementary School",
  "Middle School": "Middle School",
  "High School": "High School",
  College: "College",
  "Adult Learner": "Adult Learner",
  Other: "Other",
} satisfies Record<GradeLevel, string>;

const Step2 = () => {
  const updateStudentDetails = useFormStore(
    (state) => state.updateStudentDetails
  );
  const { handleStep, previousStep, nextStep } = useWizard();

  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    console.log(data);
    updateStudentDetails({ studentDetails: data });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Who needs tutoring?</h2>
      {gradeLevel.map((value) => (
        <button
          key={value}
          type="submit"
          {...register("gradeLevel")}
          defaultValue={value}
          value={value}
        >
          {text[value]}
        </button>
      ))}
    </form>
  );
};

export default Step2;
