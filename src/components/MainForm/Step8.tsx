import { Controller, useForm } from "react-hook-form";
import { isValidPhoneNumber } from "react-phone-number-input";
import PhoneInput from "react-phone-number-input/input";

import "react-phone-number-input/style.css";
import { useWizard } from "react-use-wizard";
import BackIcon from "./BackIcon";
import useFormStore from "./useFormStore";
import BackButton from "./BackButton";

type FormValues = {
  phoneNumber: string;
  agreeToTermsOfUse: boolean;
};

const Step1 = () => {
  const { updateStudentDetails, studentDetails } = useFormStore(
    (state) => state
  );

  const { handleStep, previousStep, nextStep } = useWizard();

  const handleBack = () => previousStep();

  console.log(studentDetails);

  console.log(studentDetails.whoNeedsTutoring);

  // console.log(headerText[studentDetails.whoNeedsTutoring]);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    console.log(data);
    updateStudentDetails({ studentDetails: { phoneNumber: data.phoneNumber } });
    nextStep();
  };

  return (
    <div className="flex">
      <div className="flex flex-col items-start flex-[3_3_0%]">
        {/* <h1 className="text-4xl text-white font-primary">
          {headerText[studentDetails.whoNeedsTutoring]}
        </h1> */}
        <h1 className="text-white mb-6 text-4xl font-semibold leading-none tracking-tighter text-black lg:max-w-2xl">
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
              htmlFor="phoneNumber"
            >
              Phone Number *
            </label>
            <Controller
              name="phoneNumber"
              control={control}
              rules={{
                validate: (value) =>
                  isValidPhoneNumber(value) || "Invalid Phone Number",
              }}
              render={({ field: { onChange, value } }) => (
                <PhoneInput
                  className="border-px border-black h-16 text-lg shadow bg-light appearance-none border rounded w-80 px-4 py-2text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={value}
                  onChange={onChange}
                  id="phone-input"
                />
              )}
            />
            {errors["phoneNumber"] && (
              <p className="error-message">{errors["phoneNumber"].message}</p>
            )}
            <div className="my-2"></div>
            <div className="flex gap-2 items-center justify-left">
              <input
                type="checkbox"
                {...register("agreeToTermsOfUse", { required: true })}
              />
              <p className="m-0 text-gray-700">I agree to the terms of use</p>
            </div>
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
