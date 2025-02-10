"use client";
import { loginUser } from "@/api/services/loginUser";
import { registerUser } from "@/api/services/registerUser";
import { createContext, useContext, useEffect, useState } from "react";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

interface AuthContextType {
    user: string | null;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

interface ErrorResponse {
    msg: string;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<string | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const userEmail = localStorage.getItem("user");
        if (token && userEmail) {
            setUser(userEmail);
        }
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const res = await loginUser(email, password);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", email);
            toast.success("User login successfully!");
            setUser(email);
        } catch (error) {
            const axiosError = error as AxiosError<ErrorResponse>;
            toast.error(axiosError.response?.data.msg || "Login error");
            throw new Error(axiosError.response?.data.msg || "Login error");
        }
    };

    const register = async (email: string, password: string) => {
        try {
            await registerUser(email, password);
            await login(email, password);
        } catch (error) {
            const axiosError = error as AxiosError<ErrorResponse>;
            toast.error(axiosError.response?.data.msg || "Registration error");
            throw new Error(axiosError.response?.data.msg || "Login error");
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        toast.success("User logout successfully!");
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};