document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#otp-btn");
  const paragraph = document.querySelector("#para");
  const timerSpan = document.querySelector("#timer");

  let timer = 5000;
  let clockTimer = timer / 1000;

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
    let clock = setInterval(() => {
      if (clockTimer >= 1) {
        clockTimer = clockTimer - 1;
        timerSpan.innerText = clockTimer;
      }
    }, 1000);

    if (clockTimer === 0) {
      clearInterval(clock);
      clockTimer = timer / 1000;
    }

    timerSpan.innerText = clockTimer;
    console.log("POST OTP CALL");
  };

  button.addEventListener("click", throttle(handleBtnClick, timer));
});
