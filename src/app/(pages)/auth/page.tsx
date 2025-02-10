"use client";
import { useState } from "react";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import AuthForm from "@/components/AuthForm";

export default function AuthPage() {
    const { login, register } = useAuth();
    const [isLogin, setIsLogin] = useState(true);
    const router = useRouter();

    const handleSubmit = async (values: { email: string; password: string }) => {
        if (isLogin) {
            await login(values.email, values.password);
        } else {
            await register(values.email, values.password);
        }
        router.push("/jobs");
    };

    return (
        <div className="mx-auto mt-12 p-8 bg-white shadow-2xl max-w-3xl rounded-2xl hover:shadow-2xl transition-shadow mb-8">
            <h2 className="text-xl font-bold text-center text-gray-800">{isLogin ? "Login" : "Registration"}</h2>
            <AuthForm
                initialValues={{ email: "", password: "" }}
                onSubmit={handleSubmit}
                isLogin={isLogin}
                isSubmitting={false}
            />
            <div className="flex justify-center">
                <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-center text-blue-500"
                >
                    {isLogin ? "Need an account? Register" : "Already have an account? Login"}
                </button>
            </div>
        </div>
    );
}
