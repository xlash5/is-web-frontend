import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import ProtectedLayout from "./components/ProtectedLayout";
import HomeLayout from "./components/HomeLayout";
import "./styles.css";
import Screen from "./components/Screen";
import FollowingPage from "./pages/FollowingPage";
import DiscoverPage from "./pages/DiscoverPage";
import PasswordPage from "./pages/PasswordPage";


export default function App() {
  return (
    <Routes>
      <Route path="/auth" element={<HomeLayout />}>
        <Route path="" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      <Route element={<ProtectedLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="following" element={<FollowingPage />} />
        <Route path="discover" element={<DiscoverPage />} />
        <Route path="password" element={<PasswordPage />} />
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
