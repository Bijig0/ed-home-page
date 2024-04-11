import { useCollapse } from "react-collapsed";
import faqList from "./faqList";

type SingleAccordionProps = {
  title: string;
  text: string;
  isExpanded: boolean;
};

const SingleAccordion = (props: SingleAccordionProps) => {
  const { title, text } = props;
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div key={title} className="el-accordion">
      <div className="el-accordion-head">
        <div className="inner d-flex align-items-center">
          <div className="accordion-image">
            <img src="assets/images/icons/click.svg" alt="Click me" />
          </div>
          <div {...getToggleProps()} className="accordion-title">
            <h4>{title}</h4>
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
    <div className="items mb--15">
      {faqList.map(({ title, text }) => {
        console.log({ title, text });
        return <SingleAccordion isExpanded={true} title={title} text={text} />;
      })}
    </div>
  );
};

export default FAQ;
