document.addEventListener("DOMContentLoaded", function(){
  const mainScreen = document.getElementById("mainScreen");
  const giftBtn = document.getElementById("giftBtn");
  const captchaScreen = document.getElementById("captchaScreen");
  const captchaOptions = document.getElementById("captchaOptions");
  const captchaBtn = document.getElementById("captchaBtn");
  const captchaMsg = document.getElementById("captchaMsg");
  const finalScreen = document.getElementById("finalScreen");
  const finalText = document.getElementById("finalText");

  // Emojis para captcha falso
  const allEmojis = ["🎧","🌮","🎵","🎶","🐔","🎹","💿","🍕","🎼"];
  const correctEmojis = ["🎵","🎶","🎼"]; // solo estos son correctos

  giftBtn.addEventListener("click", ()=>{
    mainScreen.style.display="none";
    captchaScreen.style.display="block";

    // Generar emojis como botones
    captchaOptions.innerHTML="";
    allEmojis.forEach(e=>{
      const span=document.createElement("span");
      span.textContent=e;
      span.classList.add("captchaEmoji");
      span.addEventListener("click", ()=>span.classList.toggle("selected"));
      captchaOptions.appendChild(span);
    });
  });

  captchaBtn.addEventListener("click", ()=>{
    const selected = Array.from(document.querySelectorAll(".captchaEmoji.selected")).map(s=>s.textContent);
    const success = correctEmojis.every(e=>selected.includes(e)) && selected.length===correctEmojis.length;

    if(success){
      captchaScreen.style.display="none";
      finalScreen.style.display="block";
      showFinalText();
    } else {
      captchaMsg.textContent="ERROR 404 HUMANIDAD NO DETECTADA. Intenta de nuevo 💖";
      captchaMsg.style.color="#ff4ecd";
    }
  });

  function showFinalText(){
    const lines=[
      "ok",
      "ya no es scam",
      "",
      "no ganaste una promoción",
      "pero sí desbloqueaste algo mejor 💌",
      "",
      "RecomMusic nunca tuvo promociones",
      "pero si tuviera una sería recomendarte a ti 🎵",
      "porque honestamente eres mi canción favorita",
      "y no pienso saltarla nunca 💛"
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
