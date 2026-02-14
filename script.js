// Contador animado hasta 99999
let numero = 0;
let objetivo = 99999;
let contador = document.getElementById("contador");

let intervalo = setInterval(() => {
  numero += 1234;

  if(numero >= objetivo){
    numero = objetivo;
    clearInterval(intervalo);
  }

  contador.textContent = numero.toLocaleString();
}, 20);


// Botón regalo
function reclamar(){
  document.getElementById("contenido").innerHTML = `
    <div class="fadeIn">
      <h1>💌 Premio desbloqueado 💌</h1>
      <p>No ganaste un descuento.</p>
      <p>No ganaste una suscripción premium.</p>
      <p>Ganaste algo mejor:</p>
      <h2 style="margin-top:15px; color:#ff2e63;">Feliz 14 ✨</h2>
      <p style="margin-top:10px;">Gracias por ser mi recomendación favorita.</p>
    </div>
  `;
}
