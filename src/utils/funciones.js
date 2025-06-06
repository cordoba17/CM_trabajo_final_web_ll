import Swal from 'sweetalert2'


export function alertaRedireccion(redireccion, ruta, mensaje){
    let timerInterval;
    Swal.fire({
      title: mensaje,
      html: "Será redireccionado en <b></b> milisegundos.",
      timer: 1500,
      timerProgressBar: true,
      icon: "success",
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
        redireccion(ruta)
      }
    })


}
export function alertaError(titulo, mensaje, icono){
      Swal.fire({
        title: titulo,
        html: mensaje,
        icon: icono,
        draggable: true
      });

}
export function alertaCorrecto(titulo, mensaje, icono, id){
  let urlListadoVentas = "http://localhost:5173/home/ventas";
  SwatchBook.fire({
    title: titulo,
    text: mensaje,
    icon: icono,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si , eliminar",

  }).then((result) =>{
    if (result.isConfirmed){
      fetch(urlListadoVentas + id, {
        method: "DELETE",
      });
      Swal.fire({
        title: "Eliminado",
        text: "La venta fue eliminada correctamente",
        icon: "success",
      });
    }

  });

}
export function generarToken(){
  //generar numeros aleatorios entre 100 valores del 1 al 100
  let numeroAleatorio = "CB" + Math.random() * 1000 + "AB"
  return numeroAleatorio
       
}

export function generarId(){
  return Math.random().toString(36).substring(2)
}