const nombres = ["Ramiro", "Jesus",
    "Angel", "Jhon", "Johan",
    "Elier", "Jorge", "Julio",
    "Humberto", "Thaina"]

document.getElementById("agregarElemento").addEventListener("click", function () {
    const palabraAleatoria = nombres[Math.floor(Math.random() * nombres.length)]
    const nuevoElemento = document.createElement("li");    
    nuevoElemento.textContent = palabraAleatoria
    document.getElementById("lista").appendChild(nuevoElemento)
})

