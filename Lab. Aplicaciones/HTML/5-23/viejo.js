let nombre = prompt("Nombre")
let clavedep = prompt("Clave departamento")
let años = prompt("Años de antigüedad")

console.log("Nombre: " + nombre)
console.log("Clave: " + clavedep)

document.getElementById("nombre").innerHTML = `Nombre: ${nombre}`
document.getElementById("clave").innerHTML = `Clave de departamento: ${clavedep}`
document.getElementById("dias").innerHTML = `Antigüedad: ${años}`