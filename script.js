// Formulario de la seccion Diseños personalizados

class Formulario {
    constructor(nombre1, email1, producto, color, mensaje1) {
        this.nombre1 = nombre1;
        this.email1 = email1;
        this.producto = producto;
        this.color = color;
        this.mensaje1 = mensaje1
    }
}

 
let personas1 = []
let formDiseno = document.querySelector("#formDisenos")

formDiseno.addEventListener("submit", (event)=> {
    event.preventDefault()
    console.log("Enviaste formulario")
    let nombre1 = document.querySelector("#nombre1").value
    let email1 = document.querySelector("#email1").value
    let producto = document.querySelector("#prod").value
    let color = document.querySelector("#color").value
    let mensaje1 = document.querySelector("#textarea1").value

    const persona1 = new Formulario (nombre1, email1, producto, color, mensaje1);
    personas1.push(persona1);
    console.log(personas1)
})