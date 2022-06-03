import { Link, Navigate, useOutlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import AppBar from "./AppBar";
import Screen from "./Screen";

export default () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <Screen>
      <AppBar
        pages={[
          { label: "Profile", path: "/dashboard/profile" }
        ]}
      />
      {outlet}
    </Screen>
  );
};
