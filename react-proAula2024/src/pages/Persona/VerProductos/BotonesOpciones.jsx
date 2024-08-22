import { useState } from "react";
import { MdCurrencyExchange, MdOutlineSell } from "react-icons/md";
import { TbLayoutGridAdd } from "react-icons/tb";
import { ModalProducto } from "./../../../components/ModalProducto/ModalProducto";
import { useForm } from "./../../../hooks/useForm";
import { useFetch } from "../../../hooks/useFetch";
import { fechaActual } from "./../../../helpers/fechaActual";

import styles from "./verProductos.module.css";

export const BotonesOpciones = ({ onOpenOpciones, openOpciones }) => {
  const [openVender, setOpenVender] = useState(false);
  const [errorMensaje, setErrorMensaje] = useState("");
  const [openIntercambiar, setOpenIntercambiar] = useState(false);
  const { responseFetch } = useFetch();
  const { formState, onInputChange } = useForm({
    nombreProducto: "",
    categoria: "",
    estado: "",
    direccionRecogida: "",
    cantidad: 0,
    descripcion: "",
    tipoProducto: "",
    precio: 0,
    fecha: fechaActual(),
  });

  const onOpenVender = () => {
    setOpenVender(!openVender);
  };

  const onOpenIntercambiar = () => {
    setOpenIntercambiar(!openIntercambiar);
  };

  const onSubmitProducto = async (e, tipoProducto) => {
    e.preventDefault();

    if (formState.nombreProducto === "") {
      setErrorMensaje("El nombre del producto es obligatorio");
      return;
    } else if (formState.categoria === "") {
      setErrorMensaje("La categoria del producto es obligatoria");
      return;
    } else if (formState.estado === "") {
      setErrorMensaje("El estado del producto es obligatorio");
      return;
    } else if (formState.direccionRecogida === "" && tipoProducto === "Donar") {
      setErrorMensaje("La dirección de recogida es obligatoria");
      return;
    } else if (formState.cantidad === 0) {
      setErrorMensaje("La cantidad del producto es obligatoria");
      return;
    } else if (formState.descripcion === "") {
      setErrorMensaje("La descripción del producto es obligatoria");
      return;
    } else if (formState.precio === 0 && tipoProducto === "Vender") {
      setErrorMensaje("El precio del producto es obligatorio");
      return;
    }

    try {
      const params = {
        method: "POST",
        path: "producto",
        data: {
          ...formState,
          tipoProducto,
        },
      };

      const data = await responseFetch(params);

      if (data.esValido) {
        onOpenVender();
        onOpenIntercambiar();
        setErrorMensaje("");
        onOpenOpciones();
      } else {
        setErrorMensaje(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={styles.contenedor_boton_crear}>
        <button className={styles.boton_crear} onClick={onOpenOpciones}>
          <TbLayoutGridAdd />
        </button>

        <button
          className={
            openOpciones ? styles.btn_opcion_vender : styles.btn_opcion_ocultar
          }
          onClick={onOpenVender}
        >
          <MdOutlineSell />
          Vender
        </button>
        <button
          className={
            openOpciones
              ? styles.btn_opcion_intercambiado
              : styles.btn_opcion_ocultar
          }
          onClick={onOpenIntercambiar}
        >
          <MdCurrencyExchange />
          Intercambiar
        </button>
      </div>

      {openVender && (
        <ModalProducto
          titulo="Vender producto"
          onCloseModal={onOpenVender}
          tituloBoton="Vender"
          formState={formState}
          onInputChange={onInputChange}
          onSubmitProducto={onSubmitProducto}
          errorMensaje={errorMensaje}
        />
      )}

      {openIntercambiar && (
        <ModalProducto
          onCloseModal={onOpenIntercambiar}
          titulo="Intercambiar producto"
          tituloBoton="Intercambiar"
          formState={formState}
          onInputChange={onInputChange}
          onSubmitProducto={onSubmitProducto}
          errorMensaje={errorMensaje}
        />
      )}
    </>
  );
};
