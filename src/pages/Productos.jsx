import { useEffect, useState } from "react";
import "./Productos.css";

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/productos")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error("Error al obtener productos:", err));
  }, []);

  const agregarVenta = async (producto) => {
    try {
      const resUsuarios = await fetch("http://localhost:3000/usuarios");
      const usuarios = await resUsuarios.json();

      if (usuarios.length === 0) {
        alert("No hay usuarios disponibles.");
        return;
      }

      const usuarioAleatorio = usuarios[Math.floor(Math.random() * usuarios.length)];

      const nuevaVenta = {
        usuario: usuarioAleatorio.usuario,
        nombreCliente: usuarioAleatorio.nombre,
        producto: producto.nombre,
        precio: parseFloat(producto.precio.replace("$", "").replace(",", "")) * 1000,
        fecha: new Date().toISOString().split("T")[0]
      };

      const resVenta = await fetch("http://localhost:3000/ventas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevaVenta)
      });

      if (resVenta.ok) {
        alert(`¡Venta exitosa de ${producto.nombre} a nombre de ${usuarioAleatorio.nombre}!`);
      } else {
        alert("Error al registrar la venta.");
      }
    } catch (error) {
      console.error("Error al registrar venta:", error);
    }
  };

  return (
    <div className="catalogo">
      <h2>Catálogo de Productos</h2>
      <div className="catalogo-grid">
        {productos.map((prod) => (
          <div className="producto-card" key={prod.id}>
            <img src={prod.imagen} alt={prod.nombre} />
            <h3>{prod.nombre}</h3>
            <p>{prod.descripcion}</p>
            <strong>{prod.precio}</strong>
            <button className="catalogo-btn" onClick={() => agregarVenta(prod)}>
              Vender
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
