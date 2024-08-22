import { useContext, useEffect, useState } from "react";

import { ModalProducto } from "../../../components/ModalProducto/ModalProducto";
import { AuthUsuarioContext } from "./../../../context/authUsuario";
import { useFetch } from "./../../../hooks/useFetch";
import { useForm } from "../../../hooks/useForm";

import styles from "./donarAFundacion.module.css";
import { TarjetaUsuario } from "../../../components";
import { fechaActual } from "../../../helpers/fechaActual";

export const DonarAFundacion = () => {
  const [openModal, setOpenModal] = useState(false);
  const [listaFundaciones, setListaFundaciones] = useState([]);
  const [errorMensaje, setErrorMensaje] = useState("");
  const [fundacionSeleccionado, setFundacionSeleccionado] = useState({});
  const { usuario } = useContext(AuthUsuarioContext);
  const { formState, onInputChange } = useForm({
    nombreProducto: "",
    categoria: "",
    estado: "",
    direccionRecogida: "",
    cantidad: 0,
    descripcion: "",
    tipoProducto: "Donación",
    precio: 0,
  });

  const { responseFetch } = useFetch();

  useEffect(() => {
    const obtenerFundaciones = async () => {
      try {
        const params = {
          method: "GET",
          path: "usuarios?tipoEntidad=Fundacion",
        };

        const data = await responseFetch(params);
        const { listaUsuario } = data;

        setListaFundaciones(listaUsuario);
      } catch (error) {
        console.error(error);
      }
    };

    obtenerFundaciones();
  }, []);

  const onOpenModal = (data) => {
    setOpenModal(!openModal);

    if (!openModal) {
      setFundacionSeleccionado(data);
    } else {
      setFundacionSeleccionado({});
    }
  };

  const onSubmitDonacion = async (e) => {
    e.preventDefault();

    if (formState.nombreProducto.trim() === "") {
      setErrorMensaje("El nombre del producto es requerido");
      return;
    } else if (formState.categoria.trim() === "") {
      setErrorMensaje("La categoría es requerida");
      return;
    } else if (formState.estado.trim() === "") {
      setErrorMensaje("El estado es requerido");
      return;
    } else if (formState.direccionRecogida.trim() === "") {
      setErrorMensaje("La dirección de recogida es requerida");
      return;
    } else if (formState.cantidad <= 0) {
      setErrorMensaje("La cantidad debe ser mayor a 0");
      return;
    } else if (formState.descripcion.trim() === "") {
      setErrorMensaje("La descripción es requerida");
      return;
    }

    try {
      const params = {
        method: "POST",
        path: "producto",
        data: {
          ...formState,
          fecha: fechaActual(),
          usuario: {
            idUsuario: fundacionSeleccionado.idUsuario,
          },
          empresaDono: {
            idUsuario: usuario.idUsuario,
          },
        },
      };

      const data = await responseFetch(params);

      if (data.esValido) {
        setOpenModal(false);
        setErrorMensaje("");
      } else {
        setErrorMensaje(data.mensaje);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className={styles.main_empresa}>
      <section className={styles.info_empresas}>
        <div className={styles.contiene_titulo_nombre}>
          <h1 className={styles.titulo_empresa}>Bienvenida Empresa</h1>
          <span>({usuario.nombreCompleto})</span>
        </div>

        <div className={styles.info_fundaciones}>
          <h2>Lista de fundaciones disponibles</h2>

          <div className={styles.lista_fundaciones}>
            {listaFundaciones.map((funda) => (
              <TarjetaUsuario
                key={funda.idUsuario}
                onOpenModal={onOpenModal}
                data={funda}
              />
            ))}
          </div>
        </div>
      </section>

      {openModal && (
        <ModalProducto
          onCloseModal={onOpenModal}
          fundacionSeleccionado={fundacionSeleccionado}
          formState={formState}
          onInputChange={onInputChange}
          onSubmitProducto={onSubmitDonacion}
          errorMensaje={errorMensaje}
        />
      )}
    </main>
  );
};
