import { Navigate, useOutlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import AppBar from "./AppBar";
import Screen from "./Screen";
import api from "../api/api";
import { useState, useEffect } from "react";

export default () => {
  const { token } = useAuth();
  const outlet = useOutlet();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/api/v1/is-authenticated", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(res => {
      if (res.status === 200 && res.data.result) {
        navigate("/", { replace: true });
      }
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  return (
    <Screen>
      <AppBar
        pages={[
          { label: "Login", path: "/auth" },
          { label: "Register", path: "/auth/register" }
        ]}
      />
      {
        loading ?
          <h1>Loading...</h1>
          : <>

            {outlet}
          </>}
    </Screen>
  );
};
