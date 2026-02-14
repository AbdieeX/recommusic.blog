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
    "Regla 1: debe tener tu fecha de nacimiento en formato ??/??/???? 🎂",
    "Regla 2: ingresa tu nombre 'común' en minúsculas",
    "Regla 3: mejor álbum de Twenty One Pilots en mayúscula, objetivamente hablando eh no seas poser pls.",
    "Regla 4: debe tener la fecha de hoy en formato ??/??/???? 🗓️",
    "Regla 5: la edad de Natalia Lafourcade la mejor como la quiero",
    "Regla 6: tu carrera mal escrita en minúsculas por un ingeniero medio menso",
    "Regla 7: masa atómica del Iridio con dos decimales, comprueba q eres una verdadera fcb",
    "Regla 8: completa la frase en mayúsculas: siempre me ganas en todo lo ____",
    "Regla 9: debe tener la palabra 'tortuga'. NO preguntes."
  ];

  let currentStep = 0;
  let passwordParts = [];

  const expectedPassword = "29/01/2006valeriaTRENCH14/02/202641fcb192.22MALOtortuga";

  giftBtn.addEventListener("click", ()=>{
    mainScreen.style.display="none";
    passwordScreen.style.display="block";
    currentStep = 0;
    passwordParts = [];
    passwordInput.value = "";
    showStep();
  });

  passwordBtn.addEventListener("click", ()=>{
    const inputVal = passwordInput.value.trim();

    if(inputVal.length < 1){
      passwordMsg.textContent = "Ups, no puede estar vacío 😅";
      return;
    }

    // Calculamos la posición que corresponde a este paso
    const prevLength = passwordParts.join('').length;
    let stepLength = 0;

    // Definimos cuánto mide cada paso en expectedPassword
    switch(currentStep){
      case 0: stepLength = "29/01/2006".length; break;
      case 1: stepLength = "valeria".length; break;
      case 2: stepLength = "TRENCH".length; break;
      case 3: stepLength = "14/02/2026".length; break;
      case 4: stepLength = "41".length; break;
      case 5: stepLength = "fcb".length; break;
      case 6: stepLength = "192.22".length; break;
      case 7: stepLength = "MALO".length; break;
      case 8: stepLength = "tortuga".length; break;
    }

    const expectedStepPart = expectedPassword.slice(prevLength, prevLength + stepLength);

    // Validamos que el input acumulativo contenga la parte correcta al final
    const userStepPart = inputVal.slice(prevLength, prevLength + stepLength);

    if(userStepPart !== expectedStepPart){
      passwordMsg.textContent = "Algo no coincide con la parte de la contraseña de este paso 😅";
      return;
    }

    // Guardamos todo el input como el nuevo acumulado
    passwordParts[currentStep] = inputVal;
    currentStep++;

    if(currentStep < steps.length){
      showStep();
    } else {
      passwordScreen.style.display="none";
      finalScreen.style.display="block";
      const finalPassword = passwordParts[passwordParts.length - 1]; // input final ya tiene todo
      showFinalText(finalPassword === expectedPassword);
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
      lines.push("¡Felicidades! 🎉");
      lines.push("Tu contraseña secreta es EXACTAMENTE la correcta 😎");
      lines.push("");
      lines.push("No la compartas con nadie… aunque si la compartes conmigo está bien 😏");
      lines.push("");
      lines.push("Gracias por jugar al Password Game 💌");
      lines.push("Recuerda: RecomMusic nunca tuvo promociones reales");
      lines.push("pero sí tiene algo mejor… tú 🎵💛");
    } else {
      lines.push("¡Ups! ❌");
      lines.push("Tu contraseña NO coincide con la esperada 😅");
      lines.push("");
      lines.push("Intenta de nuevo y no te rindas 💪");
    }

    finalText.textContent = "";
    let i=0;

    function typeLine(){
      if(i<lines.length){
        finalText.textContent += lines[i] + "\n";
        i++;
        setTimeout(typeLine, 350);
      }
    }
    typeLine();
  }
});
