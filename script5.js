document.addEventListener("DOMContentLoaded", function () {
    const lista = document.getElementById("lista");
    const boton = document.querySelector("input[type='button']");

    function agregarElemento() {

        const numElementos = lista.getElementsByTagName("li").length + 1;
        const nuevoElemento = document.createElement("li");

        nuevoElemento.textContent = `Elemento ${numElementos}`;

        nuevoElemento.classList.add("list-group-item");

        lista.appendChild(nuevoElemento);
    }
    boton.addEventListener("click", agregarElemento);
});
