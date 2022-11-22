(function () {
  let hour = document.querySelector(".hour");
  let min = document.querySelector(".minute");
  let sec = document.querySelector(".sec");

  let startBtn = document.querySelector(".start");
  let stopBtn = document.querySelector(".stop");
  let resetBtn = document.querySelector(".reset");

  let countDownTimer = null;

  startBtn.addEventListener('click', () => {
    if (hour.value == 0 && min.value == 0 && sec.value == 0) return;

    function startInterval() {
      startBtn.style.display = 'none'
      stopBtn.style.display = 'initial'

      countDownTimer = setInterval(() => {
        timer();
      }, 1000);
    }

    startInterval();
  });

  stopBtn.addEventListener('click', () => {
    stopInterval('pause');
  });

  resetBtn.addEventListener('click', () => {
    hour.value = "";
    min.value = "";
    sec.value = "";
    stopInterval();
  });

  function stopInterval(state) {
    startBtn.innerHTML = state === 'pause' ? 'Continue' : 'Start';
    startBtn.style.display = 'initial'
    stopBtn.style.display = 'none'
    clearInterval(countDownTimer);
  }

  function timer() {
    if (sec.value > 60) {
      min.value = `${min.value <= 10 ? "0" : ""}${min.value + 1}`;
      sec.value = parseInt(sec.value) - 59;
    }

    if (min.value > 60) {
      hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value + 1}`;
      min.value = parseInt(min.value) - 59;
    }

    if (hour.value == 0 && min.value == 0 && sec.value == 0) {
      hour.value = "";
      min.value = "";
      sec.value = "";
      stopInterval();
    }
    else if (sec.value != 0) {
      sec.value = `${sec.value <= 10 ? "0" : ""}${sec.value - 1}`;
    }
    else if (min.value != 0 && sec.value == 0) {
      sec.value = 59;
      min.value = `${min.value <= 10 ? "0" : ""}${min.value - 1}`;
    }
    else if (hour.value != 0 && min.value == 0) {
      min.value = 60;
      hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
    }
  }

})()