import * as Yup from "yup";

export const profileSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  jobTitle: Yup.string().required("Desired job title is required"),
  aboutMe: Yup.string().max(500, "About me must be at most 500 characters"),
});