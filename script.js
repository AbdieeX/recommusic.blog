const giftBtn = document.getElementById("giftBtn");
const mainScreen = document.getElementById("mainScreen");
const consoleScreen = document.getElementById("consoleScreen");
const consoleText = document.getElementById("consoleText");

const logo = `
RecomMusic v1.0
-----------------------
`;

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
    startTyping();
  }, 800);
});


function typeText(text, className, speed, callback){
  let container = document.createElement("div");
  if(className) container.classList.add(className);
  consoleText.appendChild(container);

  let i = 0;

  function typing(){
    if(i < text.length){
      container.textContent += text[i];
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

  typeText(logo, null, 5, function(){
    typeText(rose, "rose", 1, function(){
      typeText(commands, "commands", 15);
    });
  });
}
