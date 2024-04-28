type Props = {
  children: React.ReactNode;
};

const FormButtonsLayout = (props: Props) => {
  const { children } = props;
  return (
    <form className="px-4 flex flex-col items-center justify-center">
      {children}
    </form>
  );
};

export default FormButtonsLayout;
