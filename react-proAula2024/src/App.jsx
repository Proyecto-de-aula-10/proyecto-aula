import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routers/AppRouter";
import { AuthUsuarioProvider } from "./context/authUsuario";

function App() {
  return (
    <BrowserRouter>
      <AuthUsuarioProvider>
        <AppRouter />
      </AuthUsuarioProvider>
    </BrowserRouter>
  );
}

export default App;
