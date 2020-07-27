const bk_label = document.getElementById("break-label");
const bk_decr = document.getElementById("break-decrement");
const bk_incr = document.getElementById("break-increment");

const ses_label = document.getElementById("session-label");
const ses_decr = document.getElementById("session-decrement");
const ses_incr = document.getElementById("session-increment");

const bk_len = document.getElementById("break-length");
const ses_len = document.getElementById("session-length");
const timer_label = document.getElementById("timer-label");
const time_left = document.getElementById("time-left");
const min_left = document.getElementById("min-left");
let sec_left = document.getElementById("sec-left");

const start_stop = document.getElementById("start_stop");
const reset = document.getElementById("reset");

bk_len.value = 5;
ses_len.value = 1;

// Increasing and decreasing time length
function decrement(elem) {
  if (elem.value == 0) {
    elem.value = elem.value;
  } else {
    elem.value = parseInt(elem.value) - 1;
  }
}
function increment(elem) {
  if (elem.value == 60) {
    elem.value = elem.value;
  } else {
    elem.value = parseInt(elem.value) + 1;
  }
}
bk_decr.addEventListener("click", () => {
  decrement(bk_len);
});
bk_incr.addEventListener("click", () => {
  increment(bk_len);
});
ses_decr.addEventListener("click", () => {
  decrement(ses_len);
});
ses_incr.addEventListener("click", () => {
  increment(ses_len);
});
// ====================================================

function updateValue(elem, val) {
  elem.value = val;
}
function countDown() {
  sec_left.value = sec_left.value - 1;
  console.log(sec_left.value);
  if (sec_left.value < 1) {
    sec_left.value = 59;
    min_left.value = min_left.value - 1;
  }

  if (min_left.value < 1) {
    min_left.value = "00";
  }
}

function reset_timer() {
  min_left.value = "00";
  sec_left.value = "00";
  clearInterval(upd_sec);
}

start_stop.addEventListener("click", control);
reset.addEventListener("click", reset_timer);

function Interval(fn, time) {
  var timer = false;
  this.start = function () {
    if (!this.isRunning()) timer = setInterval(fn, time);
  };
  this.stop = function () {
    clearInterval(timer);
    timer = false;
  };
  this.isRunning = function () {
    return timer !== false;
  };
  this.reset = function () {
    clearInterval(timer);
    timer = false;
  };
}

function control() {
  var i = new Interval(countDown, 1000);
  i.start();
}

// if (i.isRunning())
//   // ...

//   i.stop();
