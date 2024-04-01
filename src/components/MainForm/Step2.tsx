import React from "react";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateState from "./updateState";

const Step2 = (props) => {
  const { register, handleSubmit } = useForm();
  const { state, actions } = useStateMachine({ updateState });
  const onSubmit = (data) => {
    actions.updateState(data);
    props.history.push("./result");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 2</h2>
      <label>
        Age:
        <input {...register("age")} defaultValue={state.age} />
      </label>
      <label>
        Years of experience:
        <input {...register("yearsOfExp")} defaultValue={state.yearsOfExp} />
      </label>
      <input type="submit" />
    </form>
  );
};

export default Step2;
