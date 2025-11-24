import * as yup from "yup";
const schema = yup.object({
  name: yup.string().min(2,"Name must be at least 2 characters!").required("Name is required!"),
  lastName: yup
    .string()
    .min(2, "Last name must be at least 2 characters!")
    .required("Last name is required!"),
  email: yup
    .string()
    .email("Invalid email format!")
    .required("Email is required!")
    .test("unique-email", "Email already exists!", function (value) {
      const { contacts, currentId } = this.options.context;
      if (!contacts) return true;
      return !contacts.some((c) => c.email === value && c.id !== currentId);
    }),
  phone: yup.string().min(11, "Phone number must be at least 11 digits").required("Phone number is required!"),
});
export default schema;
