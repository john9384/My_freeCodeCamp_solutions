const input = document.querySelectorAll(".input_btn");
const display = document.getElementById("display");
const equal = document.getElementById("equals");
const clear = document.getElementById("clear");
let len = display.value.length;
input.forEach(input => {
  input.addEventListener("click", function () {
    let input_arr = display.value.split("");

    if (display.value.length > 1) {
      if (input.value == "." && checkPrev(input_arr, input.value)) {
        display.value = display.value + "";
      } else {
        display.value = display.value + input.value;
      }
    } else if (display.value == 0) {
      if (input.value == ".") {
        display.value = display.value + input.value;
      } else {
        display.value = input.value;
      }
    } else {
      display.value = display.value + input.value;
    }
  });
});
clear.addEventListener("click", function () {
  display.value = 0;
});
equal.addEventListener("click", function () {
  if (display.value.includes("..")) {
    let edit_display = display.value.replace("..", ".");
    display.value = eval(edit_display);
  }

  display.value = eval(display.value);
});

// Check if the last input in equal to the current input
const checkPrev = (arr, val) => (val == arr[arr.length - 1] ? true : false);
