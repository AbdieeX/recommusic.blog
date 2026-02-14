// Contador animado
let numero = 0;
let objetivo = 99999;
let contador = document.getElementById("contador");

let intervalo = setInterval(() => {
  numero += 1234;

  if (numero >= objetivo) {
    numero = objetivo;
    clearInterval(intervalo);
  }

  contador.textContent = numero.toLocaleString();
}, 20);


// ✨ EDITA ESTE MENSAJE ✨
let mensajeFinal = "Feliz 14 ✨\nGracias por ser mi recomendación favorita.";


function reclamar(){

  let rosa =
"        _-_\n" +
"     /           \\\n" +
"    |    \\  /      |\n" +
"    |     \\()/       |\n" +
"     \\     (    )     /\n" +
"      \\      '----'    /\n" +
"        \\___________/\n\n" +
"            🌹\n";

  document.getElementById("contenido").innerHTML =
    "<h1>💌 Premio desbloqueado 💌</h1>" +
    "<div class='rose'>" + rosa + "</div>" +
    "<p style='margin-top:20px; white-space:pre-line;'>" + mensajeFinal + "</p>";
}
