import { FaCheckCircle } from "react-icons/fa";

type Props = {
  enabled?: boolean;
};

const CheckIcon = (props: Props) => {
  return (
    <FaCheckCircle
      size={26}
      className={`bg-white text-green-500 rounded-full ${!props.enabled && "hidden"}`}
    />
  );
};

export default CheckIcon;
