document.addEventListener("DOMContentLoaded", () => {
  // Variables from HTML document
  const break_label = document.getElementById("break-label");
  const break_decr = document.getElementById("break-decrement");
  const break_incr = document.getElementById("break-increment");
  const session_label = document.getElementById("session-label");
  const session_decr = document.getElementById("session-decrement");
  const session_incr = document.getElementById("session-increment");
  const break_len = document.getElementById("break-length");
  const session_len = document.getElementById("session-length");
  const timer_label = document.getElementById("timer-label");
  //const time_left = document.getElementById("time-left");
  let min_left = document.getElementById("min-left");
  let sec_left = document.getElementById("sec-left");
  const start_stop = document.getElementById("start_stop");
  const reset = document.getElementById("reset");

  // Global variables
  let isClockRunning;
  // Setting the default values
  (function setDefaultValues() {
    isClockRunning = false
    break_len.value = 5;
    session_len.value = 25;
    min_left.innerText = displayNumInTens(0);
    sec_left.innerText = displayNumInTens(0);
  })()(
    // The last opening bracket is a result of formatting extension

    // Functions to Increase and decrease break and session length values
    (function breakAndSessionCtrls() {
      // Increment fuction
      function increment(elem) {
        if (elem.value == 60) {
          elem.value = elem.value;
        } else {
          elem.value = parseInt(elem.value) + 1;
        }
      }
      // Decrement function for
      function decrement(elem) {
        if (elem.value == 0) {
          elem.value = elem.value;
        } else {
          elem.value = parseInt(elem.value) - 1;
        }
      }
      // Break Increment event
      break_incr.addEventListener("click", () => {
        increment(break_len);
      });
      // Break Decrement event
      break_decr.addEventListener("click", () => {
        decrement(break_len);
      });

      // Session Increment event
      session_incr.addEventListener("click", () => {
        increment(session_len);
      });
      // Session Increment event
      session_decr.addEventListener("click", () => {
        decrement(session_len);
      });
    })()
  ); // Immidiately invoked function

  // ====================================================

  // function updateValue(elem, val) {
  //   elem.value = val;
  // }

  function displayNumInTens(num) {
    if (num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }
  function countDown(init_min) {
    console.log(init_min);
    min_left.innerText = displayNumInTens(init_min - 1);
    sec_left.innerText = 59;
    let timer = setInterval(() => {
      sec_left.innerText = displayNumInTens(parseInt(sec_left.innerText) - 1);
      if (parseInt(sec_left.innerText) < 1) {
        min_left.innerText -= displayNumInTens(1);
        sec_left.innerText = 59;
        if (parseInt(min_left.innerText) < 0) {
          min_left.innerText = displayNumInTens(0);
          sec_left.innerText = displayNumInTens(0);
          clearInterval(timer);
        }
      }
    }, 1000);
  }
  function clock() {
    countDown(session_len);
  }
  function reset_timer() {
    min_left.innerText = displayNumInTens(0);
    sec_left.innerText = displayNumInTens(0);
    break_len.value = 5;
    session_len.value = 25;
    //  clearInterval(upd_sec);
  }

  start_stop.addEventListener("click", () => {
    countDown(parseInt(session_len.value));
  });
  reset.addEventListener("click", reset_timer);

  let isRunning = false;
  // in seconds = 25 mins
  let workSessionDuration = 1000 * 60 * parseInt(session_len.value);
  let currentTimeLeftInSession = min_left.innerText * 60 + sec_left.innerText;

  // in seconds = 5 mins;
  let breakSessionDuration = 1000 * 60 * parseInt(break_len.value);

  const toggleClock = reset => {
    if (reset) {
      // STOP THE TIMER
    } else {
      if (isClockRunning === true) {
        // PAUSE THE TIMER
        isClockRunning = false;
      } else {
        // START THE TIMER
        isClockRunning = true;
      }
    }
  };
});
