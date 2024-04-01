import { useForm } from "react-hook-form";

import { whoNeedsTutoring, type WhoNeedsTutoring } from "./types";

type FormValues = {
  whoNeedsTutoring: WhoNeedsTutoring;
};

const Step1 = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const { state, send } = useMainFormContext();
  const onSubmit = (data: FormValues) => {
    send({ type: "NEXT", payload: { studentDetails: data } });
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
