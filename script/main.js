const select = document.getElementById("idNombre")



//toma el listado de dispositivos desde api.json
let baseDispositivo 
async function crearSelect ()  {
let response = await fetch (`../script/api.json`)
let array = await response.json()
baseDispositivo= array
console.log(array)

//crea el listado incluido en un nuevo array para que usuario pueda elegir los dispositvos 
idNombre.innerHTML=""
array.forEach((elemento) => {
    
    idNombre.innerHTML += `
 
       
<option value ="${elemento.nombre}" >${elemento.nombre}
</option>

   
    
    `
}

)}

crearSelect () 