import { useForm } from "react-hook-form";
import { whoNeedsTutoring, type WhoNeedsTutoring } from "./types";
import { send } from "process";
import { useWizard } from "react-use-wizard";

type FormValues = {
  whoNeedsTutoring: WhoNeedsTutoring;
};

const text = {
  Child: "My child",
  Self: "I do",
  Other: "Someone else",
} satisfies Record<WhoNeedsTutoring, string>;

const Step1 = () => {
  const { handleStep, previousStep, nextStep } = useWizard();

  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    console.log(data);
    send({ type: "NEXT", payload: { studentDetails: data } });
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
          {console.log(value)}
          {value}
        </button>
      ))}
    </form>
  );
};

export default Step1;
