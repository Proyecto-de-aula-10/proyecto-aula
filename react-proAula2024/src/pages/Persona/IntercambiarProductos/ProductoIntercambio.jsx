/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { TarjetaProducto } from "../../../components";
import { useFetch } from "../../../hooks/useFetch";

import styles from "./productoIntercambio.module.css";
import { fechaActual } from "../../../helpers/fechaActual";

export const ProductoIntercambio = () => {
  const productoAIntercambiar = JSON.parse(
    localStorage.getItem("productoAIntercambiar")
  );
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const [comentario, setComentario] = useState("");
  const [listaComentarios, setListaComentarios] = useState([]);
  const { responseFetch } = useFetch();

  useEffect(() => {
    const obtenerComentarios = async () => {
      try {
        const params = {
          path: "comentarios/" + productoAIntercambiar.idProducto,
          method: "GET",
        };

        const data = await responseFetch(params);

        if (data.esValido) {
          setListaComentarios(data.listaComentarios);
        } else {
          console.log(data.mensaje);
        }
      } catch (error) {
        console.log(error);
      }
    };

    obtenerComentarios();
  }, []);

  const enviarComentario = async () => {
    try {
      const params = {
        path: "comentario",
        method: "POST",
        data: {
          comentario,
          fecha: fechaActual(),
          nombreUsuarioEscritor: usuario.nombreCompleto,
          producto: {
            idProducto: productoAIntercambiar.idProducto,
          },
          usuario: {
            idUsuario: usuario.idUsuario,
          },
        },
      };

      const data = await responseFetch(params);

      if (data.esValido) {
        setListaComentarios([...listaComentarios, data.comentarioDTO]);
        setComentario("");
      } else {
        console.log(data.mensaje);
      }

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={styles.contenedor_intercambio}>
      <div className={styles.content_intercambio}>
        <div className={styles.producto_intercambio}>
          <h2>Producto a intercambiar</h2>

          <TarjetaProducto producto={productoAIntercambiar} ocultarBtn />
        </div>

        <div className={styles.contenedor_comentarios}>
          <h2>Sugerencias de intercambio</h2>
          <div className={styles.comentarios}>
            {listaComentarios.map((comentario) => (
              <div className={styles.comentario} key={comentario.idCommentario}>
                <p>
                  <strong>Usuario:</strong> {comentario.nombreUsuarioEscritor}
                </p>
                <p>
                  <strong>Comentario:</strong> {comentario.comentario}
                </p>
                <p>
                  <strong>Fecha:</strong> {comentario.fecha}
                </p>
              </div>
            ))}
          </div>

          <div className={styles.escribe_comentario}>
            <textarea
              name="comentario"
              placeholder="Escribe un comentario"
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
            ></textarea>
            <button onClick={enviarComentario}>Enviar</button>
          </div>
        </div>
      </div>
    </section>
  );
};
