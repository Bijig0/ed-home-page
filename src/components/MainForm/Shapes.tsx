import { useStore } from "@nanostores/react";
import { isLastStep, isStepOne } from "../../globalStore";

const Shapes = () => {
  const $isStepOne = useStore(isStepOne);
  const $isLastStep = useStore(isLastStep);

  console.log({ $isStepOne });
  console.log({ $isLastStep });

  const shouldShow = $isStepOne || $isLastStep;

  console.log({ shouldShow });

  if (!shouldShow) {
    return null;
  }

  console.log("rendering");

  return (
    <div className="hidden-mobile-block-normal el-floating-shapes">
      <span className="shape shape-1">
        <img src="assets/images/shapes/shape1.png" alt="--Alternative--" />
      </span>
      <span className="shape shape-2">
        <img src="assets/images/shapes/shape2.png" alt="--Alternative--" />
      </span>
      <span className="shape shape-3">
        <img src="assets/images/shapes/shape3.png" alt="--Alternative--" />
      </span>
      <span className="shape shape-4">
        <img src="assets/images/shapes/shape4.png" alt="--Alternative--" />
      </span>
    </div>
  );
};

export default Shapes;
