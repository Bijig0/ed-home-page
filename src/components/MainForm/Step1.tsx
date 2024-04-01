import { useForm } from "react-hook-form";
import { useWizard } from "react-use-wizard";
import { whoNeedsTutoring, type WhoNeedsTutoring } from "./types";
import useFormStore from "./useFormStore";

type FormValues = {
  whoNeedsTutoring: WhoNeedsTutoring;
};

const text = {
  Child: "My child",
  Self: "I do",
  Other: "Someone else",
} satisfies Record<WhoNeedsTutoring, string>;

const Step1 = () => {
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
      {whoNeedsTutoring.map((value) => (
        <button
          type="submit"
          {...register("whoNeedsTutoring")}
          defaultValue={value}
          value={value}
        >
          {value}
        </button>
      ))}
    </form>
  );
};

export default Step1;
