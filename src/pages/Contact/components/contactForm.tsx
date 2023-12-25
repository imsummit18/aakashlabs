import { Form, Formik } from "formik";
import TextInput from "../../../components/TextInput";
import * as Yup from "yup";
import Button from "../../../components/Button";
import { BgImage, Contact } from "../../../assets/images";

const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string().required("Full Name is required"),
  email: Yup.string().email().required("Email is required"),
  phone: Yup.number()
    .typeError("Contact number must be a number")
    .required("Contact Number is required"),
});
const ContactForm = () => {
  const handleSubmit = async (
    values: any,
    { resetForm }: { resetForm: any }
  ) => {
    console.log("The submitted values are", values);
    resetForm();
  };

  return (
    <div className="mt-[12vh]  ">
      <div
        style={{
          backgroundImage: `url(${BgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-primary-600 w-full h-[300px]"
      >
        <div className="text-4xl font-medium text-[white] leading-[1.5]  text-center pt-20">
          Feel free to <br />
          <span className=" text-[54px]   font-semibold"> Contact Us</span>
        </div>
      </div>
      <div className="my-20 flex items-center justify-center w-full max-w-[1440px] m-auto  px-10">
        <div className="w-[60%]  ">
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              message: "",
            }}
            validationSchema={FORM_VALIDATION}
            onSubmit={handleSubmit}
          >
            {({ values }) => (
              <Form>
                <h1 className="text-[48px] mb-8">
                  Leave Us A{" "}
                  <span className="text-primary-600 font-semibold">
                    Message
                  </span>
                </h1>
                <TextInput
                  label={"Full Name"}
                  name={"name"}
                  type="text"
                  placeholder={"Enter full name"}
                />
                <TextInput
                  label={"Email"}
                  name={"email"}
                  type="text"
                  placeholder={"Enter Email"}
                />
                <TextInput
                  label={"Contact Number"}
                  name={"phone"}
                  type="text"
                  placeholder={"Enter contact number"}
                />
                <TextInput
                  label={"Message"}
                  name={"message"}
                  type="text"
                  placeholder={"Enter Message"}
                />
                <div className="mt-5">
                  <Button
                    type="submit"
                    className=""
                    variant="primary"
                    text="Submit"
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="w-1/2 h-[350px]  rounded-lg">
          <img src={Contact} alt="" className="w-full rounded-lg h-full" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
