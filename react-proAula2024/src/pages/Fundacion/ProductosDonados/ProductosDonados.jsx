import { useProductosDonados } from "../../../hooks/useProductosDonados";
import styles from "./productosDonados.module.css";

export const ProductosDonados = () => {
  const { listaFundaciones, onGoToVerProductos } = useProductosDonados();

  return (
    <section className={styles.funda_productos}>
      <div className={styles.funda_content}>
        <div className={styles.funda_info}>
          <h2>Productos donados</h2>

          <button onClick={onGoToVerProductos}>Volver</button>
        </div>

        <div className={styles.funda_lista_productos_donados}>
          <table className={styles.table_pro_donados}>
            <thead>
              <tr>
                <th>Empresa</th>
                <th>Producto</th>
                <th>Descripción</th>
                <th>Cantidad</th>
                <th>Fecha de donación</th>
                <th>Estado</th>
                <th>Categoria</th>
              </tr>
            </thead>
            <tbody>
              {listaFundaciones?.map((producto) => (
                <tr key={producto.idProducto}>
                  <td>{producto.empresaDono.nombreCompleto}</td>
                  <td>{producto.nombreProducto}</td>
                  <td>{producto.descripcion}</td>
                  <td>{producto.cantidad}</td>
                  <td>{producto.fecha}</td>
                  <td>{producto.estado}</td>
                  <td>{producto.categoria}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
