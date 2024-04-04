type Props = {
  children: React.ReactNode;
};

const ErrorText = (props: Props) => {
  return (
    <p className="text-red-700 text-md font-semibold font-primary">
      {props.children}
    </p>
  );
};

export default ErrorText;
