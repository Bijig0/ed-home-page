import { useForm } from "react-hook-form";
import { useWizard } from "react-use-wizard";
import useFormStore from "./useFormStore";

type FormValues = {
  fullName: string;
};

const Step1 = () => {
  const updateStudentDetails = useFormStore(
    (state) => state.updateStudentDetails
  );

  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    console.log(data);
    updateStudentDetails({ studentDetails: { fullName: data.fullName } });
    nextStep();
  };

  const { nextStep } = useWizard();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>
        Let's finish up your profile so we can find you the perfect tutor:
      </h2>
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
  );
};

export default Step1;
