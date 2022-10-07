let progress = document.getElementById('progress');
let btn = document.getElementById('btn');

let count = 0;

function progresss() {
  let prog = 0;
  let interval;

  interval = setInterval(() => {
    if (prog <= 100) {
      progress.style.width = `${prog}%`;
      prog += 1;
    }
    else {
      console.log('log')
      clearInterval(interval);
      count--;
      btn.innerText = `RUN ${count}`;
      if (count > 0) {
        progresss();
      }

      if(count === 0)
      {
        progress.style.width = `${0}%`;
      }
    }
  }, 50)
}

function runProcess() {
  count++;
  btn.innerText = `RUN ${count}`;
  // while (count !== 0) {
  if (count === 1) {
    progresss();
  }
  // count--;
  // }
}

btn.addEventListener('click', () => runProcess())