import { useState } from "react";
import { useForm } from "react-hook-form";
import { useWizard } from "react-use-wizard";
import useFormStore from "./useFormStore";

type FormValues = {
  zipCode: string;
};

const lessonTypes = ["online", "in-person"] as const;
type LessonType = (typeof lessonTypes)[number];

const Step1 = () => {
  const [lessonType, setLessonType] = useState<LessonType>();

  const updateStudentDetails = useFormStore(
    (state) => state.updateStudentDetails
  );

  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    console.log(data);
    updateStudentDetails({
      studentDetails: {
        lessonType: {
          lessonType: "in-person",
          zipCode: data.zipCode,
        },
      },
    });
    nextStep();
    return;
  };

  const { nextStep } = useWizard();

  const handleSelectLessonType = (value: LessonType) => {
    if (value === "online") {
      updateStudentDetails({
        studentDetails: { lessonType: { lessonType: "online" } },
      });
      nextStep();
      return;
    }
    setLessonType("in-person");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>
        Let's finish up your profile so we can find you the perfect tutor:
      </h2>
      {lessonTypes.map((value) => (
        <button
          type="button"
          key={value}
          defaultValue={value}
          value={value}
          onClick={() => handleSelectLessonType(value)}
        >
          {value}
        </button>
      ))}
      {lessonType === "in-person" && (
        <>
          <input {...register("zipCode")} />
          <button type="submit">Continue</button>
        </>
      )}
    </form>
  );
};

export default Step1;
