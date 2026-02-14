document.addEventListener("DOMContentLoaded", function(){

  const mainScreen = document.getElementById("mainScreen");
  const giftBtn = document.getElementById("giftBtn");
  const argScreen = document.getElementById("argScreen");
  const pistasContainer = document.getElementById("pistasContainer");
  const finalScreen = document.getElementById("finalScreen");
  const finalText = document.getElementById("finalText");

  // Lista de pistas: música, QFB, baile folkrole
  const pistas = [
    "💛", "🎵", "🎶", "🎧", // música
    "🧪", "⚗️", "💊",       // QFB
    "💃", "🎶🇲🇽"            // folkrole mexicano
  ];
  let pistasTocadas = 0;

  // Inicializa el ARG
  giftBtn.addEventListener("click", ()=>{
    mainScreen.style.display="none";
    argScreen.style.display="block";

    pistas.forEach(p=>{
      const span = document.createElement("span");
      span.textContent = p;
      span.classList.add("pista");
      span.addEventListener("click", ()=>{
        if(!span.classList.contains("tocado")){
          span.classList.add("tocado");
          pistasTocadas++;
          // Efecto soft: mini confeti
          span.textContent = p + " ✨";
          setTimeout(()=>{span.textContent=p},300);
          // Si encontró todas → carta final
          if(pistasTocadas === pistas.length){
            setTimeout(()=>showFinal(),500);
          }
        }
      });
      pistasContainer.appendChild(span);
    });
  });

  function showFinal(){
    argScreen.style.display="none";
    finalScreen.style.display="block";
    const lines=[
      "💛 ¡Hola!","",
      "Solo quería que te divirtieras explorando 🎵",
      "Eres increíble y me alegra que estés aquí 💌",
      "Gracias por buscar todas las pistas conmigo 🥰"
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
