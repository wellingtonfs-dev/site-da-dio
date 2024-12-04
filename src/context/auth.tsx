import { createContext, useState } from "react";
import { IAuthContext, IAuthContextProviderProps, ILoginData } from "./types";
import { IUser } from "../types/user";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({
  children,
}: IAuthContextProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);

  const navigate = useNavigate();

  const handleLogin = async (loginData: ILoginData) => {
    try {
      const { data } = await api.get(
        `users?email=${loginData.email}&password=${loginData.password}`
      );
      if (data.length && data[0].id) {
        setUser(data[0]);
        navigate("/feed");
        return;
      }
      alert("E-mail ou senha inválidos");
    } catch {
      alert("Houve um erro, tente novamente");
    }
  };

  const handleLogout = () => {
    setUser({} as IUser);    
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
