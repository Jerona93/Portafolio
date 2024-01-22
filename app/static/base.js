// script.js
// function cambiarTema() {
//     var cuerpo = document.body;
//     cuerpo.classList.toggle("tema-claro");
//     cuerpo.classList.toggle("tema-oscuro");

//     Guardar la preferencia del usuario (puedes usar cookies, localStorage o enviar al servidor)
//     var temaActual = cuerpo.classList.contains("tema-oscuro") ? "oscuro" : "claro";
//     Aquí puedes hacer una llamada AJAX para enviar la preferencia al servidor si es necesario
//     console.log("Tema actual: " + temaActual);
// }
// script.js
// script.js
// script.js
// script.js
// script.js
// script.js
// script.js
// script.js
// script.js
function cambiarTema() {
    var cuerpo = document.body;
    cuerpo.classList.toggle("tema-claro");
    cuerpo.classList.toggle("tema-oscuro");

    // Cambia el ícono del botón según el tema actual
    var icono = document.getElementById("icono-tema");
    if (cuerpo.classList.contains("tema-oscuro")) {
        icono.innerHTML = "wb_sunny";  // Ícono del sol en modo oscuro
        icono.style.color = "#fff";  // Color del ícono en modo claro
    } else {
        icono.innerHTML = "brightness_3";  // Ícono de la luna en modo claro
        icono.style.color = "#034d6c";  // Color del ícono en modo claro
    }

    // Guardar la preferencia del usuario (puedes usar cookies, localStorage o enviar al servidor)
    var temaActual = cuerpo.classList.contains("tema-oscuro") ? "oscuro" : "claro";
    // Aquí puedes hacer una llamada AJAX para enviar la preferencia al servidor si es necesario
    console.log("Tema actual: " + temaActual);
}


