export const PerfilUsuario = () => {
  return (
    <div>
      <h1>Perfil de Usuario</h1>

      <div>
        <div className="info_usuario_activo">
          <p>Nombre: Martin</p>
          <p>Email: Martin</p>
          <p>Telefono: Martin</p>
        </div>
      </div>

      <div>
        <table className="tabla_productos_comprados">
          <thead>
            <tr>
              <th>Producto comprado</th>
              <th>Precio</th>
              <th>Fecha de Compra</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Producto 1</td>
              <td>$100</td>
              <td>01/01/2021</td>
            </tr>
            <tr>
              <td>Producto 2</td>
              <td>$200</td>
              <td>02/01/2021</td>
            </tr>
            <tr>
              <td>Producto 3</td>
              <td>$300</td>
              <td>03/01/2021</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
