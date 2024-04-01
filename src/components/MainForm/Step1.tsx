import React from "react";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateState, { type Payload } from "./formStateMachine";
import { whoNeedsTutoring } from "./types";
import { type WhoNeedsTutoring } from "./types";

type FormValues = {
  whoNeedsTutoring: WhoNeedsTutoring;
};

const Step1 = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const { actions, state } = useStateMachine({ updateState });
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
