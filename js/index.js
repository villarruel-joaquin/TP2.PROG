const meriendas = [
    "Licuado de banana",
    "Medialunas",
    "Chocolatada",
    "Budín",
    "tostadas"
];
const contenedor = document.getElementById("meriendas");

meriendas.forEach(merienda => {

    contenedor.innerHTML += `
        <div class="caja">
            ${merienda}
        </div>
    `;

});

document
.getElementById("btnCantidad")
.addEventListener("click", () => {

    document.getElementById("resultado")
    .textContent =
    "Hay " + meriendas.length + " meriendas";

});