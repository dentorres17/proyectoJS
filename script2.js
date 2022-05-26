//Carrito

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const producto1 = new Producto ("Cubrebidones grande", 2000)
const producto2 = new Producto ("Cubrebidones chico", 1500)
const producto3 = new Producto ("Espejo grande", 2500)
const producto4 = new Producto ("Espejo chico", 2100)
const producto5 = new Producto ("Portamacetas", 2050)
const producto6 = new Producto ("Adornos", 1200)

let productos = [producto1, producto2, producto3, producto4, producto5, producto6]
let carrito = []

if(localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"))
} else{
    localStorage.setItem("carrito", JSON.stringify(carrito))
}


let divProductos = document.querySelector("#divProductos")
productos.forEach((productoEnArray, indice) => {
    divProductos.innerHTML += `
    <div class="card border-primary mb-3 row col-md-3 border-start border-dark" id="producto${indice}">
        <img src="https://dummyimage.com/50x50" class="card-img-top" alt="foto1">
        <div class="card-body">
          <h5 class="card-title">${productoEnArray.nombre}</h5>
          <p class="card-text">$${productoEnArray.precio}</p>
          <button id="boton${indice}">Comprar</button>
        </div>
    </div>
</div>
    `
})

productos.forEach((productoEnArray, indice)=> {
    document.querySelector(`#boton${indice}`).addEventListener("click", ()=> {
        let productoCarrito = productos[indice]
        carrito.push(productoCarrito)
        localStorage.setItem("carrito", JSON.stringify(carrito))
        console.log(carrito)
    })
})

let botonCarrito = document.querySelector("#divProductos")
botonCarrito.addEventListener("click", () => {
    Toastify({
        text: "Agregado al carrito",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#607963",
        },
        onClick: function(){} // Callback after click
      }).showToast();
})