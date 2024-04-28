import { useForm } from "react-hook-form";
import { useWizard } from "react-use-wizard";
import ErrorText from "../ErrorText";
import LeftSideFormPartLayout from "../LeftSideFormPartLayout";
import SelectButton from "../SelectButton";
import { studentDetails } from "../useFormStore";
import useLessonTypeStateMachine from "../useLessonTypeStateMachine";

type FormValues = {
  zipCode: string;
};

const lessonTypes = ["online", "in-person"] as const;
type LessonType = (typeof lessonTypes)[number];

const Step1 = () => {
  const [state, send] = useLessonTypeStateMachine();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onInPersonSubmissionCompleted = (data: FormValues) => {
    send({
      type: "CHOOSE_LOCATION",
      value: {
        zipCode: data.zipCode,
      },
    });
  };

  const { activeStep } = useWizard();

  const handleSelectLessonType = (value: LessonType) => {
    if (value === "online") {
      send({ type: "CHOOSE_ONLINE" });
      return;
    } else if (value === "in-person") {
      send({ type: "CHOOSE_IN_PERSON" });
    }
  };

  const handleBack = () =>
    send({ type: "BACK", value: { prevState: state.value } });

  console.log(state.value);

  const capitalize = (value: string) =>
    `${value.charAt(0).toUpperCase()}${value.slice(1)}`;

  return (
    <div className="flex ">
      {state.value === "choosingLessonType" && (
        <LeftSideFormPartLayout
          activeStep={activeStep}
          headerText="Do you want online or in-person tutoring?"
        >
          {lessonTypes.map((value) => {
            console.log({ value });
            return (
              <SelectButton
                selected={(value) =>
                  value === studentDetails.get().lessonType?.lessonType
                }
                value={value}
                text={capitalize(value)}
                handleSubmit={handleSelectLessonType}
              />
            );
          })}
        </LeftSideFormPartLayout>
      )}
      {state.value === "choosingLocation" && (
        <LeftSideFormPartLayout<FormValues>
          activeStep={activeStep}
          headerText="Let's finish up your profile:"
          onSubmit={handleSubmit(onInPersonSubmissionCompleted)}
        >
          <div className="flex flex-col items-start justify-center gap-4">
            <label
              className="block text-gray-700 text-sm font-bold"
              htmlFor="zipCode"
            >
              Zip Code *
            </label>
            <input
              className="border-px border-black h-16 text-lg shadow bg-light appearance-none border rounded w-80 px-4 py-2text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="zipCode"
              type="text"
              placeholder="Zip Code"
              {...register("zipCode", {
                required: "Zip code is required",
                pattern: {
                  value: /^\d{4}$/,
                  message: "Please enter a valid Australian zip code",
                },
              })}
            />
            {errors["zipCode"] && (
              <ErrorText>{errors["zipCode"].message}</ErrorText>
            )}
            <button
              className="button button-primary px-16 py-3 text-xl"
              type="submit"
            >
              Continue
            </button>
          </div>
        </LeftSideFormPartLayout>
      )}
      <div className="hidden-mobile-flex-normal flex-[2_2_0%] flex-col justify-end text-center p-8 items-center font-semibold">
        <div className="bg-light rounded-lg flex justify-center flex-col items-center px-8 py-8">
          <h2 className="mb-4 bg-rose-200 text-red-600 px-4 py-2 rounded-lg md:w-84 md:mx-auto text-xs font-semibold tracking-widest uppercase title-font">
            Hi-Up Tutors
          </h2>
          <p className="text-black text-base font-primary font-light">
            Our tutors are filtered to have the highest academic standards and
            hand-selected for the best teaching abilities!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step1;
