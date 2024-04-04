import type { ComponentProps } from "react";
import { FaCheckCircle } from "react-icons/fa";
import type { IconType } from "react-icons/lib";

type Props = {
  enabled?: boolean;
} & ComponentProps<IconType>;

const CheckIcon = (props: Props) => {
  const { enabled, className, ...iconTypeRestProps } = props;
  const fullClassName = `bg-white text-green-500 rounded-full ${className && className} ${!enabled && "hidden"}`;
  console.log({ fullClassName });
  return (
    <FaCheckCircle size={26} className={fullClassName} {...iconTypeRestProps} />
  );
};

export default CheckIcon;
