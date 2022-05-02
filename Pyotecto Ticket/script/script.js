let repetirCiclo = true
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



alert("BIENVENIDO HIMURA INCIDENT SYSTEM, Vamos a proporcionarle asistencia en los Siguientes sistemas de Seguridad")

const sistemas = ["CCTV","ALARMA","CONTROL DE ACCESO"]

console.log ("Por favor elija unos de los siguientes sistemas de Seguridad"+ " "+ sistemas)



while (repetirCiclo) {

    do {
        incidente = prompt("Por favor que sistema de Seguridad requiere Atencion?").toLowerCase()

        if (incidente != "cctv" && incidente != "alarma" && incidente != "control de acceso") {
            alert("Su Incidente no puede ser registrado para este sistema, no lo tenemos en nuestro registro, debe elegir CCTV, ALARMA, CONTROL DE ACCESO")
        }

    } while (incidente != "cctv" && incidente != "alarma" && incidente != "control de acceso")
    //EN VEZ DE UTILIZAR VARIOS IF ME PARECIO MAS PRACTICO EL USO DE SWITCH
    switch (incidente) {
        case "cctv":
            const dispCCTV =["cam1","cam2","cam3","cam4"]
            console.log ("Por favor elija unos de los siguientes dispositivos"+ " "+dispCCTV)
            dispCCTV.push (prompt ("Si su dispositivo no se encuentra en la lista puede agregarlo aqui, de lo contrario cancelar para continuar"))
            console.log ("Por favor elija unos de los siguientes dispositivos"+ " "+dispCCTV)

            do {
                dispositivo = prompt("Que dispositivo presenta falla?").toLowerCase()
                if (dispositivo != dispCCTV [0] && dispositivo != dispCCTV [1] && dispositivo != dispCCTV [2] && dispositivo !=dispCCTV [3]&& dispositivo !=dispCCTV [4])
                    alert("Su dispositivo no puede ser registrado para este sistema, no lo tenemos en nuestro registro")
            } while (dispositivo != dispCCTV [0] && dispositivo != dispCCTV [1] && dispositivo != dispCCTV [2] && dispositivo !=dispCCTV [3]&& dispositivo !=dispCCTV [4])



            break
        case "alarma":
            const dispALARM =["sen1","sen2","sen3","sen4"]
            console.log ("Por favor elija unos de los siguientes dispositivos"+ " "+dispALARM)

            dispALARM.push (prompt ("Si su dispositivo no se encuentra en la lista puede agregarlo aqui, de lo contrario cancelar para continuar"))
            console.log ("Por favor elija unos de los siguientes dispositivos"+ " "+dispALARM)


            do {
                dispositivo = prompt("Que dispositivo presenta falla?").toLowerCase()
                if (dispositivo != dispALARM [0] && dispositivo != dispALARM [1] && dispositivo != dispALARM [2] && dispositivo !=dispALARM [3]&& dispositivo !=dispALARM [4])
                    alert("Su dispositivo no puede ser registrado para este sistema, no lo tenemos en nuestro registro")

            } while (dispositivo != dispALARM [0] && dispositivo != dispALARM [1] && dispositivo != dispALARM [2] && dispositivo !=dispALARM [3]&& dispositivo !=dispALARM [4])
            break
        case "control de acceso":
            const dispCA =["door1","door2","door3","door4"]
            console.log ("Por favor elija unos de los siguientes dispositivos"+ " "+dispCA)
            dispCA.push (prompt ("Si su dispositivo no se encuentra en la lista puede agregarlo aqui, de lo contrario cancelar para continuar"))
            console.log ("Por favor elija unos de los siguientes dispositivos"+ " "+dispCA)
            do {
                dispositivo =prompt("Que dispositivo presenta falla?").toLowerCase()
                if (dispositivo != dispCA [0] && dispositivo != dispCA [1] && dispositivo != dispCA [2] && dispositivo !=dispCA [3]&& dispositivo !=dispCA [4])
                    alert("Su dispositivo no puede ser registrado para este sistema, no lo tenemos en nuestro registro")

            } while (dispositivo != dispCA [0] && dispositivo != dispCA [1] && dispositivo != dispCA [2] && dispositivo !=dispCA [3]&& dispositivo !=dispCA [4])
            break
//aun no encontre la manera de que al hacer un PUSH se sume a las condiciones por eso agregue una condicion mas para que quede a modo de simulador pero si se agregan dos 
//o mas dispositivos no los va a sumar a la condicion. sigo trabajando en ello. 

    }

    const prioridades = ["urgente","alta","media","baja"]
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