import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "./useLocalStorage";
import api from '../api/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage("JWT", null);
  const navigate = useNavigate();

  const register = async (data) => {
    try {
      const response = await api.post("/api/v1/register", {
        username: data.username,
        password: data.password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 201) {
        await login(data);
      }
    } catch (error) {
      return 0;
    }
  };

  const changePassword = async (data) => {
    try {
      const response = await api.post("/api/v1/changePassword", {
        password: data.password,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        navigate("/");
        return 1;
      }
    } catch (error) {
      return 0;
    }
  }

  const login = async (data) => {
    try {
      const response = await api.post("/api/v1/login", {
        username: data.username,
        password: data.password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        setToken(response.data.access_token);
        navigate("/");
      }
    } catch (error) {
      return 0;
    }
  };

  const logout = async () => {
    api.post("/api/v1/logout", {}, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    }).then(res => {
      setToken(null);
      navigate("/auth", { replace: true });
    }).catch(err => {
      console.log(err);
    });
  };

  const value = useMemo(
    () => ({
      token,
      login,
      logout,
      register,
      changePassword
    }),
    [token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default () => {
  return useContext(AuthContext);
};
