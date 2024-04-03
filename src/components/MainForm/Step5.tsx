import { useForm } from "react-hook-form";
import { useWizard } from "react-use-wizard";
import BackIcon from "./BackIcon";
import useFormStore from "./useFormStore";

type FormValues = {
  fullName: string;
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

  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    console.log(data);
    updateStudentDetails({ studentDetails: { fullName: data.fullName } });
    nextStep();
  };

  return (
    <div className="flex ">
      <div className="flex flex-col items-start flex-[3_3_0%]">
        {/* <h1 className="text-4xl text-white font-primary">
          {headerText[studentDetails.whoNeedsTutoring]}
        </h1> */}
        <h1 className="text-white mb-6 text-4xl font-semibold leading-none tracking-tighter text-black lg:max-w-2xl">
          Let's finish up your profile so we can find you the perfect tutor:
        </h1>
        <div className="my-2"></div>
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register("fullName", {
              required: "Full name is required",
              pattern: {
                value: /^[a-zA-Z]+ [a-zA-Z]+$/,
                message:
                  "Full name must be alphanumeric and contain a space between the first and last name",
              },
            })}
          />
          <button type="submit">Continue</button>
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
