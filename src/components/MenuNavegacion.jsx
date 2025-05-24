import { alertaRedireccion } from "../utils/funciones";
import { useNavigate,Link } from "react-router-dom";
const MenuNavegacion = () => {
let redireccion = useNavigate()
let usuarioLogueado = JSON.parse(localStorage.getItem("usuario"));
console.log(usuarioLogueado.contrasena);

  function cerrarSesion(){
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    alertaRedireccion(redireccion, "/", "Cerrando sesión...")


  }
  return (
    <aside className="menu-navegacion">
      <h2>Usuario:{usuarioLogueado.nombre}</h2>

     <a href="/home"><img className="logo" src="/logo.jpeg" alt="Logo"/></a>
      <nav>
        <Link to="ventas">Ventas</Link>
        <Link to="productos">Productos</Link>
        <button onClick={cerrarSesion} type="button">Cerrar Sesión</button>
      </nav>
    </aside>
  );
};

export default MenuNavegacion;
