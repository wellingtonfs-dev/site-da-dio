import { IUser } from "../types/user";

export interface IAuthContext{
    user: IUser
    handleLogin: (loginData: ILoginData) => Promise<void>;
    handleLogout: () => void;
}

export interface IAuthContextProviderProps{
    children: React.ReactNode;
}

export interface ILoginData{
    email: string;
    password: string;
}