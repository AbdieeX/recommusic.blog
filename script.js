// Contador animado
let numero = 0;
let objetivo = 99999;
let contador = document.getElementById("contador");

let intervalo = setInterval(() => {
  numero += 1777;

  if(numero >= objetivo){
    numero = objetivo;
    clearInterval(intervalo);
  }

  contador.textContent = numero;
}, 20);


// ✨ CAMBIA ESTE MENSAJE SI QUIERES ✨
let mensajeFinal = `
Feliz 14 ✨

No es spam.
No es phishing.
Es solo un pequeño detalle digital.

Gracias por ser mi recomendación favorita.
`;

function reclamar(){

  document.getElementById("contenido").innerHTML = `
<pre>

        _-_
     /`       `\\
    |  .-.  .-.  |
    |  \\o/  \\o/  |
    |    /      \\    |
     \\   \\      /   /
      `\\  '------'  /'
        `-\\________/-'

            🌹

${mensajeFinal}

</pre>
  `;
}
