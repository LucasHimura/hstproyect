// doble barra para comentario

/*
comentario multilinea 
*/

/*
var nombre = prompt ("ingrese su nombre")
var apellido= prompt ("ingrese su nombre")
let edad = alert ("tu edad es de 39")
let number = parseFloat(prompt("ingrese un numero"))
let number2=Number(prompt("ingrese numero"))
let number3=parseInt(prompt("ingrese numero"))

console.log ("tu nombre es",nombre , apellido , "y tu edad es:",number3)
console.log (number + number2)
*/

/* tipos de datos en JS 
number, string, boolean, null, undefined 
*/

//CONDICIONALES- CONTROL DE FLUJOS  CLASE 2 



/*let  numero  = Number(prompt("ingrese un numero")) 

if (numero == 5) {
    console.log ("verdadero")
}
let desayuno = ""
if (desayuno == "cafe") {
    console.log ("voy a desayunar cafe con leche ")
} else if (desayuno == "te")
{
    console.log ("no voy a desayunar cafe con leche desayuno te con leche ")
} else if (desayuno == "mate cocido"){
    console.log ("voy a desayunar mate cocido con leche ")
} else {
    console.log ("no se que estas desayunando")
}*/

// OPERADORES LOGICOS 

/*let precio = parseFloat (prompt ("ingrese un numero"))

if (precio >= 1000 ) {
    console.log ("esto es muy caro")
}else {
    console.log ("esto es muy barato")
}*/

// COMPARAR SIEMPRE POR === ESTRICTAMENTE IGUAL DADO QUE COMPARA POR TIPO "CADENA" O CADENA
// SI USAMOS "5" O 5 VA A COMPARAR ESTRICTAMENTE SI ES CADENA O NUMERO 

/* TABLA DE VERDAD 
==   !=           ===     !==
V    F             V       F
F    V             F       V

*/

// CICLO FOR 

/*for (let i = 1 ; i <1001; i++){ 
    console.log (i)

}*/
//muestra todos los pares de 0 a 10 
/*for (let  i = 0 ;i < 10; i++){
    if (i % 2 === 0) {
        console.log (i)
    }
}

let numero = parseInt (prompt ("ingrese un numero"))
for (let  i = 0 ;i <= numero; i++){
    if (i % 2 === 0) {
        console.log (i)

    }
     if (i === 11) {
         break
     }

    }


let numero = parseInt (prompt ("ingrese un numero"))
for (let  i = 0 ;i <= numero; i++){
    if (i === 10) {
        continue
    }
    if (i % 2 === 0) {
        console.log (i)

    }
  

    }

let continua = true
let numero
while (continua){
     numero = parseFloat (prompt ("ingrese un numero"))

    let condicion = prompt ("desea continuar?").toLowerCase ()


    if (condicion == "no"){

        continua = false
    }
        

}

console.log (numero)


let repetir = true 
let numero1
let numero2
//do 
{
     numero1= parseFloat ( prompt ("ingrese un numero"))
     numero2= parseFloat (prompt ("ingrese un numero"))
     console.log (numero1)
     console.log (numero2)
}// while (repetir)

console.log (numero1 + numero2)
*/









//DEFINIR FUNCIONES 

/*function saludar() {
    console.log("hola,estoy saludando")

}
saludar ()
function saludar1() {
    console.log ("adios, me estoy despidiendo")
}

saludar1 ()


const IVA = 1.21
let monto
function calcularIVA(monto){
    
    monto = parseFloat (prompt("ingrese el valor del producto"))
    console.log (monto * IVA)


}

calcularIVA (monto)


let numero1
let numero2
let numero3

do{
    numero1 = parseFloat (prompt("ingrese un numero"))
    numero1 = parseFloat (prompt("ingrese un numero"))
    numero1 = parseFloat (prompt("ingrese un numero"))
    
}while (isNaN (numero1)) */








/*
    //INICIO //FIN      //Como llegar de INICIO A FIN
    for(let i = 1; i < 11; i++) { // i = i - 1
    console.log(i)
}
let numero = parseInt(prompt("Ingrese un numero para mostrar los pares hasta ese numero")) 
for(let i = 0; i <= numero; i++) {
    
    if(i % 2 === 0) {
        continue
    }
    console.log(i)
    
}
let continua = true
let numero
while(continua) { //continua == true
    numero = parseFloat(prompt("Ingrese un numero"))
    let condicion = prompt("Desea continuar?").toLowerCase() //NO nO No no
    if(condicion == "no") {
        continua = false
    }
}
console.log(numero)


let numero1 
let numero2
let operacion
do {
    numero1 = parseFloat(prompt("Ingrese un numero")) //"5" "hola" NaN = not a number
    numero2 = parseFloat(prompt("Ingrese un numero"))
    operacion = prompt("Ingrese una operacion (+, -, /,*)")

    if(isNaN(numero1) || isNaN(numero2)) {
        document.write("Por favor ingresame numeros validos!.")
    }
} while(isNaN(numero1) || isNaN(numero2)) //UNICA condicion de verdad para que se termine es que ambas cond. sean falsas

switch(operacion) {
    case "+":
        document.write(numero1 + numero2)
        break
    case "-" :
        document.write(numero1 - numero2)
        break
    case "/" :
        document.write(numero1 / numero2)
        break
    case "*" :
        document.write(numero1 * numero2)
        break
    default:
        document.write("Operacion no valida")
        break
}*/
/*let continua = true
let numero
while (continua){
     numero = parseFloat (prompt ("ingrese un numero"))

    let condicion = prompt ("desea continuar?").toLowerCase ()


    if (condicion == "no"){

        continua = false
    }
        



//Realizar un programa que cuente la cantidad de divisores de un numero n

let numero =parseInt(prompt("Ingrese un numero natural"))
let i = 1 
let cont= 0 
while (numero <=0){
    numero=parseInt(prompt("Ingrese un numero natural"))
    

}while (i<= numero){
    if (numero % i == 0 )
    cont=cont + 1
    i = i +1
    console.log (numero, "tiene", cont, "divisores")
}
*/


//CLASE 5 Objetos 

/*let cliente1 = {
    nombre: "Lucas",
    apellido:"Quipildor",
    edad: 39,
    domicilio: "Gelly y obes 1234",
    activo: true

}

console.log (cliente1)
console.log (cliente1.apellido)
console.log (cliente1["domicilio"])

const cliente2= {
    nombre: "Jesica",
    apellido:"Alvarez",
    edad: 39,
    domicilio: "Gelly y obes 1234",
    activo: true

}


cliente2.edad = 44
console.log (cliente2.edad)
console.log (cliente2)

let i = 1
for (let propiedad in cliente2){
    if (propiedad == "apellido"|| propiedad=="nombre") 
    console.log(i)
    console.log (propiedad)
    console.log (cliente2 [propiedad])
    i++
}*/

/*
function Cliente (nombreParam, apellidoParam, edadParam,activoParam){
    this.nombre = nombreParam
    this.apellido= apellidoParam
    this.edad = edadParam
    this.activo = activoParam

}


const cliente1 = new Cliente (//("Lucas","quipildor",45, true)
prompt ("ingrese un nombre"),
prompt ("ingrese un apellido"),
prompt ("ingrese un edad"),
prompt ("ingrese un estadolucas"),

)
console.log (cliente1)

//DE ESTE MODO SE PUEDDE CARGAR DATOS A LOS PARAMETROS

//ARRAY
let array = []

let array2 = [true, 5, "hola",false,"chau"]

console.log (array2)

console.log (array2[2])*/


console.log (document.getElementById("parrafo1"))
console.log (document.getElementsByClassName("idDivParrafos"))