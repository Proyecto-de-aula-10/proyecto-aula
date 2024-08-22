import styles from "./tarjeta.module.css";

export const TarjetaUsuario = ({ onOpenModal, data }) => {
  return (
    <div className={styles.tarjeta_fundacion}>
      <h3 className={styles.titulo_tarjeta}>{data.nombreCompleto}</h3>
      <p className={styles.texto_tarjeta}>
        Tipo de documento: {data.tipoDocumento}
      </p>
      <p className={styles.texto_tarjeta}>
        Número de documento: {data.numeroDocumento}
      </p>
      <p className={styles.texto_tarjeta}>Email: {data.email}</p>
      <p className={styles.texto_tarjeta}>Telefono: {data.telefono}</p>
      <button className={styles.btn_donar} onClick={() => onOpenModal(data)}>
        Donar
      </button>
    </div>
  );
};
