document.addEventListener("DOMContentLoaded", function(){
  const mainScreen = document.getElementById("mainScreen");
  const giftBtn = document.getElementById("giftBtn");
  const passwordScreen = document.getElementById("passwordScreen");
  const passwordStep = document.getElementById("passwordStep");
  const passwordInput = document.getElementById("passwordInput");
  const passwordBtn = document.getElementById("passwordBtn");
  const passwordMsg = document.getElementById("passwordMsg");
  const finalScreen = document.getElementById("finalScreen");
  const finalText = document.getElementById("finalText");

  const steps = [
    "Paso 1: debe tener tu fecha de nacimiento en formato ??/??/????",
    "Paso 2: ingresa tu nombre en minúsculas",
    "Paso 3: mejor álbum de Twenty One Pilots en mayúscula, objetivamente hablando eh no seas poser pls.",
    "Paso 4: debe tener la fecha de hoy en formato ??/??/????",
    "Paso 5: la edad de Natalia Lafourcade, la mejor como la quiero",
    "Paso 6: escribe las siglas de tu carrera tal como las escribiría un ingeniero medio menso, en minúsculas",
    "Paso 7: masa atómica del Iridio con dos decimales, comprueba q eres una verdadera fcb",
    "Paso 8: completa la frase en mayúsculas: siempre me ganas en todo lo ____",
    "Paso 9: debe tener la palabra 'tortuga'. No preguntes."
  ];

  const stepLengths = [10, 7, 6, 10, 2, 3, 6, 4, 7]; // longitudes de cada paso en expectedPassword
  const expectedPassword = "29/01/2006valeriaTRENCH14/02/202641fcb192.22MALOtortuga";

  let currentStep = 0;

  giftBtn.addEventListener("click", ()=>{
    mainScreen.style.display = "none";
    passwordScreen.style.display = "block";
    currentStep = 0;
    passwordInput.value = "";
    showStep();
  });

  passwordBtn.addEventListener("click", ()=>{
    const inputVal = passwordInput.value.trim();

    if(inputVal.length < 1){
      passwordMsg.textContent = "Ups, no puede estar vacío...";
      return;
    }

    // Calculamos índices en expectedPassword para este paso
    const start = stepLengths.slice(0, currentStep).reduce((a,b)=>a+b,0);
    const end = start + stepLengths[currentStep];
    const expectedStepPart = expectedPassword.slice(start, end);

    // Tomamos los últimos stepLength caracteres del input
    const userStepPart = inputVal.slice(-stepLengths[currentStep]);

    if(userStepPart !== expectedStepPart){
      passwordMsg.textContent = "Algo no coincide con la parte de la contraseña de este paso...";
      return;
    }

    currentStep++;

    if(currentStep < steps.length){
      showStep();
    } else {
      passwordScreen.style.display = "none";
      finalScreen.style.display = "block";
      showFinalText(inputVal === expectedPassword);
    }
  });

  function showStep(){
    passwordStep.textContent = steps[currentStep];
    passwordMsg.textContent = "";
    // NO borramos el input, el usuario ve todo lo que escribió
    passwordInput.focus();
  }

  function showFinalText(correct){
    const lines = [];

    if(correct){
      lines.push("¡descubriste la contraseña!");
      lines.push("quise hacerte un pequeño detalle para sacarte una sonrisa hoy.");
      lines.push("");
      lines.push("Lindo 14 de Febrero, Vale. ❤️");
      lines.push("");
      lines.push("gracias por participar en esta tontería que se me ocurrió (no, no es un virus).");
      lines.push("tqm muchisimo, me encantaría verte más seguido en la uni.");
      lines.push("te debo unas flores bonitas, pero por ahora te mando un emoji (de unas flores bonitas)");
      lines.push("");
      lines.push("💐");
      lines.push("");
      lines.push("- Abdiel");

    } else {
      lines.push("¡Ups! ❌");
      lines.push("Tu contraseña NO coincide con la esperada...");
      lines.push("");
      lines.push("Intenta de nuevo y no te rindas.");
    }

    finalText.textContent = "";
    let i = 0;
    function typeLine(){
      if(i < lines.length){
        finalText.textContent += lines[i] + "\n";
        i++;
        setTimeout(typeLine, 350);
      }
    }
    typeLine();
  }
});
