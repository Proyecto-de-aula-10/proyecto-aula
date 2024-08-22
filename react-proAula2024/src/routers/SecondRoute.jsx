import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../components";
import {
  DonarAFundacion,
  Fundacion,
  ProductoIntercambio,
  ProductosDonados,
  VerProductos,
} from "../pages";

export const SecondRoute = ({ usuarioActivo }) => {
  return (
    <>
      <Navbar />

      <Routes>
        {usuarioActivo.tipoEntidad === "Persona" && (
          <>
            <Route path="/verProductos" element={<VerProductos />} />
            <Route
              path="/producto/intercambio/:idProducto"
              element={<ProductoIntercambio />}
            />

            <Route path="*" element={<Navigate to="/verProductos" />} />
          </>
        )}

        {usuarioActivo.tipoEntidad === "Fundacion" && (
          <>
            <Route path="/fundacion" element={<Fundacion />} />
            <Route path="/fundacion/productos" element={<ProductosDonados />} />

            <Route path="*" element={<Navigate to="/fundacion" />} />
          </>
        )}

        {usuarioActivo.tipoEntidad === "Empresa" && (
          <>
            <Route path="/" element={<DonarAFundacion />} />

            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </>
  );
};
