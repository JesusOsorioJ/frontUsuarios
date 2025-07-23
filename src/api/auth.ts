import { AxiosResponse } from "axios";
import { authApi } from "./item";

interface UserCredentials {
  email: string;
  password: string;
  role?: Array<string>
}

interface AuthResponse {
  token: string;
}

// Registro de usuario
export const registerUser = async (body: UserCredentials): Promise<AxiosResponse<AuthResponse> | null> => {
  try {
    console.log({body})
    const payload = { "email": "eve.holt@reqres.in", "password": "pistol" }
    const response = await authApi.post(`/register`, payload);
    console.log("register response:", response);
    return response;
  } catch (error) {
    console.error("Error en el registro:", error);
    return null;
  }
};

// Login de usuario
export const loginUser = async (body: UserCredentials): Promise<AxiosResponse<AuthResponse> | null> => {
  try {
    console.log({body})
    const payload = { "email": "eve.holt@reqres.in", "password": "pistol" }
    const response = await authApi.post(`/login`, payload);
    return response;
  } catch (error) {
    console.error("Error en el login:", error);
    return null;
  }
};
