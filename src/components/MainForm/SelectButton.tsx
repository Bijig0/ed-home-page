import CheckIcon from "./CheckIcon";
import type { AllStudentDetailsValues, LessonType } from "./types/types";
import { studentDetails } from "./useFormStore";

type Props<T> = {
  value: T;
  text: string;
  selected: (value: T) => boolean;
  handleSubmit: (value: T) => void;
};

const SelectButton = <
  T extends Exclude<Exclude<AllStudentDetailsValues, boolean>, LessonType>,
>(
  props: Props<T>
) => {
  const { value, text, selected, handleSubmit } = props;
  return (
    <label className="w-96 max-w-full flex items-center justify-center flex-shrink relative cursor-pointer data-[selected=true]:bg-cyan-500 data-[selected=true]:text-white text-center my-2 hover:bg-cyan-500 bg-white hover:text-white rounded-md min-h-14">
      <input
        id={`radio-${value}`}
        value={value}
        name="question3"
        type="radio"
        className="sr-only"
        onClick={() => handleSubmit(value)}
      />
      {text}
      <CheckIcon
        className="absolute right-[-3rem] top-1/2 transform -translate-y-1/2"
        enabled={value === studentDetails.get().year}
      />
    </label>
  );
};

export default SelectButton;

{
  /* <CheckIcon
  enabled={value === studentDetails.get().whoNeedsTutoring}
  className="absolute right-[-3rem] top-1/2 transform -translate-y-1/2"
/>; */
}
