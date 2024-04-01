import React from "react";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateState, { type Payload } from "./updateState";

const Step1 = () => {
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateState });
  const onSubmit = (data: Payload) => {
    actions.updateState(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 1</h2>
      <label>
        First Name:
        <input {...register("firstName")} defaultValue={state.firstName} />
      </label>
      <label>
        Last Name:
        <input {...register("lastName")} defaultValue={state.lastName} />
      </label>
      <input type="submit" />
    </form>
  );
};

export default withRouter(Step1);
