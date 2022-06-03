import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ProtectedLayout from "./components/ProtectedLayout";
import HomeLayout from "./components/HomeLayout";
import "./styles.css";
import Screen from "./components/Screen";

export default function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<LoginPage />} />
      </Route>

      <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route path="profile" element={<ProfilePage />} />
      </Route>
      <Route path="*" element={<Screen>
        <h1>404 Not Found</h1>
      </Screen>} />
    </Routes>
  );
}
