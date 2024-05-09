document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#otp-btn");
  const paragraph = document.querySelector("#para");
  const timerSpan = document.querySelector("#timer");

  let timer = 5000;
  let clockTimer = timer / 1000;
  let clock = null;

  function throttle(callback, delay) {
    let waiting = false;

    return (...args) => {
      if (waiting) return false;

      callback(...args);
      waiting = true;

      setTimeout(() => {
        waiting = false;
      }, delay);
    };
  }

  const handleBtnClick = () => {
    paragraph.style.display = "block";
    timerSpan.innerHTML = clockTimer;

    clock = setInterval(() => {
      if (clockTimer >= 0) {
        clockTimer = clockTimer - 1;
        timerSpan.innerHTML = clockTimer;
      }

      if (clockTimer === -1) {
        clearInterval(clock);
        clockTimer = timer / 1000;
        timerSpan.innerHTML = clockTimer;
      }
    }, 1000);
    console.log("POST OTP CALL");
  };

  button.addEventListener("click", throttle(handleBtnClick, timer));
});
