// VARIABLES
const contenederPoductos = document.querySelector("#contenedorProductos");
const contenederCarrito = document.querySelector("#contenedorCarrito");
const btnCarrito = document.querySelector("#btnCarrito");
const divCarrito = document.querySelector("#divCarrito");
const burbujaCarrito = document.querySelector("#burbujaCarrito");
const totalCarrito = document.querySelector("#totalCarrito");
const selectOrdenar = document.querySelector("#ordenar");
const selectFiltrar = document.querySelector("#categorias");
const inputBuscar = document.querySelector("#buscar");

const ordenar = { nombre: "Por nombre", categoria: "Por categoria" };
const categorias = {
  todo: "Ver todos",
  CCTV: "CCTV",
  Intrusion: "Intrusion",
  Acceso: "Acceso"
};

//FUNCIONES

function crearSelect(objeto, etiqueta) {
  etiqueta.innerHTML = "";
  for (key in objeto) {
    etiqueta.innerHTML += `<option value=${key}>${objeto[key]}</option> `;
  }
}

function mostrarProductos(array) {
  contenederPoductos.innerHTML = "";
  array.forEach((sistemas) => {
    contenederPoductos.innerHTML += `
        <div class="col mb-5">
            <div class="card h-100">
               <!-- Product details-->
                <div class="card-body p-4">
                    <div class="text-center">
                        <!-- Product name-->
                        <h5 class="fw-bolder">${sistemas.nombre}</h5>
                        <!-- Product price-->
                        <h3>${sistemas.detalle}</h3>
                        <p>${sistemas.categoria}</p>
                    </div>
                </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center">
                        <button onclick=agregarAlCarrito(${sistemas.id}) class="btn btn-outline-dark mt-auto" href="#">Cargar Incidente</button>
                    </div>
                </div>
            </div>
        </div>
        `;
  });
}


function numeroTicket() {


  ticket = Math.floor((Math.random() * 99999) + 1);

 return (ticket)
}

function mostrarCarrito() {
  const carrito = capturarStorage();
  contenederCarrito.innerHTML = "";
  carrito.forEach((sistemas) => {
    contenederCarrito.innerHTML += `
        <tr>
            <th scope="row"><button onclick="restarCantidad(${sistemas.id})" class="btn"><</button>${sistemas.cantidad}<button onclick="incrementarCantidad(${sistemas.id})" class="btn">></button></th>
            <td>${sistemas.nombre}</td>
            <td>${prioridades.nombre}</td>
            <td>${numeroTicket()}</td>
            <td><button class="btn btn-danger" onclick="eliminarProductoCarrito(${
              sistemas.id
            })">x </button></td>
        </tr>
        `;
  });
  cantidadCarrito();
  mostrarTotalarrito();
}

function verCarrito() {
  if (divCarrito.style.display === "none") {
    divCarrito.style.display = "inline";
  } else {
    divCarrito.style.display = "none";
  }
}

// Funciones de Storage
function capturarStorage() {
  return JSON.parse(localStorage.getItem("carrito")) || []; // si el storage no existe retorno un array vacio
}

function guardarStorage(elemento) {
  localStorage.setItem("carrito", JSON.stringify(elemento));
}
// funcines del carrito
function cantidadCarrito() {
  const carrito = capturarStorage();
  burbujaCarrito.innerHTML = carrito.length;
}

function dentroDeCarrito(id) {
  //verifico si el producto esta dentro del carrito retorna true o false
  const carrito = capturarStorage();
  return carrito.find((e) => e.id === id);
}

function mostrarTotalarrito() {
  //calculo el valor total
  const carrito = capturarStorage();
  const total = carrito.reduce(
    (acc, elem) => acc + elem.cantidad,
    0
  );
  totalCarrito.innerHTML = total;
}

function agregarAlCarrito(id) {
  const carrito = capturarStorage();
  if (dentroDeCarrito(id)) {
    //si esta dentro de carrito ejecuto incrementar para que no se duplique el producto
    incrementarCantidad(id);
  } else {
    // sino esta lo bucso dentro de productos y lo agrego al array sumandole una propiedad cantidad
    const productoAgregar = sistemas.find((prod) => prod.id === id);
    carrito.push({ ...productoAgregar, cantidad: 1 });
    alert(`Dispositivo: ${productoAgregar.nombre} agregado a incidentes`)
    guardarStorage(carrito);
    mostrarCarrito();
  }
}

function eliminarProductoCarrito(id) {
  const carrito = capturarStorage();
  const resultado = carrito.filter((prod) => prod.id !== id); //me devuelve todo menos el que conicida con el id
  guardarStorage(resultado);
  mostrarCarrito();
}

function incrementarCantidad(id) {
  const carrito = capturarStorage();
  const indice = carrito.findIndex((e) => e.id === id); // busco la posicion del objeto
  carrito[indice].cantidad < carrito[indice].stock
    ? carrito[indice].cantidad++
    : alert("sin stock"); //segun la posucion le sumo uno a cantidad
  guardarStorage(carrito);
  mostrarCarrito();
}

function restarCantidad(id) {
  let carrito = capturarStorage();
  const indice = carrito.findIndex((e) => e.id === id); // busco la posicion del objeto
  if (carrito[indice].cantidad > 1) {
    carrito[indice].cantidad--; //segun la posucion le resto uno a cantidad
    guardarStorage(carrito);
    mostrarCarrito();
  } else {
    carrito = confirm(`desea eliminar ${carrito[indice].nombre} de incidentes`) && eliminarProductoCarrito(id);
  }
}

function eliminarCarrito() {
  confirm("desea eliminar todos los dispositivos de incidentes?") &&
    localStorage.removeItem("incidentes");
  mostrarCarrito();
}

function confirmarCompra() {
  eliminarCarrito();
  alert("Soporte Tecnico resolvera el inconveniente lo mas rapido posible");
}

function filtrar() {
  const reultado =
    selectFiltrar.value !== "todo"
      ? sistemas.filter((e) => e.categoria === selectFiltrar.value)
      : sistemas;
  return reultado;
}

function buscar(array, valor) {
  const reult = array.filter((e) =>
    e.nombre.toLowerCase().match(valor.toLowerCase())
  );
  return reult;
}

// LOGICA
mostrarProductos(sistemas);


mostrarCarrito();
cantidadCarrito();


crearSelect(ordenar, selectOrdenar);
crearSelect(categorias, selectFiltrar);

selectFiltrar.onchange = () => {
  const prodFiltrados = filtrar();
  mostrarProductos(prodFiltrados);
};

selectOrdenar.onchange = (e) => {
  const prodFiltrados = filtrar(e);
  const prodOrdenados = prodFiltrados.sort((a, b) => {
    if (a[selectOrdenar.value] > b[selectOrdenar.value]) {
      return 1;
    }
    if (a[selectOrdenar.value] < b[selectOrdenar.value]) {
      return -1;
    }
    return 0;
  });
  mostrarProductos(prodOrdenados);
};

inputBuscar.oninput = (e) => {
  const prodFiltrados = buscar(filtrar(), e.target.value);
  mostrarProductos(prodFiltrados);
};



function sistemaPrioridad (){
    
  

   
  }
