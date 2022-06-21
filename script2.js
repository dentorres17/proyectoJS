//Carrito

class Producto {
    constructor(nombre, precio, imagen){
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

const producto1 = new Producto ("Tapiz grande", 8000, "tapizGrande.png")
const producto2 = new Producto ("Tapiz chico", 4500, "tapizChico.png")
const producto3 = new Producto ("Espejo grande", 2500, "espejoGrande.png")
const producto4 = new Producto ("Espejo chico", 2100, "espejoChico.png")
const producto5 = new Producto ("Portamacetas", 2050, "portamacetas.png")
const producto6 = new Producto ("Adornos", 1200, "adornos.png")

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
    <div class="card border-secondary row col-md-3 margin-3" id="producto${indice}">
        <h5 class="card-title">${productoEnArray.nombre}</h5>
        <div class="card-body">
          <img src="./imagenes/${productoEnArray.imagen}" class="card-img-top" alt="foto1">
          <p class="card-text">$${productoEnArray.precio}</p>
          <button id="boton${indice}">Comprar</button>
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

// Button para agregar producto al carrito con alerta de Toastify
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
let buttonCarrito = document.querySelector("#buttonCarrito")
buttonCarrito.addEventListener("click", () =>{
    Swal.fire({
        title: 'Sweet!',
        text: 'Modal with a custom image.',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
})

