import "./Login.css";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { generarId } from "../utils/funciones";
import { alertaRedireccion, alertaError } from "../utils/funciones";
let urlUsuarios = "http://localhost:3000/usuarios";
function Registro() {
  const [getUsuario, setUsuario] = useState("");
  const [getPassword, setPassword] = useState("");
  const [getEmail, setEmail] = useState("");
  const [getDocumento, setDocumento] = useState("");
  const [getNombre, setNombre] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  let redireccion = useNavigate();

  //primera peticion de tipo fetch , me permite buscar info a una API
  function getUsuarios() {
    fetch(urlUsuarios)
      .then((response) => response.json())
      .then((data) => setUsuarios(data));
  }
  useEffect(() => {
    getUsuarios();
  }, []);

  function buscarUsuarios() {
    let auth = usuarios.find(
      (item) => item.usuario === getUsuario  || item.correo == getEmail
    );
    return auth;
  }

  function registrarUsuario(e) {
    e.preventDefault();
    if (!buscarUsuarios()) {
        let nuevoUsuario = {
            id: generarId(),
            nombre:getNombre ,
            documento:getDocumento ,
            correo: getEmail,
            contrasena: getPassword,
            usuario:getUsuario,
        };
        fetch(urlUsuarios,{
            method: "POST",
            body: JSON.stringify(nuevoUsuario),
        });
      alertaRedireccion(redireccion, "/", "Usuario registrado...");
    } else {
      alertaError("Error","Usuario ya existe en la base de datos","error");
    }
  }
  return (
    <div className="container">
      <input id="signup_toggle" type="checkbox" />
      <form onSubmit={registrarUsuario} className="form">
        <div className="form_front">
          <div className="form_details">SignUp</div>
          <input
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            className="input"
            placeholder="Nombre"
          />
          <input
            onChange={(e) => setDocumento(e.target.value)}
            type="text"
            className="input"
            placeholder="Documento"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="input"
            placeholder="Correo"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            className="input"
            placeholder="Contraeña"
          />
          <input
            onChange={(e) => setUsuario(e.target.value)}
            type="text"
            className="input"
            placeholder="Usuario"
          />
          <button className="btn">Signup</button>
          <span className="switch">
            ¿Ya tienes una cuenta?
            <Link to="/" className="signup_tog">
              Iniciar Sesión
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Registro;
