import { Outlet } from "react-router-dom";
import soldadura from "../assets/soldadura.jpg"; // Usa tus imágenes
import servicios from "../assets/servicios.jpg";
const Contenido = () => {
  return(
    <section className="aplicacion_informacion">
    <h1 style={{ textAlign: "center" }}>CERRAJERÍA Y ESTRUCTURAS METÁLICAS CARLOS MESA</h1>

    <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", padding: "1rem" }}>
      <div style={{ flex: "1 1 300px" }}>
        <h2>¿Quiénes somos?</h2>
        <p>
          Somos una empresa especializada en soluciones de cerrajería, estructuras metálicas y servicios personalizados.
          Con más de 10 años de experiencia, ofrecemos confianza, calidad y atención inmediata.
        </p>
      </div>

      <div style={{ flex: "1 1 300px" }}>
        <img src={soldadura} alt="soldadura" style={{ width: "100%", borderRadius: "10px" }} />
      </div>

      <div style={{ flex: "1 1 300px" }}>
        <h2>Servicios que ofrecemos:</h2>
        <ul>
          <li>Cambio de cerraduras</li>
          <li>Duplicado de llaves</li>
          <li>Reparación de puertas metálicas</li>
          <li>Soldadura y estructuras metálicas</li>
          <li>Atención de emergencias 24/7</li>
        </ul>
      </div>

      <div style={{ flex: "1 1 300px" }}>
        <img src={servicios} alt="Llave" style={{ width: "100%", borderRadius: "10px" }} />
      </div>
    </div>

  <Outlet/>
  </section>
  )
  
}

export default Contenido;
