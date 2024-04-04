import { useWizard } from "react-use-wizard";

const BackButton = () => {
  const { previousStep } = useWizard();
  const handleBack = () => previousStep();
  return (
    <button
      className="hover:underline text-lg text-light font-primary"
      onClick={handleBack}
    >
      Back
    </button>
  );
};

export default BackButton;
