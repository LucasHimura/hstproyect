
//creacion de sistemas en Index, genera el Html con info recuperada de sistema.json

const contenedorSistemas= document.getElementById("ContenedorSistemas")





function renderSytem(array){
    contenedorSistemas.innerHTML=""
    array.forEach(element => {
        contenedorSistemas.innerHTML+=`
        <div class="col">
            <div class="card h-100">
                <a  href="./secciones/cargaCctv.html">
                    <img class="imgSistema" src="${element.img}" class="card-img-top" alt="...">
                </a>
                <div class="card-body">
                    <h5 class="card-title">${element.sistemas}</h5>
                    <p class="card-text">${element.detalle}</p>
                </div>
            </div>
        </div>

        `    
    });
}


async function consumirApi(){
    const api=await fetch("./script/sistema.json")
    const json=await api.json()
    renderSytem(json)
   
    
    
}
consumirApi()
