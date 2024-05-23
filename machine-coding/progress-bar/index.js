const runButton = document.querySelector("#run-btn");
const buttonCount = document.querySelector("#btn-count");
const stopBtn = document.querySelector("#stop-btn");
const replayBtn = document.querySelector("#replay-btn");
const clearBtn = document.querySelector("#clear-btn");
const progress = document.querySelector("#progress");

let btnCount = 0;
let progressVal = 0;
let interval;

function updateButtonCount(btnCount) {
  buttonCount.innerText = btnCount;
}

function updateProgress(progressVal) {
  progress.style.width = `${progressVal}%`;
}

runButton.addEventListener("click", () => {
  btnCount = btnCount + 1;
  updateButtonCount(btnCount);
  if (btnCount === 1) progressFun();
});

stopBtn.addEventListener("click", () => {
  if (btnCount && interval) {
    clearInterval(interval);
    interval = null;
  }
});

replayBtn.addEventListener("click", () => {
  if (btnCount && !interval) progressFun();
});

clearBtn.addEventListener("click", () => {
  if (btnCount) clearInterval(interval);
  btnCount = 0;
  progressVal = 0;

  updateProgress(progressVal);
  updateButtonCount(btnCount);
});

function progressFun() {
  interval = setInterval(() => {
    if (progressVal < 100) {
      progressVal = progressVal + 20;
      updateProgress(progressVal);
    } else {
      clearInterval(interval);
      progressVal = 0;
      updateProgress(progressVal);
      btnCount = btnCount - 1;
      updateButtonCount(btnCount);

      if (btnCount > 0) progressFun();
    }
  }, 1000);
}
