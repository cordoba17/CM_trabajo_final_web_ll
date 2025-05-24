import { useEffect, useState } from "react";
import "./ListadoVentas.css";

const ListadoVentas = () => {
  const [ventas, setVentas] = useState([]);

  function getVentas() {
    fetch("http://localhost:3000/ventas")
      .then((response) => response.json())
      .then((data) => setVentas(data))
      .catch((error) => console.error("Error al cargar ventas:", error));
  }

  useEffect(() => {
    getVentas();
  }, []);

  const eliminarVenta = (id) => {
    const confirmacion = window.confirm("¿Estás seguro que deseas eliminar esta venta?");
    if (!confirmacion) return;

    fetch(`http://localhost:3000/ventas/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setVentas(ventas.filter((venta) => venta.id !== id));
        alert("Venta eliminada correctamente");
      })
      .catch((error) => console.error("Error al eliminar venta:", error));
  };

  return (
    <div className="cards">
      {ventas.map((venta) => (
        <div className="card" key={venta.id}>
          <h2>{venta.producto}</h2>
          <p><strong>Cliente:</strong> {venta.usuario}</p>
          <p><strong>Precio:</strong> ${venta.precio.toLocaleString()}</p>
          <p><strong>Fecha:</strong> {venta.fecha}</p>
          <button className="btn eliminar" onClick={() => eliminarVenta(venta.id)}>
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListadoVentas;
