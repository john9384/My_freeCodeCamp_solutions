const bk_label = document.getElementById("break-label");
const bk_decr = document.getElementById("break-decrement");
const bk_incr = document.getElementById("break-increment");

const ses_label = document.getElementById("session-label");
const ses_decr = document.getElementById("session-decrement");
const ses_incr = document.getElementById("session-increment");

const bk_len = document.getElementById("break-length");
const ses_len = document.getElementById("session-length");
const timer_label = document.getElementById("timer-label");
//const time_left = document.getElementById("time-left");
let min_left = document.getElementById("min-left");
let sec_left = document.getElementById("sec-left");

const start_stop = document.getElementById("start_stop");
const reset = document.getElementById("reset");

setDefaultValues();

function setDefaultValues() {
  bk_len.value = 5;
  ses_len.value = 1;
  min_left.innerText = 00;
  sec_left.innerText = 00;
}

// Increment fuction
function increment(elem) {
  if (elem.value == 60) {
    elem.value = elem.value;
  } else {
    elem.value = parseInt(elem.value) + 1;
  }
}
// Decrement function
function decrement(elem) {
  if (elem.value == 0) {
    elem.value = elem.value;
  } else {
    elem.value = parseInt(elem.value) - 1;
  }
}
// Break Increment event
bk_incr.addEventListener("click", () => {
  increment(bk_len);
});
// Break Decrement event
bk_decr.addEventListener("click", () => {
  decrement(bk_len);
});

// Session Increment event
ses_incr.addEventListener("click", () => {
  increment(ses_len);
});
// Session Increment event
ses_decr.addEventListener("click", () => {
  decrement(ses_len);
});

// ====================================================
// function updateValue(elem, val) {
//   elem.value = val;
// }

function countDown() {
  // min_left.innerText = ses_len.value - 1;
  // sec_left.innerText -= 1;
  // console.log(sec_left.innerText);
  // if (parseInt(sec_left.innerText) < 1) {
  //   sec_left.innerText = 59;
  //   min_left.innerText -= 1;
  //   if (parseInt(min_left.innerText) < 0) {
  //     min_left.innerText = 0;
  //     sec_left.innerText = 0;
  //     //  clearInterval(this.timer);
  //   }
  // }
}

function reset_timer() {
  min_left.value = "00";
  sec_left.value = "00";
  clearInterval(upd_sec);
}

start_stop.addEventListener("click", countDown);
reset.addEventListener("click", reset_timer);

// function Interval(fn, time) {
//   this.fn = fn;
//   this.time = time;
//   this.timer;

//   this.start = function () {
//     this.timer = setInterval(this.fn, this.time);
//   };
//   this.stop = function () {
//     clearInterval(this.timer);
//     this.timer = false;
//   };
//   this.isRunning = function () {
//     return this.timer === true;
//   };
// }

// function control() {
//   let i = new Interval(countDown, 1000);
//   if (i.isRunning()) {
//     i.stop();
//   } else {
//     i.start();
//   }
// }

// if (i.isRunning())
//   // ...

//   i.stop();
