import * as yup from "yup";
const schema = yup.object({
  name: yup.string().min(2, "حداقل 2 کارکتر!").required("نام الزامیست"),
  lastName: yup
    .string()
    .min(2, "حداقل دو کارکتر")
    .required("نام خانوادگی الزامیست"),
  email: yup
    .string()
    .email("فرمت ایمیل نامعتبر")
    .required("ایمیل الزامیست")
    .test("unique-email", "ایمیل تکراریست", function (value) {
      const { contacts, currentId } = this.options.context;
      if (!contacts) return true;
      return !contacts.some((c) => c.email === value && c.id !== currentId);
    }),
  phone: yup.string().min(11, "شماره نامعتبر").required("شماره تلفن الزامیست"),
});
export default schema;
