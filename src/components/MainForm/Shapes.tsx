import { useStore } from "@nanostores/react";
import { isStepOne } from "../../globalStore";

const Shapes = () => {
  const $isStepOne = useStore(isStepOne);

  if (!$isStepOne) {
    return null;
  }

  console.log("rendering");

  return (
    <div className="el-floating-shapes">
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
