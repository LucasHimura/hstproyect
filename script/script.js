// genera el numero de incidente para seguimiento
function idUnico() {
  return parseInt(Math.random() * 9999999999)
}




//Creacion del objeto Dispositivo luego se guarda en un array llamado Equipos 
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


let equipos = []
let formDispositivo = document.querySelector('#formDispositivo')
let botonIncidente = document.querySelector('#botonIncidente')
let divIncidente = document.querySelector('#divIncidente')
let idObservacion = document.querySelector("#idObservacion")






formDispositivo.addEventListener('submit', (event) => {
  event.preventDefault()
  let nombre = document.querySelector("#idNombre").value
  let detalle = document.querySelector("#idDetalle").value
  let sistema = document.querySelector("#idSistema").value
  let prioridad = document.querySelector("#idPrioridad").value
  let observacion = document.querySelector("#idObservacion").value
  const equipo = new Dispositivo(idUnico(), nombre, detalle, sistema, prioridad, observacion)
  equipos.push(equipo)
  //console.log(equipos)
  formDispositivo.reset()
  localStorage.setItem("nombre", JSON.stringify(equipos));

})


//Recupera la info del Storage para ser mostrada en seccion Incidentes
function equipoStorage() {
  return JSON.parse(localStorage.getItem("nombre")) || [];

}

//Muestra en tarjetas la informacion guardada en Storage
function mostrarEquipos() {
  const equipos = equipoStorage();
  divIncidente.innerHTML = "";
  equipos.forEach((elemento) => {
    divIncidente.innerHTML += `
    <div id= "color" class="col mb-5">
    <div class="card h-100">
        <div class="card-body p-4">
            <div class="text-center">
            <h5 class="card-title">Incidente:${elemento.id}</h5>
                <h5>Nombre:${elemento.nombre}</h5>
                <h5>Detalle:${elemento.detalle}</h5>
                <h5>Sistema:${elemento.sistema}</h5>
                <h5 id= "cambioColor" class= "changeColor" >Prioridad:${elemento.prioridad}</h5>
                <p>Observacion de Falla:${elemento.observacion}</p>   
                <div class="d-flex justify-content-around">
                <button onclick="eliminarIncidente(${elemento.id})" class="">Realizado</button>
                
                 
            </div>
            </div>
       
               
            </div>
        </div>
    </div>
    
        `;
  });
}

//ELimina el incidente individual una vez que se aprieta el boton realizado
function eliminarIncidente(id) {
  let incidentes = equipoStorage()
  let newIncidentes = incidentes.filter(e => e.id != id)
  localStorage.setItem("nombre", JSON.stringify(newIncidentes))
  mostrarEquipos();

}
/*//Filtra la incidencia por prioridad en este caso Urgente 
function buscarPrioridad() {
  let incidentes = equipoStorage()
  let newIncidentes=incidentes.filter(e=>e.prioridad == "URGENTE")
  localStorage.setItem("urgentes",JSON.stringify(newIncidentes)) 
  mostrarEquipos();*/


function buscarPrioridad() {
  let incidentes = equipoStorage()
  let newUrgencia = incidentes.filter(e => e.prioridad == "URGENTE")
  localStorage.setItem("urgentes",JSON.stringify(newUrgencia))
  divIncidente.innerHTML = "";
  newUrgencia.forEach((elemento) => {
    divIncidente.innerHTML += `
      <div id= "color" class="col mb-5">
      <div class="card h-100">
          <div class="card-body p-4">
              <div class="text-center">
              <h5 class="card-title">Incidente:${elemento.id}</h5>
                  <h5>Nombre:${elemento.nombre}</h5>
                  <h5>Detalle:${elemento.detalle}</h5>
                  <h5>Sistema:${elemento.sistema}</h5>
                  <h5 id= "cambioColor" class= "changeColor" >Prioridad:${elemento.prioridad}</h5>
                  <p>Observacion de Falla:${elemento.observacion}</p>   
                  <div class="d-flex justify-content-around">
                  <button onclick="eliminarIncidente(${elemento.id})" class="">Realizado</button>
                </div>
            </div>
       </div>
      </div>
      `;
  });
  
}



















/*<h3>Nro. Ticket: ${idUnico()}</h3>*/