const botonIncidente = document.querySelector('#botonIncidente')
let divIncidente = document.querySelector('#divIncidente')
let idObservacion = document.querySelector("#idObservacion")
const botonAlta = document.querySelector('#alta')
const botonUrgente = document.querySelector("#urgente")
const botonMedia = document.querySelector("#media")
const botonBaja = document.querySelector("#baja")
 //Recupera la info del Storage para ser mostrada en seccion Incidentes
 
 function equipoStorage() {
  return JSON.parse(localStorage.getItem("ticket")) || [];

}

//Muestra en tarjetas la informacion guardada en Storage
function mostrarEquipos(array) {
  
  divIncidente.innerHTML = "";
  array.forEach((elemento) => {
    divIncidente.innerHTML += `
    <div id= "color" class="col mb-5 ${elemento.prioridad}">
    <div class="card h-100 ${elemento.prioridad}">
        <div class="card-body p-4">
            <div class="text-center">
            <h5 class="card-title">Incidente:${elemento.id}</h5>
                <h5>Nombre:${elemento.nombre}</h5>
                <h5>Detalle:${elemento.detalle}</h5>
                <h5>Sistema:${elemento.sistema}</h5>
                <h5 id= "cambioColor" class= "changeColor" >Prioridad:${elemento.prioridad}</h5>
                <p>Observacion de Falla:${elemento.observacion}</p>   
                <div class="d-flex justify-content-around">
                <button  class=""onclick="eliminarIncidente(${elemento.id})">Realizado</button>
                
                 
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
    localStorage.setItem("ticket", JSON.stringify(newIncidentes))
    mostrarEquipos(equipoStorage())
   
  
  }


botonIncidente.addEventListener("click",()=>{
  let equipos= equipoStorage()
  mostrarEquipos(equipos)
  
})

botonAlta.addEventListener("click",()=>{
  let equipos=equipoStorage()
  let alta =equipos.filter(equipo=>equipo.prioridad == "ALTA")
  mostrarEquipos(alta)
})
botonUrgente.addEventListener("click",()=>{
  let equipos=equipoStorage()
  let urgente =equipos.filter(equipo=>equipo.prioridad == "URGENTE")
  mostrarEquipos(urgente)
})
botonMedia.addEventListener("click",()=>{
  let equipos=equipoStorage()
  let media =equipos.filter(equipo=>equipo.prioridad == "MEDIA")
  mostrarEquipos(media)
})
botonBaja.addEventListener("click",()=>{
  let equipos=equipoStorage()
  let baja =equipos.filter(equipo=>equipo.prioridad == "BAJA")
  mostrarEquipos(baja)
})




  












//






