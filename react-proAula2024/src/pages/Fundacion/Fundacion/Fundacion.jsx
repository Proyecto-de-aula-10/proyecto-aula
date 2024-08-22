import { TarjetaProducto } from "../../../components";
import { useProductosDonados } from "../../../hooks/useProductosDonados";

import styles from "./fundacion.module.css";

export const Fundacion = () => {
  const {
    listaFundaciones,
    onGoToProductosDonados,
    onRecogerProducto,
    usuario,
  } = useProductosDonados();

  return (
    <main className={styles.main_fundacion}>
      <div className={styles.main_content}>
        <div className={styles.fundacion_info}>
          <h1>Fundación</h1>

          <p>{usuario.nombreCompleto}</p>

          <button onClick={onGoToProductosDonados}>
            Ver productos donados
          </button>
        </div>

        <div className={styles.lista_productos_donados}>
          {listaFundaciones?.map(
            (producto) =>
              !producto.disponibilidad && (
                <TarjetaProducto
                  key={producto.idProducto}
                  producto={producto}
                  onRecogerProducto={onRecogerProducto}
                />
              )
          )}
        </div>
      </div>
    </main>
  );
};
