
// Aun no decisfre como hacer para que no se cambie el numero aleatoriamente, entiendo que estoy usando un ramdom
function idUnico()  {
  return parseInt(Math.random() * 9999999999)
}





class Dispositivo {
  constructor(nombre, detalle, sistema, prioridad, numero) {
    this.id = idUnico()
    this.nombre = nombre;
    this.detalle = detalle;
    this.sistema = sistema;
    this.prioridad = prioridad;
    this.numero = numero;
    
   
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
  



  


  const equipo = new Dispositivo(nombre, detalle, sistema, prioridad)
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
  equipos.forEach((dispositivos,indice) => {
    divIncidente.innerHTML += `
    <div id= "color" class="col mb-5">
    <div class="card h-100">
        <div class="card-body p-4">
            <div class="text-center">
            <h5 class="card-title">Incidente:${indice+ 1000 }</h5>
                <h5>Nombre:${dispositivos.nombre}</h3>
                <h5>Detalle:${dispositivos.detalle}</h3>
                <h5>Sistema:${dispositivos.sistema}</h3>
                <h5>Prioridad:${dispositivos.prioridad}</h3>    
                
            </div>
       
               
            </div>
        </div>
    </div>
        `;
  });
}






/*<h3>Nro. Ticket: ${idUnico()}</h3>*/