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
    <div role="status flex items-center justify-center">
      <svg
        aria-hidden="true"
        className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
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
                      <a href="/">
                        <span className="text">Home</span>
                      </a>
                    </li>
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
