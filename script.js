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
    "Regla 1: debe tener tu fecha de nacimiento 🎂",
    "Regla 2: ingresa tu nombre completo, no te hagas el misterioso 😎",
    "Regla 3: mejor álbum de Twenty One Pilots, objetivamente hablando, sé honesta 🎵",
    "Regla 4: escribe la fecha de hoy, literal, no copies la de Google 🗓️",
    "Regla 5: la edad de Natalia Lafourcade… no seas fake fan eh 😉",
    "Regla 6: tu carrera (pero escribela como suena, sin corrector 😅)",
    "Regla 7: masa atómica de algún elemento, eres FCB no? compruebalo pls ⚗️",
    "Regla 8: completa la frase: siempre me ganas en todo ____ 😏",
    "Regla 9: coloca tu emoji secreto favorito que solo yo debería adivinar 🕵️‍♂️",
    "Regla 10: termina la contraseña con una frase divertida o tu micro-broma favorita 😂"
  ];

  let currentStep = 0;
  let passwordParts = [];

  giftBtn.addEventListener("click", ()=>{
    mainScreen.style.display="none";
    passwordScreen.style.display="block";
    showStep();
  });

  passwordBtn.addEventListener("click", ()=>{
    const inputVal = passwordInput.value.trim();
    if(inputVal.length < 1){
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
      showFinalText();
    }
  });

  function showStep(){
    passwordStep.textContent = steps[currentStep];
    passwordMsg.textContent = "";
    passwordInput.focus();
  }

  function showFinalText(){
    const finalPassword = passwordParts.join('');
    const lines=[
      "¡Felicidades! 🎉",
      "Tu contraseña secreta final es:",
      finalPassword,
      "",
      "No la compartas con nadie…",
      "aunque si la compartes conmigo está bien 😏",
      "",
      "Gracias por jugar al Password Game 💌",
      "Recuerda: RecomMusic nunca tuvo promociones reales",
      "pero sí tiene algo mejor… tú 🎵💛"
    ];
    finalText.textContent="";

    let i=0;
    function typeLine(){
      if(i<lines.length){
        finalText.textContent+=lines[i]+"\n";
        i++;
        setTimeout(typeLine,350);
      }
    }
    typeLine();
  }
});
