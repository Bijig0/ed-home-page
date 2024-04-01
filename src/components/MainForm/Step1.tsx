import { useForm } from "react-hook-form";
import { useMainFormContext } from "./MainFormContext";
import { whoNeedsTutoring, type WhoNeedsTutoring } from "./types";

type FormValues = {
  whoNeedsTutoring: WhoNeedsTutoring;
};

const Step1 = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const { actions, state } = useMainFormContext();
  const onSubmit = (data: FormValues) => {
    actions.updateState(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Who needs tutoring?</h2>
      {whoNeedsTutoring.map((value) => (
        <button type="submit" {...register("whoNeedsTutoring")} value={value}>
          {value}
        </button>
      ))}
    </form>
  );
};

export default Step1;
