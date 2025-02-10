import authApi from "../authApi";

export const registerUser = async (email: string, password: string) => {
    return authApi.post("/register", { email, password });
};