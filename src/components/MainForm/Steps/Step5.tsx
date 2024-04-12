import { useForm } from "react-hook-form";
import { useWizard } from "react-use-wizard";
import BackButton from "../BackButton";
import BackIcon from "../BackIcon";
import BreadCrumb from "../BreadCrumb";
import ErrorText from "../ErrorText";
import ProgressBar from "../ProgressBar";
import { studentDetails, updateStudentDetails } from "../useFormStore";

type FormValues = {
  fullName: string;
};

const Step1 = () => {
  const { nextStep, activeStep } = useWizard();

  console.log(studentDetails);

  // console.log(headerText[studentDetails.whoNeedsTutoring]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    console.log(data);
    updateStudentDetails({ studentDetails: { fullName: data.fullName } });
    nextStep();
  };

  return (
    <div className="flex">
      <div className="flex flex-col items-start flex-[3_3_0%]">
        <div>
          <BreadCrumb />
          <ProgressBar step={activeStep} />

          <div className="my-4"></div>
        </div>
        <h1 className="text-white mb-6 text-2xl md:text-4xl font-semibold leading-none tracking-tighter text-black lg:max-w-2xl">
          Let's finish up your profile:
        </h1>
        <div className="my-2"></div>
        <form
          className="flex flex-col items-start justify-center gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Full Name *
            </label>
            <input
              className="border-px border-black h-16 text-lg shadow bg-light appearance-none border rounded w-80 px-4 py-2text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Full Name"
              {...register("fullName", {
                required: "Full name is required",
                pattern: {
                  value: /^[a-zA-Z]+ [a-zA-Z]+$/,
                  message:
                    "Full name must be alphanumeric and contain a space between the first and last name",
                },
              })}
            />
            {errors["fullName"] && (
              <ErrorText>{errors["fullName"].message}</ErrorText>
            )}
          </div>
          <button
            className="button button-primary px-16 py-3 text-xl"
            type="submit"
          >
            Continue
          </button>
          <div className="my-1"></div>
        </form>
        <div className="flex items-center justify-start">
          <BackIcon />
          <BackButton />
        </div>
      </div>
      <div className="hidden-mobile-flex-normal flex-[2_2_0%] flex-col justify-end text-center p-8 items-center font-semibold">
        <div className="bg-light rounded-lg flex justify-center flex-col items-center px-8 py-8">
          <h2 className="mb-4 bg-rose-200 text-red-600 px-4 py-2 rounded-lg md:w-84 md:mx-auto text-xs font-semibold tracking-widest uppercase title-font">
            DID YOU KNOW?
          </h2>
          <p className="text-black text-base font-primary font-light">
            Parents and kids love Eduline! Eduline has served{" "}
            <span className="inline text-black text-base font-primary font-semibold">
              over 400
            </span>{" "}
            satisfied local Australian families!
          </p>
        </div>
      </div>
    </div>
  );
};
export default Step1;
