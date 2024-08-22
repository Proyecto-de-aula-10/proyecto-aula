import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import { useForm } from "../../../hooks/useForm";
import { AuthUsuarioContext } from "../../../context/authUsuario";

import styles from "./LoginPage.module.css";

export const LoginPage = () => {
  const [errorMensaje, setErrorMensaje] = useState("");
  const { setUsuario, setIsLoguado } = useContext(AuthUsuarioContext);
  const { formState, onInputChange } = useForm({
    email: "",
    password: "",
    tipoEntidad: "Persona",
  });

  const { responseFetch } = useFetch();

  console.log(formState);

  const onSubmitLogin = async (e) => {
    e.preventDefault();

    if (!formState.email) {
      setErrorMensaje("El email es requerido");
      return;
    } else if (!formState.password) {
      setErrorMensaje("El password es requerido");
      return;
    }

    const params = {
      path: "login",
      method: "POST",
      data: formState,
    };

    const resp = await responseFetch(params);

    if (resp.esValido) {
      setUsuario(resp.usuario);
      setIsLoguado(true);

      localStorage.setItem("usuario", JSON.stringify(resp.usuario));
      setErrorMensaje("");
    } else {
      setErrorMensaje(`${resp.mensaje} o tipo de usuario`);
    }
  };

  return (
    <section className={styles.container_login}>
      <div className={styles.contiene_formulario}>
        <h1 className={styles.titulo_login}>Iniciar Sesión</h1>

        <form className={styles.contiene_form}>
          <div className={styles.inputs_login}>
            <label>Tipo de usuario</label>
            <select
              className={styles.select_form}
              name="tipoEntidad"
              value={formState.tipoEntidad}
              onChange={onInputChange}
            >
              <option value="Persona">Persona</option>
              <option value="Empresa">Empresa</option>
              <option value="Fundacion">Fundación</option>
            </select>
          </div>

          <div className={styles.inputs_login}>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              className={styles.input_form}
              type="text"
              placeholder="Email..."
              value={formState.email}
              onChange={onInputChange}
            />
          </div>

          <div className={styles.inputs_login}>
            <label htmlFor="Password">Password</label>
            <input
              name="password"
              className={styles.input_form}
              type="password"
              placeholder="Password..."
              value={formState.password}
              onChange={onInputChange}
            />
          </div>

          <div className={styles.content_btn_login}>
            <button className={styles.btn_login} onClick={onSubmitLogin}>
              Ingresar
            </button>
          </div>

          {errorMensaje && (
            <p className={styles.error_mensaje}>{errorMensaje}</p>
          )}

          <div className={styles.redirect__login} style={{ cursor: "pointer" }}>
            <p>¿No tienes una cuenta?</p>
            <Link to="/auth/register">Registrate</Link>
          </div>
        </form>
      </div>
    </section>
  );
};
