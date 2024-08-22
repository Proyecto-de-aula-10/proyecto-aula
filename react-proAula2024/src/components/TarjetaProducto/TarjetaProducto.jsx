import styles from "./tarjeta.module.css";

export const TarjetaProducto = ({
  producto,
  onRecogerProducto,
  ocultarBtn,
}) => {
  let nombreBtn = "";

  if (producto.tipoProducto === "Intercambiar") {
    nombreBtn = "Intercambiar";
  } else if (producto.tipoProducto === "Vender") {
    nombreBtn = "Comprar";
  } else {
    nombreBtn = "Recoger";
  }

  return (
    <div className={styles.tarjeta_fundacion}>
      <h3 className={styles.titulo_tarjeta}>{producto.nombreProducto}</h3>
      <p className={styles.texto_tarjeta}>
        Descripción: {producto.descripcion}
      </p>
      <p className={styles.texto_tarjeta}>Categoria: {producto.categoria}</p>
      <p className={styles.texto_tarjeta}>Estado: {producto.estado}</p>
      <p className={styles.texto_tarjeta}>
        Dirección a recoger: {producto.direccionRecogida}
      </p>

      {!ocultarBtn && (
        <button
          className={styles.btn_donar}
          onClick={() => onRecogerProducto(producto)}
        >
          {nombreBtn}
        </button>
      )}
    </div>
  );
};
