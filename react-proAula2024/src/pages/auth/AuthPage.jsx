import { Navigate, Route, Routes } from "react-router-dom";
import { RegistrarsePage } from "./RegisterPage/RegistrarsePage";
import { LoginPage } from "./LoginPage/LoginPage";

export const AuthPage = () => {
  return (
    <Routes>
      <Route path="register" element={<RegistrarsePage />} />
      <Route path="login" element={<LoginPage />} />

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
