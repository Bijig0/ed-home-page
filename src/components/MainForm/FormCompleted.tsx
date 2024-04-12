import emailjs from "@emailjs/browser";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useWizard } from "react-use-wizard";
import { isLastStep } from "../../globalStore";
import CheckIcon from "./CheckIcon";
import { studentDetails, updateStudentDetails } from "./useFormStore";

type ErrorTextProps = {
  children: React.ReactNode;
};

const ErrorText = (props: ErrorTextProps) => {
  return (
    <p className="text-danger text-3" style={{ fontSize: "12px" }}>
      {props.children}
    </p>
  );
};

const FormCompleted = () => {
  const { goToStep } = useWizard();

  const sendEmail = async () => {
    const templateParams = {
      to_name: "Brady",
      from_name: "Tutoring",
      subject: "New Tutoring Person",
      message: `New tutoring person, details: ${JSON.stringify(studentDetails)}`,
    };

    const serviceId = "service_010xydf";
    const templateName = "template_1dcm4rn";
    const publicKey = "Yd6r5t5etWEKD3GNh";
    return emailjs.send(serviceId, templateName, templateParams, publicKey);
  };

  const {
    mutate: sendEmailMutate,
    isPending,
    error,
    isSuccess,
  } = useMutation({
    mutationFn: sendEmail,
    mutationKey: ["sendEmail"],
  });

  useEffect(() => {
    isLastStep.set(true);
  }, []);

  useEffect(() => {
    sendEmailMutate();
  }, []);

  const handleBack = () => {
    isLastStep.set(false);
    updateStudentDetails({ studentDetails: {} });
    goToStep(0);
  };

  return (
    <div className="flex justify-center text-center items-center">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <CheckIcon enabled={true} size={48} />
        </div>
        <div className="my-2"></div>

        <h1 className="text-white mb-0 text-4xl font-semibold leading-none tracking-tighter text-black lg:max-w-2xl">
          You're all set!
        </h1>
        <div className="my-3"></div>
        <p className="text-light text-xl">We'll be in touch with you soon!</p>
        <button
          onClick={handleBack}
          className="button button-primary px-16 py-3 text-xl"
        >
          Back to home
        </button>
      </div>
    </div>
  );

  if (isPending) {
    return null;
  }

  if (isSuccess) {
    return (
      <>
        <SuccessToast />
        <p>Success good job, all completed</p>
      </>
    );
  }

  if (error) {
    return (
      <>
        <ErrorToast />
        <p>Error, something went wrong</p>
      </>
    );
  }

  return null;
};

const SuccessToast = () => {
  return (
    <div className="alert alert-success" role="alert">
      We have received your quote request and will be in touch soon!
    </div>
  );
};

const ErrorToast = () => {
  return (
    <div className="alert alert-danger" role="alert">
      Something went wrong, please try again
    </div>
  );
};

export default FormCompleted;
