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
    "Regla 2: debe tener tu fecha de nacimiento 🎂",
    "Regla 3: ingresa tu nombre completo, no te hagas el misterioso 😎",
    "Regla 4: mejor álbum de Twenty One Pilots, objetivamente hablando, sé honesta 🎵",
    "Regla 5: escribe la fecha de hoy, literal, no copies la de Google 🗓️",
    "Regla 6: la edad de Natalia Lafourcade… no seas fake fan eh 😉",
    "Regla 7: tu carrera (pero escribela como suena, sin corrector 😅)",
    "Regla 8: masa atómica de algún elemento, eres FCB no? compruebalo pls ⚗️",
    "Regla 9: completa la frase: siempre me ganas en todo ____ 😏",
    "Regla 10: termina la contraseña con una frase divertida o tu micro-broma favorita 😂"
  ];

  let currentStep = 0;
  let passwordParts = [];

  // Contraseña final exacta para validar
  const expectedPassword = "29/01/2006valeriaTRENCH14/02/202641fcb192.22MALO";

  // Inicia el juego desde la pantalla inicial
  giftBtn.addEventListener("click", ()=>{
    mainScreen.style.display="none";
    passwordScreen.style.display="block";
    currentStep = 0;
    passwordParts = [];
    showStep();
  });

  passwordBtn.addEventListener("click", ()=>{
    const inputVal = passwordInput.value.trim();

    // Validar contraseña inicial
    if(currentStep === 0){
      if(!/^.*(?=.{7,})(?=(?:.*\d){2,})(?=.*[!@#$%^&*-]).*$/.test(inputVal)){
        passwordMsg.textContent = "Debe tener ≥7 caracteres, 2 números y 1 caracter especial 😅";
        return;
      }
    } else if(inputVal.length < 1){
      passwordMsg.textContent = "Ups, no puede estar vacío 😅";
      return;
    }

    passwordParts.push(inputVal);
    passwordInput.value = "";
    currentStep++;

    if(currentStep < steps.length){
      showStep();
    } else {
      passwordScreen.style.display="none";
      finalScreen.style.display="block";

      // Concatenar todos los pasos excepto la contraseña inicial
      const finalPassword = passwordParts.slice(1).join('');
      showFinalText(finalPassword === expectedPassword);
    }
  });

  function showStep(){
    passwordStep.textContent = steps[currentStep];
    passwordMsg.textContent = "";
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
