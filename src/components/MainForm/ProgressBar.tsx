import { useWizard } from "react-use-wizard";

type Props = {
  step: number;
};

const ProgressBar = ({ step }: Props) => {
  const { activeStep, stepCount } = useWizard();
  const progressPercentage = (activeStep / (stepCount - 2)) * 100;
  return (
    <>
      <div
        className="flex bg-gray-300 w-80 max-w-full sm:w-[450px] h-3 rounded-full overflow-hidden "
        role="progressbar"
      >
        <div
          className="flex flex-col justify-center rounded-full overflow-hidden bg-cyan-500 text-xs text-white text-center whitespace-nowrap"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <div className="my-2"></div>
      <div className="flex justify-center">
        <p className="font-primary text-sm text-light">
          {activeStep} of {stepCount - 2}
        </p>
      </div>
    </>
  );
};

export default ProgressBar;
