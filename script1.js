//Formulario de la seccion Contacto

class Persona {
    constructor(nombre, email, mensaje) {
    this.nombre = nombre;   
    this.email = email;
    this.mensaje = mensaje;
    }
}
    
let personas = []
let form = document.querySelector("#form")

form.addEventListener("submit", (event)=> {  
    event.preventDefault()
    console.log("Enviaste formulario")
    let nombre = document.querySelector("#nombre").value
    let email = document.querySelector("#email").value
    let mensaje = document.querySelector("#textarea").value
    
    const persona = new Persona(nombre, email, mensaje);
    personas.push(persona);
    console.log(personas)
    })