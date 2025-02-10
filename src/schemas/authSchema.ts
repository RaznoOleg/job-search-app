import * as Yup from "yup";

export const authSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("This field is required"),
    password: Yup.string().min(6, "Minimum 6 characters").required("This field is required"),
});
