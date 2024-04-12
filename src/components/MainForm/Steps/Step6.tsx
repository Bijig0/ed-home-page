import { useForm } from "react-hook-form";
import { useWizard } from "react-use-wizard";
import BackButton from "../BackButton";
import BackIcon from "../BackIcon";
import BreadCrumb from "../BreadCrumb";
import CheckIcon from "../CheckIcon";
import ErrorText from "../ErrorText";
import ProgressBar from "../ProgressBar";
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
      <div className="flex flex-col items-start flex-[3_3_0%]">
        <div>
          <BreadCrumb />
          <ProgressBar step={activeStep} />

          <div className="my-4"></div>
        </div>
        {/* <h1 className="text-4xl text-white font-primary">
          {headerText[studentDetails.whoNeedsTutoring]}
        </h1> */}
        {state.value === "choosingLessonType" && (
          <>
            <h1 className="text-white mb-6 text-4xl font-semibold leading-none tracking-tighter text-black lg:max-w-2xl">
              Do you want it online or in-person
            </h1>
            <div className="my-2"></div>
            <form className="flex flex-col items-center justify-center">
              <ul className="p-0">
                {lessonTypes.map((value) => {
                  console.log({ value });
                  return (
                    <div className="relative" key={value}>
                      <SelectButton
                        selected={(value) =>
                          value === studentDetails.get().lessonType?.lessonType
                        }
                        value={value}
                        text={capitalize(value)}
                        handleSubmit={handleSelectLessonType}
                      />
                      <CheckIcon
                        className="absolute right-[-3rem] top-1/2 transform -translate-y-1/2"
                        enabled={
                          value === studentDetails.get().lessonType?.lessonType
                        }
                      />
                    </div>
                  );
                })}
              </ul>
            </form>
          </>
        )}
        {state.value === "choosingLocation" && (
          <>
            <h1 className="text-white mb-6 text-2xl md:text-4xl font-semibold leading-none tracking-tighter text-black lg:max-w-2xl">
              Let's finish up your profile:
            </h1>
            <form
              className="flex flex-col items-start justify-center gap-4"
              onSubmit={handleSubmit(onInPersonSubmissionCompleted)}
            >
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
            </form>
          </>
        )}
        <div className="flex items-center justify-start">
          <BackIcon />
          <BackButton onClick={handleBack} />
        </div>
      </div>
      <div className="hidden-mobile-flex-normal flex-[2_2_0%] flex-col justify-end text-center p-8 items-center font-semibold">
        <div className="bg-light rounded-lg flex justify-center flex-col items-center px-8 py-8">
          <h2 className="mb-4 bg-rose-200 text-red-600 px-4 py-2 rounded-lg md:w-84 md:mx-auto text-xs font-semibold tracking-widest uppercase title-font">
            EduLine Tutors
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
