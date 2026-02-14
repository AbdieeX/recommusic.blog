document.addEventListener("DOMContentLoaded", function(){

  const mainScreen = document.getElementById("mainScreen");
  const giftBtn = document.getElementById("giftBtn");
  const captchaScreen = document.getElementById("captchaScreen");
  const emojiContainer = document.getElementById("emojiContainer");
  const finalScreen = document.getElementById("finalScreen");
  const finalText = document.getElementById("finalText");

  const correctEmojis = ["🎵","🐢","💃"];
  let selectedEmojis = [];

  // Lista de emojis random (incluye los correctos)
  const emojis = ["🎵","🐢","💃","🌟","🍕","💌","🎧","🧪","☕","🪐","🐙","🎶"];

  giftBtn.addEventListener("click", ()=>{
    mainScreen.style.display="none";
    captchaScreen.style.display="block";

    emojis.forEach(e=>{
      const span = document.createElement("span");
      span.textContent = e;
      span.classList.add("emoji");
      span.addEventListener("click", ()=>{
        if(!span.classList.contains("tocado")){
          span.classList.add("tocado");
          selectedEmojis.push(e);

          if(selectedEmojis.length >= correctEmojis.length){
            // Verifica si seleccionó los correctos
            const acertó = correctEmojis.every(c => selectedEmojis.includes(c));
            if(acertó){
              setTimeout(()=>showFinal(),300);
            } else {
              // Si no acierta, resetea suavemente
              selectedEmojis = [];
              document.querySelectorAll(".emoji").forEach(em=>{
                em.classList.remove("tocado");
              });
            }
          }
        }
      });
      emojiContainer.appendChild(span);
    });
  });

  function showFinal(){
    captchaScreen.style.display="none";
    finalScreen.style.display="block";
    const lines=[
      "💛 ¡Genial!","",
      "Has encontrado los emojis correctos 🎵🐢💃",
      "Gracias por jugar conmigo un ratito 😄",
      "Eres increíble 💌"
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
