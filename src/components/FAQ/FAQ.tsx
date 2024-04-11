import { useCollapse } from "react-collapsed";
import faqList from "./faqList";

type SingleAccordionProps = {
  title: string;
  text: string;
};

const SingleAccordion = (props: SingleAccordionProps) => {
  const { title, text } = props;
  const { getCollapseProps, getToggleProps } = useCollapse();

  return (
    <div key={title} className="el-accordion relative rounded-md bg-white px-3">
      <div className="el-accordion-head">
        <div
          {...getToggleProps()}
          className="flex items-center justify-between"
        >
          <div className="flex items-center justify-start gap-5">
            <div className="w-6 h-6 relative bottom-1">
              <img src="assets/images/icons/click.svg" alt="Click me" />
            </div>
            <div className="">
              <h4 className="text-[#717f94] text-sm p-0 m-0">{title}</h4>
            </div>
          </div>
          <div className="accordion-arrow">
            <div className="display-center">
              <span className="fa fa-angle-down"></span>
            </div>
          </div>
        </div>
      </div>
      <div {...getCollapseProps()} className="el-accordion-body">
        <p>{text}</p>
      </div>
    </div>
  );
};
const FAQ = () => {
  return (
    <div className="flex flex-col gap-4">
      {faqList.map(({ title, text }) => {
        console.log({ title, text });
        return <SingleAccordion key={title} title={title} text={text} />;
      })}
    </div>
  );
};

export default FAQ;
