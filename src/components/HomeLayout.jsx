import { Navigate, useOutlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import AppBar from "./AppBar";
import Screen from "./Screen";

export default () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (user) {
    return <Navigate to="/dashboard/profile" replace />;
  }

  return (
    <Screen>
      <AppBar
        pages={[
          { label: "Login", path: "/" },
        ]}
      />
      {outlet}
    </Screen>
  );
};
