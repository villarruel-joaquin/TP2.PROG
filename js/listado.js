const productos = [

    { nombre: "Manzana", categoria: "fruta" },
    { nombre: "Banana", categoria: "fruta" },
    { nombre: "Pera", categoria: "fruta" },
    { nombre: "Pan", categoria: "otro" },
    { nombre: "Leche", categoria: "otro" },
    { nombre: "Queso", categoria: "otro" }

];

function mostrar(datos){

    const lista =
    document.getElementById("lista");

    lista.innerHTML = "";

    datos.forEach(producto => {

        lista.innerHTML += `
            <div class="caja">
                ${producto.nombre}
            </div>
        `;

    });

}

mostrar(productos);

document
.getElementById("todos")
.addEventListener("click", () => {

    mostrar(productos);

});

document
.getElementById("frutas")
.addEventListener("click", () => {

    const frutas =
    productos.filter(
        producto => producto.categoria === "fruta"
    );

    mostrar(frutas);

});