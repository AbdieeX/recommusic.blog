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

  // Los 10 pasos del juego
  const steps = [
    "Regla 1: crea tu contraseña inicial (≥7 caracteres, 2 números, 1 caracter especial) 🎯",
    "Regla 2: debe tener tu fecha de nacimiento en formato ??/??/???? 🎂",
    "Regla 3: ingresa tu nombre 'común' en minúsculas",
    "Regla 4: mejor álbum de Twenty One Pilots en mayúscula, objetivamente hablando eh no seas poser pls.",
    "Regla 5: debe tener la fecha de hoy en formato ??/??/???? 🗓️",
    "Regla 6: la edad de Natalia Lafourcade la mejor como la quiero",
    "Regla 7: tu carrera mal escrita por un ingeniero medio menso",
    "Regla 8: masa atómica del Iridio con dos decimales, comprueba q eres una verdadera fcb",
    "Regla 9: completa la frase en mayúsculas: siempre me ganas en todo lo ____",
    "Regla 10: debe tener la palabra 'tortuga'. NO preguntes."
  ];

  let currentStep = 0;
  let passwordParts = [];

  // Contraseña final exacta para validar
  const expectedPassword = "29/01/2006valeriaTRENCH14/02/202641fcb192.22MALOtortuga";

  giftBtn.addEventListener("click", ()=>{
    mainScreen.style.display="none";
    passwordScreen.style.display="block";
    currentStep = 0;
    passwordParts = [];
    showStep();
  });

  passwordBtn.addEventListener("click", ()=>{
    const inputVal = passwordInput.value.trim();
    
    if(inputVal.length < 1){
      passwordMsg.textContent = "Ups, no puede estar vacío 😅";
      return;
    }

    // Validación de la primera regla (contraseña inicial)
    if(currentStep === 0){
        if(!/^.*(?=.{7,})(?=(?:.*\d){2,})(?=.*[!@#$%^&*-]).*$/.test(inputVal)){
            passwordMsg.textContent = "Debe tener ≥7 caracteres, 2 números y 1 caracter especial...";
            return;
        }
        // Guardamos la contraseña inicial sin compararla con expectedPassword
        passwordParts[currentStep] = inputVal;
        currentStep++;
        showStep();
        return;
    }

    // Para los demás pasos, solo guardamos el valor y pasamos al siguiente paso
    passwordParts[currentStep] = inputVal;
    currentStep++;


        if(currentStep < steps.length){
          showStep();
        } else {
          passwordScreen.style.display="none";
          finalScreen.style.display="block";
          const finalPassword = passwordParts.join('');
          showFinalText(finalPassword === expectedPassword);
        }
    });


  function showStep(){
    passwordStep.textContent = steps[currentStep];
    passwordMsg.textContent = "";
    passwordInput.value = passwordParts[currentStep] || "";
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
