
/* PUNTO 6 */
document.addEventListener("mousemove", function(event) {
    const navegadorX = event.clientX
    const navegadorY = event.clientY
    document.getElementById("cordenadasNavegador").textContent = `Navegador [${navegadorX}, ${navegadorY}]`
    const pageX = event.pageX
    const pageY = event.pageY
    document.getElementById("cordenadasPagina").textContent = `Página [${pageX}, ${pageY}]`
});

/* PUNTO 7 */

document.addEventListener("keydown", function(event) {
    const caracter = event.key;
    document.getElementById("caracter").textContent = `Carácter [${caracter}]`;
    const codigo = event.keyCode || event.which;
    document.getElementById("codigo").textContent = `Código [${codigo}]`;
});