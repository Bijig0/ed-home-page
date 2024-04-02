import { useForm } from "react-hook-form";
import { useWizard } from "react-use-wizard";
import { howSoon, type HowSoon } from "./types";
import useFormStore from "./useFormStore";

type FormValues = {
  howSoon: HowSoon;
};

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
      {howSoon.map((value) => (
        <button
          key={value}
          type="submit"
          {...register("howSoon")}
          defaultValue={value}
          value={value}
        >
          {value}
        </button>
      ))}
    </form>
  );
};

export default Step2;
