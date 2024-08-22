/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthUsuarioContext } from "../../../context/authUsuario";
import { useFetch } from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export const useVerProductos = () => {
  const [openOpciones, setOpenOpciones] = useState(false);
  const [inputBuscarProducto, setInputBuscarProducto] = useState("");
  const [buscarPorCategoria, setBuscarPorCategoria] = useState("");
  const [listaProductos, setListProductos] = useState([]);
  const { usuario } = useContext(AuthUsuarioContext);
  const { responseFetch } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerProductos = async () => {
      const params = {
        method: "GET",
        path: "productos",
      };

      const data = await responseFetch(params);

      if (data.esValido) {
        setListProductos(data.listaproductos);
      } else {
        console.log(data.mensaje);
      }
    };

    obtenerProductos();
  }, []);

  useEffect(() => {
    setInputBuscarProducto(buscarPorCategoria);
  }, [buscarPorCategoria]);

  const onOpenOpciones = () => {
    setOpenOpciones(!openOpciones);
  };

  const filtrarProductos = () => {
    if (inputBuscarProducto.length === 0) return listaProductos;

    return listaProductos.filter(
      ({ nombreProducto, categoria, estado, tipoProducto }) =>
        nombreProducto
          .toLowerCase()
          .includes(inputBuscarProducto.toLowerCase().trim()) ||
        categoria
          .toLowerCase()
          .includes(inputBuscarProducto.toLowerCase().trim()) ||
        estado
          .toLowerCase()
          .includes(inputBuscarProducto.toLowerCase().trim()) ||
        tipoProducto
          .toLowerCase()
          .includes(inputBuscarProducto.toLowerCase().trim())
    );
  };

  const onComprarProducto = async (producto) => {
    try {
      const params = {
        path: "producto",
        method: "PUT",
        data: {
          ...producto,
          disponibilidad: true,
        },
      };

      const response = await responseFetch(params);

      if (response.esValido) {
        console.log(response);
      } else {
        console.log(response.mensaje);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const goToIntercambio = (producto) => {
    localStorage.setItem("productoAIntercambiar", JSON.stringify(producto));

    navigate(`/producto/intercambio/${producto.idProducto}`);
  };

  return {
    openOpciones,
    setOpenOpciones,
    inputBuscarProducto,
    setInputBuscarProducto,
    buscarPorCategoria,
    setBuscarPorCategoria,
    listaProductos,
    setListProductos,
    onOpenOpciones,
    filtrarProductos,
    usuario,
    onComprarProducto,
    goToIntercambio,
  };
};
