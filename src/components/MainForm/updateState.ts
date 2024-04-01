import type { statSync } from "fs";
import type { GlobalState } from "./types";

export type Payload = Partial<GlobalState["formState"]["studentDetails"]> & {};

export default function updateState(
  state: GlobalState,
  payload: Payload
): GlobalState {
  console.log("state:", state);
  console.log("payload:", payload);
  const newState = {
    ...state,
    formState: { studentDetails: payload },
  } as GlobalState;
  return newState;
}
