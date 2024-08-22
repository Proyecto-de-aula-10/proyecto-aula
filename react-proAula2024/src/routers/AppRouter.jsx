import { Navigate, Route, Routes } from "react-router-dom";
import { AuthPage } from "../pages/auth/AuthPage";
import { SecondRoute } from "./SecondRoute";
import { useContext } from "react";
import { AuthUsuarioContext } from "../context/authUsuario";

export const AppRouter = () => {
  const { isLoguado, usuario } = useContext(AuthUsuarioContext);

  return (
    <>
      <Routes>
        {isLoguado ? (
          <Route path="/*" element={<SecondRoute usuarioActivo={usuario} />} />
        ) : (
          <Route path="/auth/*" element={<AuthPage />} />
        )}

        <Route path="/*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </>
  );
};
