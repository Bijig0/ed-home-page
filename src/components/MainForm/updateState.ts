import type { GlobalState } from "./types";

export default function updateState(
  state: GlobalState,
  payload: GlobalState["yourDetails"]
) {
  console.log("state:", state);
  console.log("payload:", payload);
  return {
    ...state,
    ...payload,
  };
}
