let nombre = prompt("Nombre")
let clavedep = prompt("Clave departamento")
let años = prompt("Años de antigüedad")

console.log("Nombre: " + nombre)
console.log("Clave: " + clavedep)

document.getElementById("nombre").innerHTML = `Nombre: ${nombre}`
document.getElementById("nombre").style.color = "#17202a"

document.getElementById("clave").innerHTML = `Clave de departamento: ${clavedep}`
document.getElementById("clave").style.color = "#0b5345"

document.getElementById("dias").innerHTML = `Antigüedad: ${años}`
document.getElementById("dias").style.color = "#154360"