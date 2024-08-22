import { createContext, useEffect, useState } from "react";

export const AuthUsuarioContext = createContext();

export const AuthUsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({});
  const [isLoguado, setIsLoguado] = useState(false);

  useEffect(() => {
    const usuarioStorage = localStorage.getItem("usuario");
    if (usuarioStorage) {
      setUsuario(JSON.parse(usuarioStorage));
      setIsLoguado(true);
    }
  }, []);

  return (
    <AuthUsuarioContext.Provider
      value={{
        usuario,
        setUsuario,
        isLoguado,
        setIsLoguado,
      }}
    >
      {children}
    </AuthUsuarioContext.Provider>
  );
};
