import { Link } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import { useForm } from "../../../hooks/useForm";
import { useContext, useState } from "react";
import { AuthUsuarioContext } from "../../../context/authUsuario";

import styles from "./RegistrarsePage.module.css";

export const RegistrarsePage = () => {
  const [errorMensaje, setErrorMensaje] = useState("");
  const { setUsuario, setIsLoguado } = useContext(AuthUsuarioContext);

  const { responseFetch } = useFetch();
  const { formState, onInputChange } = useForm({
    nombreCompleto: "",
    tipoDocumento: "Cedula",
    numeroDocumento: 0,
    telefono: 0,
    email: "",
    password: "",
    tipoEntidad: "Persona",
  });

  const nombreLabel =
    formState.tipoDocumento === "Cedula" ? "Nombre" : "Nombre de la empresa";

  const tipoDocumentoLabel =
    formState.tipoDocumento === "Cedula" ? "Número de documento" : "Nit";

  const onSubmitUsuario = async (e) => {
    e.preventDefault();

    // validar cada campo
    if (!formState.nombreCompleto) {
      setErrorMensaje("El nombre es requerido");
      return;
    } else if (!formState.numeroDocumento) {
      setErrorMensaje("El número de documento es requerido");
      return;
    } else if (!formState.telefono) {
      setErrorMensaje("El teléfono es requerido");
      return;
    } else if (!formState.email) {
      setErrorMensaje("El email es requerido");
      return;
    } else if (!formState.password) {
      setErrorMensaje("El password es requerido");
      return;
    }

    const params = {
      path: "usuario",
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
      setErrorMensaje(resp.mensaje);
    }
  };

  return (
    <section className={styles.container_registro}>
      <div className={styles.contiene_formulario}>
        <h1 className={styles.titulo_registro}>Registrarse</h1>

        <form className={styles.contiene_form}>
          <div className={styles.inputs_registro}>
            <label>{nombreLabel}</label>
            <input
              name="nombreCompleto"
              value={formState.nombreCompleto}
              onChange={onInputChange}
              className={styles.input_form}
              type="text"
              placeholder="Nombre..."
            />
          </div>

          <div className={styles.dividir_inputs}>
            <div className={styles.inputs_registro}>
              <label>Tipo de documento</label>
              <select
                className={styles.select_form}
                name="tipoDocumento"
                value={formState.tipoDocumento}
                onChange={onInputChange}
              >
                <option value="Cedula">Cedula</option>
                <option value="Nit">Nit</option>
              </select>
            </div>

            <div className={styles.inputs_registro}>
              <label>{tipoDocumentoLabel}</label>
              <input
                name="numeroDocumento"
                value={formState.numeroDocumento}
                onChange={onInputChange}
                className={styles.input_form}
                type="number"
                placeholder="Número de documento..."
              />
            </div>
          </div>

          <div className={styles.inputs_registro}>
            <label>Telefono</label>
            <input
              name="telefono"
              value={formState.telefono}
              onChange={onInputChange}
              className={styles.input_form}
              type="number"
              placeholder="Número de telefono..."
            />
          </div>

          <div className={styles.dividir_inputs}>
            <div className={styles.inputs_registro}>
              <label>Email</label>
              <input
                name="email"
                value={formState.email}
                onChange={onInputChange}
                className={styles.input_form}
                type="email"
                placeholder="Email..."
              />
            </div>

            <div className={styles.inputs_registro}>
              <label>Password</label>
              <input
                name="password"
                value={formState.password}
                onChange={onInputChange}
                className={styles.input_form}
                type="password"
                placeholder="Password..."
              />
            </div>
          </div>

          <div className={styles.inputs_registro}>
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

          <div className={styles.content_btn_registro}>
            <button
              className={styles.btn_registro}
              onClick={onSubmitUsuario}
              type="submit"
            >
              Ingresar
            </button>
          </div>

          {errorMensaje && (
            <p className={styles.error_mensaje}>{errorMensaje}</p>
          )}

          <div
            className={styles.redirect__registro}
            style={{ cursor: "pointer" }}
          >
            <p>¿Ya tienes cuenta?</p>
            <Link to="/auth/login" className={styles.link_registro}>
              Ingresa
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};
