
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
  return JSON.parse(localStorage.getItem("nombre")) || []; // si el storage no existe retorno un array vacio
 
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
            <h5 class="card-title">Incidente N° ${indice + 1 }</h5>
                <h3 class="fw-bolder">${dispositivos.nombre}</h3>
                <h3>${dispositivos.detalle}</h3>
                <h3>${dispositivos.sistema}</h3>
                <h3>${dispositivos.prioridad}</h3>    
                <h3>${idUnico()}</h3>
            </div>
       
               
            </div>
        </div>
    </div>
        `;
  });
}



/*
<div class="col mb-5">
<div class="card h-100">
   <!-- Product details-->
    <div class="card-body p-4">
        <div class="text-center">
            <!-- Product name-->
            <h5 class="fw-bolder">${sistemas.nombre}</h5>
            <!-- Product price-->
            <h3>${sistemas.detalle}</h3>
            <p>${sistemas.categoria}</p>
        </div>
    </div>
    <!-- Product actions-->
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center">
            <button onclick=agregarAlCarrito(${sistemas.id}) class="btn btn-outline-dark mt-auto" href="#">Cargar Incidente</button>
        </div>
    </div>
</div>
</div>
;*/




/*

<div class="card" id="Ticket${indice}" style="width: 18rem;">
              <div class="card-body">
                  <h5 class="card-title">Incidente N° ${indice + 1}</h5>
                  <p class="card-text">Nombre: ${dispositivos.nombre}</p>
                  <p class="card-text">Detalle: ${dispositivos.detalle}</p>
                  <p class="card-text">Sistema: ${dispositivos.sistema}</p>
                  <p class="card-text">Prioridad: ${dispositivos.prioridad}</p>
              </div>
          </div>*/