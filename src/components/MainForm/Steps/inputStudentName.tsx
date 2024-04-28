import { useForm } from "react-hook-form";
import { useWizard } from "react-use-wizard";
import ErrorText from "../ErrorText";
import FormPartLayout from "../FormPartLayout";
import LeftSideFormPartLayout from "../LeftSideFormPartLayout";
import { studentDetails, updateStudentDetails } from "../useFormStore";

type FormValues = {
  studentName: string;
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
    updateStudentDetails({ studentDetails: { studentName: data.studentName } });
    nextStep();
  };

  return (
    <FormPartLayout>
      <LeftSideFormPartLayout<FormValues>
        activeStep={activeStep}
        headerText="Let's finish up your profile"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-start justify-center gap-4">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Student Name *
            </label>
            <input
              className="border-px border-black h-16 text-lg shadow bg-light appearance-none border rounded w-80 px-4 py-2text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Full Name"
              {...register("studentName", {
                required: "Full name is required",
                pattern: {
                  value: /^\w+( \w+)*$/,
                  message: "Full name must only have letters",
                },
              })}
            />
            {errors["studentName"] && (
              <ErrorText>{errors["studentName"].message}</ErrorText>
            )}
          </div>
          <button
            className="button button-primary px-16 py-3 text-xl"
            type="submit"
          >
            Continue
          </button>
          <div className="my-1"></div>
        </div>
      </LeftSideFormPartLayout>
      <div className="hidden-mobile-flex-normal flex-[2_2_0%] flex-col justify-end text-center p-8 items-center font-semibold">
        <div className="bg-light rounded-lg flex justify-center flex-col items-center px-8 py-8">
          <h2 className="mb-4 bg-rose-200 text-red-600 px-4 py-2 rounded-lg md:w-84 md:mx-auto text-xs font-semibold tracking-widest uppercase title-font">
            DID YOU KNOW?
          </h2>
          <p className="text-black text-base font-primary font-light">
            Parents and kids love Hi-Up! Hi-Up has served{" "}
            <span className="inline text-black text-base font-primary font-semibold">
              over 400
            </span>{" "}
            satisfied local Australian families!
          </p>
        </div>
      </div>
    </FormPartLayout>
  );
};
export default Step1;
