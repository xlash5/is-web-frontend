import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "./useLocalStorage";
import api from '../api/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage("JWT", null);
  const navigate = useNavigate();

  const register = (data) => {
    setToken(data);
    navigate("/", { replace: true });
  };

  const login = async (data) => {
    try {
      const response = await api.post("/api/v1/login", {
        username: data.username,
        password: data.password,
      });
      setToken(response.data.access_token);
      navigate("/", { replace: true });
    } catch (error) {
      return 0;
    }
  };

  const logout = () => {
    setToken(null);
    navigate("/auth", { replace: true });
  };

  const value = useMemo(
    () => ({
      token,
      login,
      logout,
      register
    }),
    [token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default () => {
  return useContext(AuthContext);
};
