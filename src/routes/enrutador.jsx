import Login from "../pages/login";
import Registro from "../pages/Registro";
import Home from "../Home";
import RutaProtegida from "../components/RutaProtegida";
import Contenido from "../components/Contenido";
import ListadoVentas from "../pages/ListadoVentas";
import Productos from "../pages/Productos";

export const enrutador = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/registro",
    element: <Registro />,
  },
  {
    path: "/home",
    element: <RutaProtegida proteger={<Home />} />,
    children: [
      {
        path: "", // Ruta exacta /home
        element: <Contenido />,
      },
      {
        path: "ventas", // Ruta /home/ventas
        element: <ListadoVentas />,
      },
      {
        path: "productos", // Ruta /home/productos
        element: <Productos />,
      }
    ],
  },
];
