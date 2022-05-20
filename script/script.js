
// Aun no decisfre como hacer para que no se cambie el numero aleatoriamente, entiendo que estoy usando un ramdom
function idUnico()  {
  return parseInt(Math.random() * 9999999999)
}





class Dispositivo {
  constructor(id, nombre, detalle, sistema, prioridad, numero, observacion) {
    this.id = id
    this.nombre = nombre;
    this.detalle = detalle;
    this.sistema = sistema;
    this.prioridad = prioridad;
    this.numero = numero;
    this.observacion= observacion;
    
   
  }
}


let equipos = []
let formDispositivo = document.querySelector('#formDispositivo')
let botonIncidente = document.querySelector('#botonIncidente')
let divIncidente = document.querySelector('#divIncidente')
let numTicket = document.querySelector("#idTicket")



formDispositivo.addEventListener('submit', (event) => {
  event.preventDefault()
  let nombre = document.querySelector("#idNombre").value
  let detalle = document.querySelector("#idDetalle").value
  let sistema = document.querySelector("#idSistema").value
  let prioridad = document.querySelector("#idPrioridad").value
  let observacion = document.querySelector("#idObservacion").value
  const equipo = new Dispositivo(idUnico(), nombre, detalle, sistema, prioridad,observacion)
  equipos.push(equipo)
  console.log(equipos)
  formDispositivo.reset()
  localStorage.setItem("nombre", JSON.stringify(equipos));
})


//Recupera la info del Storage para ser mostrada en pagina Incidentes
function equipoStorage() {
  return JSON.parse(localStorage.getItem("nombre")) || []; 
 
}

//Muestra en tarjetas la informacion guardada en Storage
function mostrarEquipos() {
  const equipos = equipoStorage();
  divIncidente.innerHTML = "";
  equipos.forEach((dispositivos, indice) => {
    divIncidente.innerHTML += `
    <div id= "color" class="col mb-5">
    <div class="card h-100">
        <div class="card-body p-4">
            <div class="text-center">
            <h5 class="card-title">Incidente:${dispositivos.id}</h5>
                <h5>Nombre:${dispositivos.nombre}</h5>
                <h5>Detalle:${dispositivos.detalle}</h5>
                <h5>Sistema:${dispositivos.sistema}</h5>
                <h5 id= "cambioColor" class= "changeColor" >Prioridad:${dispositivos.prioridad}</h5>
                <p>Observacion de Falla:${dispositivos.observacion}</p>   
                <div class="d-flex justify-content-around">
                <button onclick="eliminarIncidente(${dispositivos.id})" class="">Realizado</button>
                
                 
            </div>
            </div>
       
               
            </div>
        </div>
    </div>
        `;
  });
}

/*
function incidenteRealizado(id) {

  localStorage.removeItem("nombre");
  mostrarEquipos();
}
*/

function eliminarIncidente(id) {
  let incidentes = equipoStorage()
  let newIncidentes=incidentes.filter(e=>e.id !=id)
  localStorage.setItem("nombre",JSON.stringify(newIncidentes)) /*** */
  mostrarEquipos();
}






/*<h3>Nro. Ticket: ${idUnico()}</h3>*/