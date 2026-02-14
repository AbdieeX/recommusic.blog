const giftBtn = document.getElementById("giftBtn");
const mainScreen = document.getElementById("mainScreen");
const consoleScreen = document.getElementById("consoleScreen");
const consoleText = document.getElementById("consoleText");

const rose = `
       :                       ..,,..    ...,,..
      ,%,                .. ,#########::#########:,
      :#%%,           ,,:',####%%%%%%##::%%%%####,
     ,##%%%%,      ,##%% ,##%%%:::::''%' :::::%%####,
     %###%%;;,   ,###%%:,##%%:::''    '  . .:::%%###,
    :####%%;;:: ,##%:' ,#%::''   .,,,..    . .::%%%##,
    %####%;;::,##%:' ,##%''  ,%%########%     . :::%%##,
    ######:::,##%:',####:  ,##%%:''     %% ,     .::%%##,
                       ~~~~~~~~~~~~~~~
`;

const commands = `
> hola no sé que te quiero mucho
> Abdiel
`;

giftBtn.addEventListener("click", function(){

  giftBtn.disabled = true;
  giftBtn.innerText = "Cargando regalo...";

  setTimeout(() => {
    mainScreen.classList.add("hidden");
    consoleScreen.classList.remove("hidden");

    typeRose();
  }, 1000);
});


function typeRose(){
  let i = 0;
  consoleText.innerHTML = "<span class='rose'></span>";

  const roseContainer = document.querySelector(".rose");

  function typing(){
    if(i < rose.length){
      roseContainer.textContent += rose[i];
      i++;
      setTimeout(typing, 8);
    } else {
      typeCommands();
    }
  }

  typing();
}


function typeCommands(){
  let i = 0;
  const cmdContainer = document.createElement("div");
  cmdContainer.classList.add("commands");
  consoleText.appendChild(cmdContainer);

  function typing(){
    if(i < commands.length){
      cmdContainer.textContent += commands[i];
      i++;
      setTimeout(typing, 30);
    }
  }

  typing();
}
