import { register } from "module";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useWizard } from "react-use-wizard";
import BackIcon from "./BackIcon";
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

  const { previousStep, nextStep } = useWizard();

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

  const handleBack = () => previousStep();

  return (
    <div className="flex ">
      <div className="flex flex-col items-start flex-[3_3_0%]">
        {/* <h1 className="text-4xl text-white font-primary">
          {headerText[studentDetails.whoNeedsTutoring]}
        </h1> */}
        <h1 className="text-white mb-6 text-4xl font-semibold leading-none tracking-tighter text-black lg:max-w-2xl">
          Do you want it online or in-person
        </h1>
        <div className="my-2"></div>
        <form className="flex flex-col items-center justify-center">
          <ul className="p-0">
            {lessonTypes.map((value) => (
              <li
                onClick={() => handleSelectLessonType(value)}
                key={value}
                className="border border-black cursor-pointer px-5 flex items-center justify-center block my-2 overflow-hidden hover:bg-cyan-500 bg-white hover:text-white rounded-md w-button min-h-14"
              >
                <label className="text-lg font-primary cursor-pointer">
                  {value}
                </label>
                <input
                  className="hover:text-white hidden"
                  value={value}
                  name="question3"
                  type="radio"
                />
              </li>
            ))}
          </ul>
        </form>
        <div className="flex items-center justify-start">
          <BackIcon />
          <button
            className="hover:underline text-lg font-primary"
            onClick={handleBack}
          >
            Back
          </button>
        </div>
      </div>
      <div className="flex flex-[2_2_0%] flex-col justify-end text-center p-8 items-center font-semibold">
        <div className="bg-light rounded-lg flex justify-center flex-col items-center px-8 py-8">
          <h2 className="mb-4 bg-rose-200 text-red-600 px-4 py-2 rounded-lg md:w-84 md:mx-auto text-xs font-semibold tracking-widest uppercase title-font">
            DID YOU KNOW?
          </h2>
          <p className="text-grey text-md font-primary font-light">
            Our experienced tutors{" "}
            <span className="inline text-grey text-md font-primary font-semibold">
              individualize their learning plans
            </span>{" "}
            to match each student's personal needs and goals!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step1;

return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <h2>Let's finish up your profile so we can find you the perfect tutor:</h2>
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
        <input
          {...register("zipCode", {
            required: "Zip code is required",
            pattern: {
              value: /^\d{4}$/,
              message: "Please enter a valid Australian zip code",
            },
          })}
        />
        <button type="submit">Continue</button>
      </>
    )}
  </form>
);
