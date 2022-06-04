import { useOutlet, useNavigate } from "react-router-dom";
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

  api.get("/api/v1/is-authenticated", {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then((res) => {
    if (res.status === 200 && res.data.result) {
      setLoading(false);
    } else {
      navigate("/auth", { replace: true });
    }
  }).catch((err) => {
    navigate("/auth", { replace: true });
  });


  return (
    <Screen>
      <AppBar
        pages={[
          { label: "Profile", path: "/" }
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
