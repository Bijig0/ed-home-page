import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaGripLines } from "react-icons/fa";
import { isValidPhoneNumber } from "react-phone-number-input";
import PhoneInput from "react-phone-number-input/input";
import "react-phone-number-input/style.css";
import { useWizard } from "react-use-wizard";
import { isLastStep } from "../../../globalStore";
import CheckIcon from "../CheckIcon";
import ErrorText from "../ErrorText";
import LeftSideFormPartLayout from "../LeftSideFormPartLayout";
import { studentDetails, updateStudentDetails } from "../useFormStore";

type FormValues = {
  phoneNumber: string;
  agreeToTermsOfUse: boolean;
};

const Step1 = () => {
  const { nextStep, activeStep } = useWizard();

  console.log(studentDetails);

  // console.log(headerText[studentDetails.whoNeedsTutoring]);

  const [stepOneCompleted, setStepOneCompleted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    console.log(data);
    updateStudentDetails({ studentDetails: { phoneNumber: data.phoneNumber } });
    setStepOneCompleted(true);
  };

  const createOrRetrieveMeetingLink = (): URL => {
    const baseLink = "https://calendly.com/bradysuryasie/edututor/";
    const meetingLink = new URL(baseLink);

    meetingLink.searchParams.set("name", studentDetails.get().parentName);
    // This is just how you do it with calendly, location is associated with the phone number
    meetingLink.searchParams.set("location", studentDetails.get().phoneNumber);
    meetingLink.searchParams.set("email", studentDetails.get().email);

    console.log({ meetingLink });
    console.log(meetingLink.toString());

    return meetingLink;
  };

  const handleBookMeeting = () => {
    const meetingLink = createOrRetrieveMeetingLink();
    window.open(meetingLink.toString(), "_blank");
    isLastStep.set(true);
    nextStep();
  };

  console.log({ stepOneCompleted });

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
              <ErrorText>{errors["phoneNumber"].message}</ErrorText>
            )}
            <div className="my-2"></div>
            <div className="flex gap-2 items-center justify-left">
              <input
                type="checkbox"
                id="agreeToTermsOfUse"
                {...register("agreeToTermsOfUse", {
                  required: "This field is required",
                })}
              />
              <label
                htmlFor="agreeToTermsOfUse"
                id="agreeToTermsOfUse"
                className="m-0 text-gray-700"
              >
                I agree to the terms of use
              </label>
            </div>
            {errors["agreeToTermsOfUse"] && (
              <ErrorText>{errors["agreeToTermsOfUse"].message}</ErrorText>
            )}
          </div>
          <div className="flex items-center justify-start gap-4">
            <a
              className="button data-[disabled]:hidden button-box-shadow text-light bg-rose-500 hover:bg-rose-700 px-16 py-3 text-xl"
              onClick={handleBookMeeting}
              data-disabled={!stepOneCompleted}
            >
              Book a meeting
            </a>
            <button
              className="button disabled:opacity-45 disabled:pointer-events-none button-primary px-16 py-3 text-xl"
              type="submit"
              disabled={stepOneCompleted}
            >
              Continue
            </button>
            <CheckIcon enabled={stepOneCompleted} />
          </div>
          {stepOneCompleted && (
            <a
              className="button button-box-shadow text-light bg-rose-500 hover:bg-rose-700 px-16 py-3 text-xl"
              onClick={handleBookMeeting}
            >
              Book a meeting
            </a>
          )}
          <div className="my-1"></div>
        </div>
      </LeftSideFormPartLayout>

      <div className="hidden-mobile-flex-normal flex-[2_2_0%] flex-col justify-end text-center p-8 items-center font-semibold">
        <div className="bg-light rounded-lg flex justify-center flex-col items-center px-8 py-8">
          <FaGripLines className="izcon" size={16} color="#f43f5e" />
          <div className="my-2"></div>
          <p className="text-black text-base font-primary font-light">
            We know every student is unique. And they deserve a tutoring
            experience as unique as their needs. With thousands of tutors
            available, we're confident to find the one best for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step1;
