

  
  
  
  
  //Creacion del objeto Dispositivo
  class Dispositivo {
    constructor(id, nombre, detalle, sistema, prioridad, observacion) {
      this.id = id
      this.nombre = nombre;
      this.detalle = detalle;
      this.sistema = sistema;
      this.prioridad = prioridad;
      this.observacion = observacion;
  
  
    }
  }


let formDispositivo = document.querySelector('#formDispositivo')
  // genera el numero de incidente para seguimiento
  function idUnico() {
    return parseInt(Math.random() * 9999999999)
  }

  
  
  //Recupera la info del Storage para ser mostrada en seccion Incidentes
  function equipoStorage() {
    return JSON.parse(localStorage.getItem("ticket")) || [];
  
  }


  formDispositivo.addEventListener('submit', (event) => {
    event.preventDefault()
    let equipos = equipoStorage()
    let nombre = document.querySelector("#idNombre").value
    let detalle = document.querySelector("#idDetalle").value
    let sistema = document.querySelector("#idSistema").value
    let prioridad = document.querySelector("#idPrioridad").value
    let observacion = document.querySelector("#idObservacion").value
    const equipo = new Dispositivo(idUnico(), nombre, detalle, sistema, prioridad, observacion)
    equipos.push(equipo)
    formDispositivo.reset()
    localStorage.setItem("ticket", JSON.stringify(equipos));
    Swal.fire({
        title: 'El ticket se ha creado con EXITO!',
        text: 'En la seccion incidente podras verlo',
        icon: 'success',
        confirmButtonText: 'Aceptar'
})

  
  })