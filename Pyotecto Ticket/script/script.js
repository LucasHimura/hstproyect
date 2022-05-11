/*let opcion = document.getElementById("formCctv", "fomrAlarma", "formCa")
formCctv.innerHTML += "<option> Camara 1 </option>"
formCctv.innerHTML += "<option> Camara 2 </option>"
formCctv.innerHTML += "<option> Camara 3 </option>"
formCctv.innerHTML += "<option> Camara 4 </option>"

formAlarma.innerHTML += "<option> Sensor 1  </option>"
formAlarma.innerHTML += "<option> Sensor 2 </option>"
formAlarma.innerHTML += "<option> Sensor 3 </option>"
formAlarma.innerHTML += "<option> Sensor 4 </option>"

formCa.innerHTML += "<option> Door 1 </option>"
formCa.innerHTML += "<option> Door 2 </option>"
formCa.innerHTML += "<option> Door 3 </option>"
formCa.innerHTML += "<option> Door 4 </option>"
*/

function idUnico()  {
  return parseInt(Math.random() * 1000)
}
class Dispositivo {
  constructor(nombre, detalle, sistema, prioridad) {
      this.id = idUnico()
      this.nombre = nombre;
      this.detalle = detalle;
      this.sistema = sistema;
      this.prioridad = prioridad;
  }
}


let equipos = []
let formDispositivo = document.querySelector('#formDispositivo')
let botonIncidente = document.querySelector('#botonIncidente')
let divIncidente = document.querySelector('#divIncidente')

formDispositivo.addEventListener('submit', (event) => {
  event.preventDefault()
  let nombre = document.querySelector("#idNombre").value 
  let detalle = document.querySelector("#idDetalle").value 
  let sistema = document.querySelector("#idSistema").value 
  let prioridad = document.querySelector("#idPrioridad").value

 const equipo = new Dispositivo (nombre, detalle, sistema, prioridad)
 equipos.push(equipo)
 console.log(equipos)
 formDispositivo.reset()
})

botonIncidente.addEventListener('click', () => {
  equipos.forEach((dispositivos, indice) => {
      divIncidente.innerHTML += `
          <div class="card" id="persona${indice}" style="width: 18rem;">
              <div class="card-body">
                  <h5 class="card-title">Cliente N° ${indice + 1}</h5>
                  <p class="card-text">Nombre: ${dispositivos.nombre}</p>
                  <p class="card-text">Apellido: ${dispositivos.detalle}</p>
                  <p class="card-text">Edad: ${dispositivos.sistema}</p>
                  <p class="card-text">Sueldo: ${dispositivos.prioridad}</p>
              </div>
          </div>
      `
  })
}) 






