import BackButton from "./BackButton";
import BackIcon from "./BackIcon";
import BreadCrumb from "./BreadCrumb";
import ProgressBar from "./ProgressBar";

type Props = {
  activeStep: number;
  headerText: string;
  children: React.ReactNode;
};

const LeftSideFormPartLayout = (props: Props) => {
  const { activeStep, headerText, children } = props;
  return (
    <div className="px-16 max-w-full md:flex md:flex-col md:items-start md:flex-shrink md:flex-[3_3_0%]">
      <div>
        <BreadCrumb />
        <ProgressBar step={activeStep} />

        <div className="my-4"></div>
      </div>
      <h1 className="text-white mb-0 text-2xl md:text-4xl font-semibold leading-none tracking-tighter text-black lg:max-w-2xl">
        {headerText}
      </h1>
      <div className="my-4"></div>
      <form className="flex flex-col items-start justify-center">
        {children}
      </form>
      <div className="my-2" />
      <div className="flex items-center justify-start">
        <BackIcon />
        <BackButton />
      </div>
    </div>
  );
};

export default LeftSideFormPartLayout;
