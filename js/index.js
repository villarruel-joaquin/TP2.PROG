const meriendas = [
    "Tostadas",
    "Yogur",
    "Fruta",
    "Galletitas",
    "Sandwich"
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

    document
    .getElementById("resultado")
    .textContent =
    "Cantidad de meriendas: " +
    meriendas.length;

});