let numero = parseInt(prompt("Ingrese un numero natural"))
let i = 1
let cont = 0
while (numero <= 0) {
    numero = parseInt(prompt("Ingrese un numero natural"))
   


}
while (i <= numero) {
    if (numero % i == 0)
        cont = cont + 1
    i = i + 1
    console.log(numero, "tiene", cont, "divisores")
}



