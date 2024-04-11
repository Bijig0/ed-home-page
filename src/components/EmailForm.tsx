import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";
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

const SuccessToast = () => {
  return (
    <div
      className="bg-teal-100 border border-teal-400 text-teal-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">Success!</strong>
      <span className="block sm:inline">
        We have received your message and a representative will be in touch
        soon!
      </span>
    </div>
  );
};

const ErrorToast = () => {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">Error!</strong>
      <span className="block sm:inline">
        Something went wrong, please try again
      </span>
    </div>
  );
};

const Spinner = () => {
  return (
    <div className="spinner-border text-light" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

const EmailForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  console.log({ errors });

  const sendEmail = async (inputs: Inputs) => {
    const templateParams = {
      to_name: "Brady",
      from_name: "Tutoring",
      subject: "New Tutoring Person From Contact us",
      message: `New From Contact Us, details: ${JSON.stringify(inputs)}`,
    };

    const serviceId = "service_010xydf";
    const templateName = "template_1dcm4rn";
    const publicKey = "Yd6r5t5etWEKD3GNh";
    return emailjs.send(serviceId, templateName, templateParams, publicKey);
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

  const onSubmit: SubmitHandler<Inputs> = (inputs) => {
    sendEmailMutate(inputs);
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
                            required
                            {...register("name", { required: true })}
                            type="text"
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
                            required
                            {...register("email", { required: true })}
                            type="text"
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
                            required
                            {...register("message", { required: true })}
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
                          {isPending ? (
                            <Spinner />
                          ) : (
                            <span className="text">Send</span>
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="my-4"></div>
                    {error ? <ErrorToast /> : null}
                    {isSuccess ? <SuccessToast /> : null}
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

const queryClient = new QueryClient();

const Main = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <EmailForm />
    </QueryClientProvider>
  );
};

export default Main;
