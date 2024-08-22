import { useContext, useEffect, useState } from "react";
import { useFetch } from "./useFetch";
import { AuthUsuarioContext } from "../context/authUsuario";
import { useNavigate } from "react-router-dom";

export const useProductosDonados = () => {
  const navigate = useNavigate();
  const { usuario } = useContext(AuthUsuarioContext);
  const [listaFundaciones, setListaFundaciones] = useState([]);
  const { responseFetch } = useFetch();

  useEffect(() => {
    const obtenerProductos = async () => {
      const params = {
        method: "GET",
        path: `productos/usuario/${usuario.idUsuario}`,
      };

      const { listaproductos } = await responseFetch(params);

      setListaFundaciones(listaproductos);
    };

    obtenerProductos();
  }, []);

  const onGoToProductosDonados = () => {
    navigate("/fundacion/productos");
  };

  const onGoToVerProductos = () => {
    navigate("/fundacion");
  };

  const onRecogerProducto = async (producto) => {
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

  return {
    listaFundaciones,
    onGoToProductosDonados,
    onRecogerProducto,
    usuario,
    onGoToVerProductos,
  };
};
