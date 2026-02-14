document.addEventListener("DOMContentLoaded", function(){

  const contador = document.getElementById("contador");
  const giftBtn = document.getElementById("giftBtn");
  const mainScreen = document.getElementById("mainScreen");
  const consoleScreen = document.getElementById("consoleScreen");
  const consoleText = document.getElementById("consoleText");

  /* 🔢 CONTADOR */
  let numero = 0;
  const objetivo = 99999;

  const intervalo = setInterval(function(){
    numero += 1379;

    if(numero >= objetivo){
      numero = objetivo;
      clearInterval(intervalo);
    }

    contador.textContent = numero.toLocaleString();
  }, 15);


  /* 🖥 LOGO */
  const logo =
"██████╗ ███████╗ ██████╗ ██████╗ ███╗   ███╗\n" +
"██╔══██╗██╔════╝██╔════╝██╔═══██╗████╗ ████║\n" +
"██████╔╝█████╗  ██║     ██║   ██║██╔████╔██║\n" +
"██╔══██╗██╔══╝  ██║     ██║   ██║██║╚██╔╝██║\n" +
"██║  ██║███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║\n" +
"╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝\n\n";

  /* 🌹 ROSA */
  const rose =
"       :                       ..,,..    ...,,..\n" +
"      ,%,                .. ,#########::#########:, \n" +
"      :#%%,           ,,:',####%%%%%%##::%%%%####,\n" +
"     ,##%%%%,      ,##%% ,##%%%:::::''%' :::::%%####,\n" +
"     %###%%;;,   ,###%%:,##%%:::''    '  . .:::%%###,\n" +
"    :####%%;;:: ,##%:' ,#%::''   .,,,..    . .::%%%##,\n" +
"    %####%;;::,##%:' ,##%''  ,%%########%     . :::%%##,\n" +
"    ######:::,##%:',####:  ,##%%:''     %% ,     .::%%##,\n" +
"                       ~~~~~~~~~~~~~~~\n\n";

  const commands =
"> hola no sé que te quiero mucho\n" +
"> Abdiel\n";


  giftBtn.addEventListener("click", function(){

    giftBtn.disabled = true;
    giftBtn.innerText = "Cargando regalo...";

    setTimeout(function(){
      mainScreen.classList.add("hidden");
      consoleScreen.classList.remove("hidden");
      startTyping();
    }, 800);
  });


  function typeBlock(text, className, speed, callback){

    const div = document.createElement("div");
    if(className) div.className = className;
    consoleText.appendChild(div);

    let i = 0;

    function typing(){
      if(i < text.length){
        div.textContent += text.charAt(i);
        i++;
        setTimeout(typing, speed);
      } else if(callback){
        callback();
      }
    }

    typing();
  }


  function startTyping(){
    consoleText.innerHTML = "";

    typeBlock(logo, "logo", 2, function(){
      typeBlock(rose, "rose", 1, function(){
        typeBlock(commands, "commands", 15);
      });
    });
  }

});
