const btnAbrirCarta = document.getElementById("btnAbrirCarta");
const carta = document.getElementById("carta");
const corazonPrincipal = document.getElementById("corazonPrincipal");
const flores = document.querySelectorAll(".flor");
const mensajeFlor = document.getElementById("mensajeFlor");
const tarjetas = document.querySelectorAll(".tarjeta");
const botonesRazones = document.querySelectorAll(".razones button");
const razonMostrada = document.getElementById("razonMostrada");
const btnSorpresa = document.getElementById("btnSorpresa");
const sorpresa = document.getElementById("sorpresa");
const fondoCorazones = document.getElementById("fondoCorazones");

btnAbrirCarta.addEventListener("click", function () {
    carta.classList.remove("oculto");
    carta.scrollIntoView({ behavior: "smooth" });
    crearExplosicionCorazones();
});

corazonPrincipal.addEventListener("click", function () {
    crearExplosicionCorazones();
});

flores.forEach(function (flor) {
    flor.addEventListener("click", function () {
        mensajeFlor.textContent = flor.getAttribute("data-mensaje");
        mensajeFlor.style.animation = "none";
        setTimeout(function () {
            mensajeFlor.style.animation = "aparecer 0.6s ease";
        }, 10);
    });
});

tarjetas.forEach(function (tarjeta) {
    tarjeta.addEventListener("click", function () {
        tarjeta.classList.toggle("volteada");
    });
});

botonesRazones.forEach(function (boton) {
    boton.addEventListener("click", function () {
        razonMostrada.textContent = boton.getAttribute("data-texto");
        razonMostrada.style.animation = "none";
        setTimeout(function () {
            razonMostrada.style.animation = "aparecer 0.6s ease";
        }, 10);
    });
});

btnSorpresa.addEventListener("click", function () {
    sorpresa.classList.remove("oculto");
    crearExplosicionCorazones();
    sorpresa.scrollIntoView({ behavior: "smooth" });
});

function crearCorazonFlotante() {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon-flotante");
    corazon.textContent = "❤";

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = Math.random() * 18 + 16 + "px";
    corazon.style.animationDuration = Math.random() * 4 + 5 + "s";

    fondoCorazones.appendChild(corazon);

    setTimeout(function () {
        corazon.remove();
    }, 9000);
}

function crearExplosicionCorazones() {
    for (let i = 0; i < 24; i++) {
        setTimeout(function () {
            crearCorazonFlotante();
        }, i * 80);
    }
}

setInterval(crearCorazonFlotante, 700);
