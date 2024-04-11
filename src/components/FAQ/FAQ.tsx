import { useCollapse } from "react-collapsed";
import faqList from "./faqList";

type SingleAccordionProps = {
  title: string;
  text: string;
  isExpanded: boolean;
};

const createUUID = (title: string): string => title.replaceAll(" ", "");

const AccordionHeader = ({ title }: { title: string }) => {
  return (
    <div
      style={{ width: "100%", willChange: "auto" }}
      className={`accordion-header`}
    >
      <button
        style={{ width: "100%" }}
        className={`accordion-button collapsed`}
      >
        {title}
      </button>
    </div>
  );
};

const SingleAccordion = (props: SingleAccordionProps) => {
  const { title, text } = props;
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div key={title} className="accordion-item">
      <div className={`accordion-header`}>
        <button
          {...getToggleProps()}
          className={`accordion-button ${isExpanded ? undefined : "collapsed"}`}
        >
          {title}
        </button>
      </div>
      <div
        {...getCollapseProps()}
        className="accordion-collapse collapse show"
        id="ac_1"
        data-bs-parent="#accordion_1"
      >
        <div className="accordion-body">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqFirstHalf = faqList.slice(0, 3);
  const faqSecondHalf = faqList.slice(3);
  return (
    <div className="faq-section pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="at-section-title text-center">
              <span className="at-subtitle position-relative text-primary lead">
                FAQs
              </span>
              <h2 className="h1 mb-0 mt-2">Frequently Asked Questions</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="faq-tabs mt-5 brands-filter">
              <div className="tab-content mt-60">
                <div className="tab-pane fade show active" id="general">
                  <div className="row g-4">
                    <div className="col-xl-6">
                      <div
                        className="accordion theme-accordion"
                        id="accordion_1"
                      >
                        {faqFirstHalf.map(({ title, text }) => {
                          console.log({ title, text });
                          return (
                            <SingleAccordion
                              isExpanded={true}
                              title={title}
                              text={text}
                            />
                          );
                        })}
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div
                        className="accordion theme-accordion"
                        id="accordion_1"
                      >
                        {faqSecondHalf.map(({ title, text }) => {
                          return (
                            <SingleAccordion
                              isExpanded={true}
                              title={title}
                              text={text}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
