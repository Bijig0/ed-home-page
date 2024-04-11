import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

type Inputs = z.infer<typeof schema>;

type ErrorTextProps = {
  children: React.ReactNode;
};

const ErrorText = (props: ErrorTextProps) => {
  return (
    <p className="text-danger text-3" style={{ fontSize: "12px" }}>
      {props.children}
    </p>
  );
};

const EmailForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    const serviceId = "service_010xydf";
    const templateName = "template_1dcm4rn";
    const publicKey = "Yd6r5t5etWEKD3GNh";
    const form = e.target as HTMLFormElement;
    return emailjs.sendForm(serviceId, templateName, form, publicKey);
  };

  const {
    mutate: sendEmailMutate,
    isPending,
    error,
    isSuccess,
  } = useMutation({
    mutationFn: sendEmail,
    mutationKey: ["sendEmail"],
  });

  const onSubmit: SubmitHandler<Inputs> = (_, e) => {
    console.log(_);
    if (e === undefined) throw new Error("Form event is undefined");
    sendEmailMutate(e as React.FormEvent<HTMLFormElement>);
  };
  return (
    <section className="section section-faq section-faq-1">
      <div className="display-spacing">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="el-panel">
                <div className="el-panel-body">
                  <div className="el-panel-title">
                    <h3>Contact Us</h3>
                  </div>
                  <p>
                    Our staff are available 24/7 to help answer any of your
                    questions {":)"}
                  </p>
                  <hr />
                  <form onSubmit={handleSubmit(onSubmit)} className="form-3">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <div className="form-item">
                          <label className="form-label">Full Name</label>
                          <input
                            {...register("name", { required: true })}
                            type="text"
                            name="text"
                          />
                          {errors.name && (
                            <ErrorText>{errors.name?.message}</ErrorText>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <div className="form-item">
                          <label className="form-label">E-Mail</label>
                          <input
                            {...register("email", { required: true })}
                            type="text"
                            name="text"
                          />
                          {errors.email && (
                            <ErrorText>{errors.email?.message}</ErrorText>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="form-item">
                          <label className="form-label">Your Message</label>
                          <textarea
                            {...register("message", { required: true })}
                            name=""
                            id=""
                            cols={30}
                            rows={10}
                          ></textarea>
                          {errors.message && (
                            <ErrorText>{errors.message?.message}</ErrorText>
                          )}
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="button button-md button-primary"
                        >
                          <span className="text">Send</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="el-panel el-panel-teacher-info">
                <div className="el-panel-body">
                  <div className="el-panel-title">
                    <h3>Quick Access</h3>
                  </div>
                  <ul className="el-list">
                    <li>
                      <a href="page-about.html">
                        <span className="text">About us</span>
                      </a>
                    </li>
                    <li>
                      <a href="page-faq.html">
                        <span className="text">FAQ</span>
                      </a>
                    </li>
                    <li>
                      <a href="page-contact.html">
                        <span className="text">Contact us</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailForm;
