import { Navigate, useOutlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import AppBar from "./AppBar";
import Screen from "./Screen";
import api from "../api/api";
import { useState } from "react";

export default () => {
  const { token } = useAuth();
  const outlet = useOutlet();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  if (token) {
    api.get("/api/v1/is-authenticated", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(res => {
      if (res.data.result) {
        navigate("/", { replace: true });
      }
      setLoading(false);
    }).catch(err => {
      setLoading(false);
    });
  }

  return (
    <Screen>
      <AppBar
        pages={[
          { label: "Login", path: "/auth" },
          { label: "Register", path: "/auth/register" }
        ]}
      />
      {outlet}
    </Screen>
  );
};
