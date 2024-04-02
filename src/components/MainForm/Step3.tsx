import { useForm } from "react-hook-form";
import { useWizard } from "react-use-wizard";
import { reasonsForTutoring, type ReasonForTutoring } from "./types";
import useFormStore from "./useFormStore";

type FormValues = {
  reasonForTutoring: ReasonForTutoring;
};

const text = {
  "Help with class": "I need help with a class",
  "Preparing for est": "I'm preparing for a test",
  "Want to learn something new": "I want to learn something new",
  Other: "Other",
} satisfies Record<ReasonForTutoring, string>;

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
      {reasonsForTutoring.map((value) => (
        <button
          key={value}
          type="submit"
          {...register("reasonForTutoring")}
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
