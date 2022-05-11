const sistemas = [
    {
        id: 1,
        nombre: "CCTV",
        dispositivos: [
            {
                id: 1,
                nombre: "cam1"
            },
            {
                id: 2,
                nombre: "cam2"
            },
            {
                id: 3,
                nombre: "cam3"
            },
            {
                id: 4,
                nombre: "cam4"
            }
        ]
    },
    {
        id: 2,
        nombre: "ALARMA",
        dispositivos: [
            {
                id: 1,
                nombre: "sen1"
            },
            {
                id: 2,
                nombre: "sen2"
            },
            {
                id: 3,
                nombre: "sen3"
            },
            {
                id: 4,
                nombre: "sen4"
            }
        ]
    },
    {
        id: 3,
        nombre: "CONTROL DE ACCESO",
        dispositivos: [
            {
                id: 1,
                nombre: "door1"
            },
            {
                id: 2,
                nombre: "door2"
            },
            {
                id: 3,
                nombre: "door3"
            },
            {
                id: 4,
                nombre: "door4"
            }
        ]
    }
]

const prioridades = ["urgente", "alta", "media", "baja"]
let incidente
let dispositivoSlececcionado
let arrayTickets=[]

function mostrarDispositivos(sistemaId) {
    
    const sistema = sistemas.find(e => e.id === sistemaId)
    console.log("Tipo de dispositivos")
    sistema.dispositivos.forEach(e => {
        console.log(`${e.nombre}`)
    })
}
function numeroTicket() {
    ticket = Math.floor((Math.random() * 99999999999) + 1);
    return (ticket)
}

function crearTicket(sistemaId, dispositivoId, prioridad) {
    let sistemaSleccionado=sistemas.find(e=>e.id===sistemaId)
    let dispositivoSlececcionado=sistemaSleccionado.dispositivos.find(e=>e.id===dispositivoId)
    console.log(dispositivoSlececcionado)
    const objetoTicket={
        id:numeroTicket(),
        sistema:sistemaSleccionado.nombre,
        dispositivo:dispositivoSlececcionado.nombre,
        prioridad:prioridad
    }
    arrayTickets.push(objetoTicket)
}

console.log("Por favor elija unos de los siguientes sistemas de Seguridad" + " " + sistemas)
incidente = parseInt(prompt("Por favor que sistema de Seguridad requiere Atencion?"))
mostrarDispositivos(incidente)
dispositivoSlececcionado = parseInt(prompt("Por favor elija unos de los siguientes dispositivos"))

console.log("Por favor elija una de los siguientes prioridades" + " " + prioridades)
prioridad = prompt(" Por favor ingrese la prioridad del incidente").toLowerCase()

crearTicket(incidente, dispositivoSlececcionado, prioridad)
console.log(arrayTickets)
document.write(
    `detalles del incidente:
        Sistema:${arrayTickets.sistema}
        Dispositivo:${arrayTickets.dispositivo}
        Ticket:${arrayTickets.id}
        Prioridad:${arrayTickets.prioridad}`)