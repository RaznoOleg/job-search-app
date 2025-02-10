import authApi from "../authApi";

export const loginUser = async (email: string, password: string) => {
    return authApi.post("/login", { email, password });
};