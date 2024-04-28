type Props = {
  children: React.ReactNode;
};

const FormPartLayout = (props: Props) => {
  const { children } = props;
  return (
    <div className="flex mx-auto lg:w-[1180px] lg:max-w-full">{children}</div>
  );
};

export default FormPartLayout;
