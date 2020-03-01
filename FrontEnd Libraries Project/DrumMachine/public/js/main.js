let pad = document.querySelectorAll(".drum-pad");
let display = document.getElementById("display");

for (let i = 0; i < pad.length; i++) {
  let text = pad[i].innerText;
  pad[i].addEventListener("click", () => {
    let sound = document.getElementById(text);
    sound.play();
    //add the display
    let p = document.createElement("p");
    let instrumentName = pad[i].id;
    let pText = document.createTextNode(instrumentName);
    p.appendChild(pText);
    display.appendChild(p);
    //remove the display
    setTimeout(function() {
      let textPara = display.childNodes[0];
      textPara.remove();
    }, 1000);
  });
}
