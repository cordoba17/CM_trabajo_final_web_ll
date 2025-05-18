import Login from "../pages/login";
import Home from "../Home";
import RutaProtegida from "../components/RutaProtegida";
import Registro from "../pages/Registro";

export let enrutador = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/registro",
    element: <Registro/>,
  },
  {
    path: "/home",
    element: <RutaProtegida proteger={<Home />} />,
  },
 
 
];
