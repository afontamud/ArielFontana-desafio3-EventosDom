document.addEventListener("DOMContentLoaded", () => {
    console.log("Se cargo documento");
});

const parrafo = document.querySelector("p");
const input = document.querySelector("input");

input.addEventListener ("change", (evento) =>{
    parrafo.textContent=evento.target.value;
})


const boton = document.querySelector("button");

let contador = 0;

boton.addEventListener("click", () => {
    console.log("click");
    contador++;
    parrafo.textContent = contador;
});
