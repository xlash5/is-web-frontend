import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import ProtectedLayout from "./components/ProtectedLayout";
import HomeLayout from "./components/HomeLayout";
import "./styles.css";
import Screen from "./components/Screen";

export default function App() {
  return (
    <Routes>
      <Route path="/auth" element={<HomeLayout />}>
        <Route path="" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      <Route element={<ProtectedLayout />}>
        <Route path="/" element={<ProfilePage />} />
      </Route>

      <Route path="*" element={<Screen>
        <div>
          404 Not Found.
          The page you are looking for does not exist.
        </div>
      </Screen>} />
    </Routes>
  );
}
