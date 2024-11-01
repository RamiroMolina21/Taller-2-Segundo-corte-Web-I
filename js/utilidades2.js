const tasa = 4000
function convertir() {
    const valorDolar = document.getElementById("dolar").value
    document.getElementById("pesos").value = valorDolar * tasa
}
document.getElementById("convertir").addEventListener("click", convertir)

/* PUNTO 3 */
const celsiusInput = document.getElementById('celsius')
const fahrenheitInput = document.getElementById('fahrenheit')
const convertirButton = document.getElementById('convertir')

function convertirCelsiusAFahrenheit() {
    const celsius = parseFloat(celsiusInput.value)
    const fahrenheit = (celsius * 9/5) + 32
    fahrenheitInput.value = fahrenheit
}
convertirButton.addEventListener('click', convertirCelsiusAFahrenheit)

/* PUNTO 4 */

function adicionarEmpleado() {
    const nombre = document.getElementById("nombre").value
    const codigo = document.getElementById("codigo").value
    if (nombre && codigo) {
        const tablaEmpleados = document.getElementById("tablaEmpleados")
        const nuevaFila = tablaEmpleados.insertRow()
        const celdaCodigo = nuevaFila.insertCell(0)
        const celdaNombre = nuevaFila.insertCell(1)
        celdaCodigo.textContent = codigo
        celdaNombre.textContent = nombre
        document.getElementById("nombre").value = ""
        document.getElementById("codigo").value = ""
    } else {
        alert("Por favor, completa ambos campos.")
    }
}




