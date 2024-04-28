import { useForm } from "react-hook-form";
import { FaStarOfLife } from "react-icons/fa";
import { useWizard } from "react-use-wizard";
import ErrorText from "../ErrorText";
import LeftSideFormPartLayout from "../LeftSideFormPartLayout";
import { studentDetails, updateStudentDetails } from "../useFormStore";

type FormValues = {
  email: string;
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
    updateStudentDetails({ studentDetails: { email: data.email } });
    nextStep();
  };

  return (
    <div className="flex">
      <LeftSideFormPartLayout
        activeStep={activeStep}
        headerText="Let's finish up your profile"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-start justify-center gap-4">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email *
            </label>
            <input
              className="border-px border-black h-16 text-lg shadow bg-light appearance-none border rounded w-80 px-4 py-2text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Please enter a valid email address",
                },
              })}
            />

            {errors["email"] && (
              <ErrorText>{errors["email"].message}</ErrorText>
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
          <FaStarOfLife className="icon" size={16} color="#f43f5e" />
          <div className="my-2"></div>

          <p className="text-black text-base font-primary font-light">
            We believe in our Hi-Up Tutors.
            <br />
            <span className="inline text-black text-base font-primary font-semibold">
              100% satisfaction guarantee!
            </span>
            <br />
            If you aren't happy with your first lesson, it's on us! No payment
            required!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step1;
