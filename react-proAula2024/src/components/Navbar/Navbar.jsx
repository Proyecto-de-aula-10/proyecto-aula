import { useContext } from "react";
import img from "../../assets/logo_reciclar.png";

import { useNavigate } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import { AuthUsuarioContext } from "./../../context/authUsuario";

import styles from "./navbar.module.css";

export const Navbar = () => {
  const navigate = useNavigate();
  const { setIsLoguado, setUsuario } = useContext(AuthUsuarioContext);

  const cerrarSesion = () => {
    localStorage.removeItem("usuario");
    setIsLoguado(false);
    setUsuario({});
    navigate("/auth/login");
  };

  const goToVerProductos = () => {
    navigate("/verProductos");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.contiene_logo} onClick={goToVerProductos}>
        <img src={img} alt="logo reciclar" />
        <h4>Eco3R</h4>
      </div>

      <button className={styles.btn_cerrar} onClick={cerrarSesion}>
        <LuLogOut />
        Cerrar Sesión
      </button>
    </nav>
  );
};
