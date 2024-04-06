import { map } from "nanostores";

type Globals = {
  isStepOne: boolean;
};

export const globals = map<Globals>({
  isStepOne: true,
});

export const updateGlobals = (toUpdate: Partial<Globals>) => {
  const keys = Object.keys(toUpdate) as (keyof Globals)[];
  keys.forEach((key) => {
    globals.setKey(key, toUpdate[key]!);
  });
};

import { atom } from "nanostores";
export const isStepOne = atom(true);
export const isLastStep = atom(false);
