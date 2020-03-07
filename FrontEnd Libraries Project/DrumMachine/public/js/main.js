let pad = document.querySelectorAll(".drum-pad");
let display = document.getElementById("display");
let drum = document.getElementById("drum-machine");

for (let i = 0; i < pad.length; i++) {
  let text = pad[i].innerText;
  let sound = document.getElementById(text);

  pad[i].addEventListener("click", () => {
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
document.addEventListener("keydown", e => {
  let x = e.key.toUpperCase();
  for (let i = 0; i < pad.length; i++) {
    let text = pad[i].innerText;
    let sound = document.getElementById(text);
    console.log(x);
    if (pad[i].innerText === x) {
      sound.play();
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
    }
  }
});
