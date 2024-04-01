import { useForm } from "react-hook-form";
import { whoNeedsTutoring, type Payload, type WhoNeedsTutoring } from "./types";

type FormValues = {
  whoNeedsTutoring: WhoNeedsTutoring;
};

type Props = {
  send: (data: { type: string; payload: Payload["payload"] }) => void;
};

const Step1 = (props: Props) => {
  const { send } = props;
  const { register, handleSubmit } = useForm<FormValues>();
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
