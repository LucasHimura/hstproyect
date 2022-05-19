
let opcion = document.getElementById("formCctv", "fomrAlarma", "formCa")
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





const dispCCTV = [{
    id: 1,
    nombre: "Cam1",
    detalle: "Camara de Comedor",
    categoria: "CCTV",

  },


  {
    id: 2,
    nombre: "Cam4",
    detalle: "Camara de Acceso",
    categoria: "CCTV",

  },
  {
    id: 3,
    nombre: "Cam2",
    detalle: "Camara de despacho",
    categoria: "CCTV",

  },
  {
    id: 4,
    nombre: "Cam3",
    detalle: "Camara de Oficinas",
    categoria: "CCTV",

  },
]




/*let repetirCiclo = true
let dispositivo
let prioridad
let sistema
let incidente
let continuar
let ticket

//ESTA FUNCION GENERA EL NUMERO DE TICKET DE MANERA AUTOMATICA 
function numeroTicket() {


     ticket = Math.floor((Math.random() * 99999999999) + 1);

    return ("su incidente fue registardo con exito con el numero de Ticket" + " " + ticket)
}

function prioridadUrgente() {
    return ("se creo el incidente para el" + " " + dispositivo + " " + "en caracter de Prioridad URGENTE")
}

function prioridadAlta() {
    return ("se creo el incidente para el" + " " + dispositivo + " " + "en caracter de Prioridad ALTA")
}

function prioridadMedia() {
    return ("se creo el incidente para el" + " " + dispositivo + " " + "en caracter de Prioridad MEDIA")
}

function prioridadBaja() {
    return ("se creo el incidente para el" + " " + dispositivo + " " + "en caracter de Prioridad BAJA")
}



//alert("BIENVENIDO HIMURA INCIDENT SYSTEM, Vamos a proporcionarle asistencia en los Siguientes sistemas de Seguridad")

const sistemas = ["CCTV","ALARMA","CONTROL DE ACCESO"]

console.log ("Por favor elija unos de los siguientes sistemas de Seguridad"+ " "+ sistemas)



while (repetirCiclo) {

    do {
        incidente = prompt("Por favor que sistema de Seguridad requiere Atencion?").toLowerCase()

        if (incidente != "cctv" && incidente != "alarma" && incidente != "control de acceso") {
          //  alert("Su Incidente no puede ser registrado para este sistema, no lo tenemos en nuestro registro, debe elegir CCTV, ALARMA, CONTROL DE ACCESO")
        }

    } while (incidente != "cctv" && incidente != "alarma" && incidente != "control de acceso")
    //EN VEZ DE UTILIZAR VARIOS IF ME PARECIO MAS PRACTICO EL USO DE SWITCH
    switch (incidente) {
        case "cctv":
          const  dispCCTV = [
                {
                  id: 1,
                  nombre: "Cam1",
                  detalle: "Camara de Comedor",
                  categoria: "CCTV",
                  
                },
                  
                
                {
                  id: 2,
                  nombre: "Cam4",
                  detalle: "Camara de Acceso",
                  categoria: "CCTV",
                 
                },
                {
                  id: 3,
                  nombre: "Cam2",
                  detalle: "Camara de despacho",
                  categoria: "CCTV",
                  
                },
                {
                  id: 4,
                  nombre: "Cam3",
                  detalle: "Camara de Oficinas",
                  categoria: "CCTV",
                 
                },
            ]




            
        

           

           

            const nombreCCTV= dispCCTV.map ((e) => e.nombre)
                      
                
            
            
            console.log ("Por favor elija unos de los siguientes dispositivos"+ " "+nombreCCTV)
            nombreCCTV.push ( prompt ("Si su dispositivo no se encuentra en la lista puede agregarlo aqui, de lo contrario cancelar para continuar"))
            console.log ("Por favor elija unos de los siguientes dispositivos"+ " "+nombreCCTV)
            
            
            do {              
                            
                dispositivo = prompt("Que dispositivo presenta falla?")
                if (dispositivo != nombreCCTV [0])
                    alert("Su dispositivo no puede ser registrado para este sistema, no lo tenemos en nuestro registro")
            } while(dispositivo != nombreCCTV [0])



            break
        case "alarma":
            const dispAlarma = [       
                {
                  id: 5,
                  nombre: "Sen1",
                  detalle: "Sensor Oficina 1",
                  categoria: "Intrusion",
                 
                  
                },
                {
                  id: 6,
                  nombre: "Sen2",
                  detalle: "Sensor de Acceso",
                  categoria: "Intrusion",
                  
                },
                {
                  id: 7,
                  nombre: "Sen3",
                  detalle: "Sensor de despacho",
                  categoria: "Intrusion",
                
                },
                {
                  id: 8, 
                  nombre: "Sen4",
                  detalle: "Sensor de Oficinas",
                  categoria: "Intrusion",
       
              
                },
            ]
            const nombreAlarma= dispAlarma.map ((e) => e.nombre)          
                        
            console.log ("Por favor elija unos de los siguientes dispositivos"+ " "+nombreAlarma)
            nombreAlarma.push ( prompt ("Si su dispositivo no se encuentra en la lista puede agregarlo aqui, de lo contrario cancelar para continuar"))
            console.log ("Por favor elija unos de los siguientes dispositivos"+ " "+nombreAlarma)
           
            do {              
                            
                dispositivo = prompt("Que dispositivo presenta falla?")
                if (dispositivo != nombreAlarma [0])
                    alert("Su dispositivo no puede ser registrado para este sistema, no lo tenemos en nuestro registro")
            } while(dispositivo != nombreAlarma [0])
            break
        case "control de acceso":
            const dispCA = [{ id: 9,nombre: "Door1",detalle: "Acceso Oficina 1",categoria: "Acceso",},
            {id: 10,nombre: "Door2",detalle: "Acceso porterias",categoria: "Acceso",  },
                { id: 11, nombre: "Door3",detalle: "Acceso de despacho", categoria: "Acceso", },
                { id: 12, nombre: "Door4",
                  detalle: "Acceso de Oficinas",
                  categoria: "Acceso",
                 
                },
              
              
            ]
            const nombreCA= dispCA.map ((e) => e.nombre)          
                        
            console.log ("Por favor elija unos de los siguientes dispositivos"+ " "+nombreCA)
            nombreCA.push ( prompt ("Si su dispositivo no se encuentra en la lista puede agregarlo aqui, de lo contrario cancelar para continuar"))
            console.log ("Por favor elija unos de los siguientes dispositivos"+ " "+nombreCA)
           
            do {              
                            
                dispositivo = prompt("Que dispositivo presenta falla?")
                if (dispositivo != nombreCA [0])
                    alert("Su dispositivo no puede ser registrado para este sistema, no lo tenemos en nuestro registro")
            } while(dispositivo != nombreCA[0])
            break
//aun no encontre la manera de que al hacer un PUSH se sume a las condiciones por eso agregue una condicion mas para que quede a modo de simulador pero si se agregan dos 
//o mas dispositivos no los va a sumar a la condicion. sigo trabajando en ello. 

    }

    
    let botonUrg = document.getElementById ("botonUrg")

    botonUrg.addEventListener ("click", () => {
      console.log(prioridadUrgente())
    })

    let botonAlta = document.getElementById ("botonAlta")

    botonAlta.addEventListener ("click", () => {
      console.log(prioridadAlta())
    })
    let botonMedia = document.getElementById ("botonMedia")

    botonMedia.addEventListener ("click", () => {
      console.log(prioridadUrgente())
    })
    let botonBaja = document.getElementById ("botonBaja")

    botonBaja.addEventListener ("click", () => {
      console.log(prioridadUrgente())
    })






    
    
    /*const prioridades = ["urgente","alta","media","baja"]
    console.log ("Por favor elija una de los siguientes prioridades"+ " "+prioridades)

    do {
        prioridad = prompt(" Por favor ingrese la prioridad del incidente").toLowerCase()
        if (prioridad != prioridades [0] && prioridad !=prioridades [1]  && prioridad !=prioridades [2] && prioridad !=prioridades [3])

            alert("Su incidente ha sido creado con exito" + " " + dispositivo + " " + "sera revisado a la brevedad por el equipo tecnico")


    } while (prioridad != prioridades [0] && prioridad !=prioridades [1]  && prioridad !=prioridades [2] && prioridad !=prioridades [3])
    //IMPRIME LA FUNCION Y GENERA POR PANTALLA UN MENSAJE CON LA PRIORIDAD ELEGIDA
    switch (prioridad) {
        case "urgente":
            console.log(prioridadUrgente())
            break
        case "alta":
            console.log(prioridadAlta())
            break
        case "media":
            console.log(prioridadMedia())
            break
        case "baja":
            console.log(prioridadBaja())
    }

    // ACA DEBE MOSTRAR LA CARGA DEL INCIDENTE Y EL NUMERO DE TICKET EN CASO DE QUE CONTINUE CON UN SI EL CICLO 
    continuar = prompt("desea cargar un nuevo incidente, SI, NO ").toLowerCase()
    if (continuar == "no") {
        console.log(numeroTicket())
        repetirCiclo = false
    }
    if (continuar == "si") {
        console.log(numeroTicket())
        console.log ("Por favor elija unos de los siguientes sistemas de Seguridad"+ " "+ sistemas)



    }

}

inputText= document.getElementById ("inputText")
inputText.addEventListener("input",function(){
  let consulta = inputText.value
console.log (consulta)
console.log (dispAlarma.filter(dispAlarma => dispAlarma.nombre.includes (consulta)),dispCA.filter(dispCA.nombre.includes(consulta)),dispCCTV.filter(dispCCTV.nombre.includes(consulta)))

})
}
*/