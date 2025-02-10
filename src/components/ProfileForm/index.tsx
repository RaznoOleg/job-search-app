"use client";
import { Profile } from "@/types/profile";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { profileSchema } from "@/schemas/profileSchema";

interface ProfileFormProps {
  initialValues: Profile;
  onSubmit: (values: Profile) => void;
  showLogout?: boolean;
  onLogout?: () => void;
}

export default function ProfileForm({ initialValues, onSubmit, showLogout, onLogout }: ProfileFormProps) {
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={profileSchema}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6 max-w-2xl mx-auto bg-transparent p-8 rounded-lg">

          <div className="space-y-2">
            <label htmlFor="name" className="block text-lg font-medium">Name</label>
            <Field
              type="text"
              id="name"
              name="name"
              className="w-full border-2 border-gray-300 p-4 rounded-lg transition duration-300 hover:border-blue-500 focus:border-teal-300 focus:outline-none"
              placeholder="Enter your name..."
            />
            <ErrorMessage name="name" component="p" className="text-sm text-red-600" />
          </div>

          <div className="space-y-2">
            <label htmlFor="jobTitle" className="block text-lg font-medium text-gray-700">Desired job title</label>
            <Field
              type="text"
              id="jobTitle"
              name="jobTitle"
              className="w-full border-2 border-gray-300 p-4 rounded-lg transition duration-300  hover:border-blue-500 focus:border-teal-300 focus:outline-none"
              placeholder="Enter desired job title..."
            />
            <ErrorMessage name="jobTitle" component="p" className="text-sm text-red-600" />
          </div>

          <div className="space-y-2">
            <label htmlFor="aboutMe" className="block text-lg font-medium text-gray-700">About me</label>
            <Field
              as="textarea"
              id="aboutMe"
              name="aboutMe"
              className="w-full border-2 border-gray-300 p-4 rounded-lg h-32 resize-none transition duration-300 hover:border-blue-500 focus:border-teal-300 focus:outline-none"
              placeholder="Tell us about yourself..."
            />
            <ErrorMessage name="aboutMe" component="p" className="text-sm text-red-600" />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white p-4 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-colors mt-4"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Save Profile"}
          </button>

          {showLogout && onLogout && (
            <button
              type="button"
              className="w-full bg-red-400 text-white p-4 rounded-lg hover:bg-red-700 transition-colors mt-4"
              onClick={onLogout}
            >
              Logout
            </button>
          )}
        </Form>
      )}
    </Formik>
  );
}
