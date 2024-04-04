import type {
  AllStudentDetailsValues,
  LessonType,
  StudentDetails,
} from "./types";
import { studentDetails } from "./useFormStore";

type Props<T> = {
  value: T;
  text: string;
  mappingOver: keyof StudentDetails;
  handleSubmit: (value: T) => void;
};

const SelectButton = <
  T extends Exclude<Exclude<AllStudentDetailsValues, boolean>, LessonType>,
>(
  props: Props<T>
) => {
  const { value, text, mappingOver, handleSubmit } = props;
  return (
    <div key={value} className="relative">
      <li
        onClick={() => handleSubmit(value)}
        data-selected={value === studentDetails.get()[mappingOver]}
        className="cursor-pointer data-[selected=true]:bg-cyan-500 data-[selected=true]:text-white flex items-center justify-center block my-2 overflow-hidden hover:bg-cyan-500 bg-white hover:text-white rounded-md w-button max-w-full min-h-14"
      >
        <label className="text-lg cursor-pointer">{text}</label>
        <input
          className="hover:text-white hidden"
          value={value}
          name="question3"
          type="radio"
        />
      </li>
    </div>
  );
};

export default SelectButton;

{
  /* <CheckIcon
  enabled={value === studentDetails.get().whoNeedsTutoring}
  className="absolute right-[-3rem] top-1/2 transform -translate-y-1/2"
/>; */
}