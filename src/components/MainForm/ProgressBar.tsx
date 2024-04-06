type Props = {
  step: number;
  total?: number;
};

const ProgressBar = ({ step, total = 8 }: Props) => {
  const progressPercentage = (step / total) * 100;
  return (
    <>
      <div
        className="flex w-[450px] h-3 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
        role="progressbar"
      >
        <div
          className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <div className="my-2"></div>
      <div className="flex justify-center">
        <p className="font-primary text-sm text-light">
          {step} of {total}
        </p>
      </div>
    </>
  );
};

export default ProgressBar;
