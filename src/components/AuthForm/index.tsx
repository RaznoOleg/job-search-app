import { ErrorMessage, Field, Form, Formik } from "formik";
import { authSchema } from "@/schemas/authSchema";

interface AuthFormProps {
    initialValues: { email: string; password: string };
    onSubmit: (values: { email: string; password: string }) => void;
    isLogin: boolean;
    isSubmitting: boolean;
}

export default function AuthForm({ initialValues, onSubmit, isLogin, isSubmitting }: AuthFormProps) {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={authSchema}
            onSubmit={onSubmit}
        >
            {({ isSubmitting }) => (
                <Form className="space-y-6 max-w-2xl mx-auto bg-transparent p-8 rounded-lg">
                    <div className="space-y-2">
                        <label className="block text-lg font-medium">Email</label>
                        <Field
                            type="email"
                            name="email"
                            className="w-full border-2 border-gray-300 p-4 rounded-lg transition duration-300 hover:border-blue-500 focus:border-teal-300 focus:outline-none"
                            placeholder="Enter your email..."
                        />
                        <ErrorMessage name="email" component="div" className="text-red-500" />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-lg font-medium">Password</label>
                        <Field
                            type="password"
                            name="password"
                            className="w-full border-2 border-gray-300 p-4 rounded-lg transition duration-300 hover:border-blue-500 focus:border-teal-300 focus:outline-none"
                            placeholder="Enter your password..."
                        />
                        <ErrorMessage name="password" component="div" className="text-red-500" />
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white p-4 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-colors mt-4"
                    >
                        {isLogin ? "Login" : "Register"}
                    </button>
                </Form>
            )}
        </Formik>
    );
}
