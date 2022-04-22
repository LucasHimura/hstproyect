
let repetirCiclo = true
let dispositivo
let prioridad
let sistema
let incidente
let continuar
let ticket

//ESTA FUNCION GENERA EL NUMERO DE TICKET E IMPRIME EN PANTALLA LA GENERACION, SI SE INGRESAN PALABRAS O NUMERO Y LETRAS SOLICITA UN NUMERO VALIDO 
//A FUTURO ME GUSTARIA QUE LA NUMERACION SEA AUTOMATICA PERO NO ENCONTRE COMO HACERLO AUN 
function numeroTicket (){
    do{
    ticket= parseInt (prompt ("ingrese numero de ticket"))
    if (isNaN(ticket))
    alert ("ingrese un numero valido")
    }while (isNaN(ticket))

return ("su incidente fue registardo con exito con el numero"+" "+ ticket)
}
function prioridadUrgente (){
    return ("se creo el incidente para el"+" " + dispositivo + " "+"en caracter de Prioridad URGENTE")
}

function prioridadAlta (){
    return ("se creo el incidente para el"+" " + dispositivo +" " +"en caracter de Prioridad ALTA" )
}

function prioridadMedia (){
    return ("se creo el incidente para el"+" " + dispositivo + " "+"en caracter de Prioridad MEDIA" )
}

function prioridadBaja (){
    return ("se creo el incidente para el"+" " + dispositivo +" "+ "en caracter de Prioridad BAJA" )
}



alert("BIENVENIDO HIMURA INCIDENT SYSTEM, Vamos a proporcionarle asistencia en los Siguientes sismtemas de Seguridad, CCTV, ALARMA, CONTROL DE ACCESO")





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
            do {
                dispositivo = prompt("por favor a que dispositvo debemos hacer seguimiento? en Nuestra base se encuentran CAMARA1, 2, 3, 4")
                if (dispositivo != "camara1" && dispositivo != "camara2" && dispositivo != "camara3" && dispositivo != "camara4")
                    alert("Su dispositivo no puede ser registrado para este sistema, no lo tenemos en nuestro registro")
            } while (dispositivo != "camara1" && dispositivo != "camara2" && dispositivo != "camara3" && dispositivo != "camara4")



            break
        case "alarma":
            do {
                dispositivo = prompt("por favor a que dispositvo debemos hacer seguimiento? en nuestro sistema se encuentran SENSOR1, 2, 3, 4")
                if (dispositivo != "sensor1" && dispositivo != "sensor2" && dispositivo != "sensor3" && dispositivo != "sensor4")
                    alert("Su dispositivo no puede ser registrado para este sistema, no lo tenemos en nuestro registro")

            } while (dispositivo != "sensor1" && dispositivo != "sensor2" && dispositivo != "sensor3" && dispositivo != "sensor4")
            break
        case "control de acceso":
            do {
                dispositivo = prompt("por favor a que dispositvo debemos hacer seguimiento?en nuestro sistema se encuentran PUERTA1, 2, 3, 4")
                if (dispositivo != "puerta1" && dispositivo != "puerta2" && dispositivo != "puerta3" && dispositivo != "puerta4")
                    alert("Su dispositivo no puede ser registrado para este sistema, no lo tenemos en nuestro registro")

            } while (dispositivo != "puerta1" && dispositivo != "puerta2" && dispositivo != "puerta3" && dispositivo != "puerta4")
            break


    }

    do {
        prioridad = prompt(" por favor ingrese la prioridad del incidente URGENTE, ALTA, MEDIA, BAJA").toLowerCase()
        if (prioridad != "urgente" && prioridad != "alta" && prioridad != "media" && prioridad != "baja")

        alert("Su incidente ha sido creado con exito" + " "+ dispositivo + " " + "sera revisado a la brevedad por el equipo tecnico")   


    } while (prioridad != "urgente" && prioridad != "alta" && prioridad != "media" && prioridad != "baja")
//LO HABIA PROBADO CON WRITE PARA QUE LO MUESTRE EN HTML PERO SI LO HAGO POR CONSOLA SE IMPRIME CADA VEZ QUE EL CICLO TERMINA
    switch (prioridad) {
        case "urgente":
            console.log (prioridadUrgente())
            break
        case "alta":
            console.log (prioridadAlta())
            break
        case "media":
            console.log (prioridadMedia())
            break
        case "baja":
            console.log (prioridadBaja())
    }

// ACA DEBE MOSTRAR LA CARGA DEL INCIDENTE Y EL NUMERO DE TICKET EN CASO DE QUE CONTINUE CON UN SI EL CICLO 
    continuar = prompt("desea cargar un nuevo incidente, SI, NO ").toLowerCase()
    if (continuar == "no") {
        console.log (numeroTicket())
        repetirCiclo = false
    }if (continuar == "si"){
        console.log (numeroTicket()) 
        
        

    }

}














