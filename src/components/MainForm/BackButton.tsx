import { useWizard } from "react-use-wizard";

type Props = {
  onClick?: (...args: any[]) => any;
};

const BackButton = (props: Props) => {
  const { onClick } = props;
  const { previousStep } = useWizard();
  const handleBack = () => previousStep();
  return (
    <button
      className="hover:underline text-lg text-light font-primary"
      onClick={onClick || handleBack}
    >
      Back
    </button>
  );
};

export default BackButton;
