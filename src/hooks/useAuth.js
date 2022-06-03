import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "./useLocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("JWT", null);
  const navigate = useNavigate();

  const register = (user) => {
    setUser(user);
    navigate("/", { replace: true });
  };

  const login = async (data) => {
    setUser(data);
    navigate("/", { replace: true });
  };

  const logout = () => {
    setUser(null);
    navigate("/auth", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      register
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default () => {
  return useContext(AuthContext);
};
