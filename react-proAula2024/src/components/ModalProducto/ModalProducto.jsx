import { BiDonateBlood } from "react-icons/bi";
import {
  categoriaProducto,
  estadoProducto,
} from "../../helpers/productoHelpers";

import styles from "./modalProducto.module.css";

export const ModalProducto = ({
  onCloseModal,
  titulo = "Confirmar donación",
  tituloBoton = "Donar",
  formState,
  onInputChange,
  onSubmitProducto,
  errorMensaje,
}) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <div className={styles.modal_titulo_close}>
          <p>{titulo}</p>
          <button className={styles.btn_close_modal} onClick={onCloseModal}>
            X
          </button>
        </div>

        <form className={styles.form_modal_donar}>
          <div className={styles.contiene_input}>
            <label htmlFor="Nombre">Nombre del producto</label>
            <input
              type="text"
              placeholder="Bicicleta o Closet..."
              name="nombreProducto"
              value={formState.nombreProducto}
              onChange={onInputChange}
            />
          </div>

          <div className={styles.contiene_input}>
            <label htmlFor="tarjeta">Categoria del producto</label>
            <select
              name="categoria"
              value={formState.categoria}
              onChange={onInputChange}
            >
              <option value="">Selecciona una categoria</option>
              {categoriaProducto.map((categoria) => (
                <option key={categoria.id} value={categoria.categoria}>
                  {categoria.categoria}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.contiene_input}>
            <label htmlFor="tarjeta">Estado del producto</label>
            <select
              name="estado"
              value={formState.estado}
              onChange={onInputChange}
            >
              <option value="">Selecciona un estado</option>
              {estadoProducto.map((estado) => (
                <option key={estado.id} value={estado.estado}>
                  {estado.estado}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.contiene_input}>
            <label htmlFor="cantidad">Lugar para recoger el producto</label>
            <input
              type="text"
              placeholder="Calle bogota 43-45..."
              name="direccionRecogida"
              value={formState.direccionRecogida}
              onChange={onInputChange}
            />
          </div>

          <div className={styles.contiene_input}>
            <label htmlFor="tarjeta">Cantidad del producto</label>
            <input
              type="number"
              placeholder="20"
              name="cantidad"
              value={formState.cantidad}
              onChange={onInputChange}
            />
          </div>

          {tituloBoton === "Vender" && (
            <div className={styles.contiene_input}>
              <label htmlFor="precio">Precio del producto</label>
              <input
                type="number"
                placeholder="100.000"
                name="precio"
                value={formState.precio}
                onChange={onInputChange}
              />
            </div>
          )}

          <div className={styles.contiene_input}>
            <label htmlFor="tarjeta">Descripción del producto</label>
            <textarea
              placeholder="Juguetes para que los niños se recreen..."
              name="descripcion"
              value={formState.descripcion}
              onChange={onInputChange}
            />
          </div>

          <button
            className={styles.btn_donar}
            onClick={(e) => onSubmitProducto(e, tituloBoton)}
          >
            <BiDonateBlood />
            {tituloBoton}
          </button>
        </form>

        {errorMensaje && <p className={styles.error_mensaje}>{errorMensaje}</p>}
      </div>
    </div>
  );
};
