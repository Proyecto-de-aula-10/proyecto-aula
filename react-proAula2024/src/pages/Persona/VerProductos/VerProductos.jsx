import { IoSearch } from "react-icons/io5";
import { TarjetaProducto } from "../../../components";
import { categoriaProducto } from "../../../helpers/productoHelpers";
import { BotonesOpciones } from "./BotonesOpciones";
import { useVerProductos } from "../hook/useVerProductos";

import styles from "./verProductos.module.css";

export const VerProductos = () => {
  const {
    filtrarProductos,
    inputBuscarProducto,
    onOpenOpciones,
    openOpciones,
    setBuscarPorCategoria,
    setInputBuscarProducto,
    usuario,
    onComprarProducto,
    goToIntercambio,
  } = useVerProductos();

  return (
    <main className={styles.produ_contenedor}>
      <div className={styles.produ_content}>
        <div className={styles.buscador_productos}>
          <input
            type="text"
            placeholder="Buscar productos"
            value={inputBuscarProducto}
            onChange={(e) => setInputBuscarProducto(e.target.value)}
          />
          <button>
            <IoSearch />
          </button>
        </div>

        <article className={styles.lista_productos_disponibles}>
          <div className={styles.categoria_producto}>
            <h2>Categorias</h2>

            <ul className={styles.ul_categorias}>
              {categoriaProducto.map((categoria) => (
                <li
                  key={categoria.id}
                  className={styles.li_categorias}
                  onClick={() => setBuscarPorCategoria(categoria.categoria)}
                >
                  {categoria.categoria}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.lista_productos}>
            {filtrarProductos()?.map(
              (producto) =>
                !producto.disponibilidad &&
                producto.tipoProducto !== "Donar" && (
                  <TarjetaProducto
                    key={producto.idProducto}
                    producto={producto}
                    usuario={usuario}
                    onRecogerProducto={
                      producto.tipoProducto === "Intercambiar"
                        ? () => goToIntercambio(producto)
                        : onComprarProducto
                    }
                  />
                )
            )}
          </div>
        </article>

        <BotonesOpciones
          onOpenOpciones={onOpenOpciones}
          openOpciones={openOpciones}
        />
      </div>
    </main>
  );
};
