const BOXES = 5;
let boxBlueCount = 0;
let index = 0;
let boxClicked = 0;
let score = 0;
let highScore = 0;
let gameActive = false;
let level = 0;

let boxContainer = document.getElementById('box-container');
let scoreElm = document.getElementById('score');
let highScoreElm = document.getElementById('high-score');
let btn = document.getElementById('btn');

let gameBoxActive = {

}

let prevBlock = null;

function drawMemoryBox(boxes) {
  for (let index = 0; index < boxes; index++) {
    let box = createBox(index);
    boxContainer.appendChild(box);
  }
}

function createBox(key) {
  const elm = document.createElement('div');
  elm.classList.add('box');
  elm.dataset.key = key;

  return elm;
}

function btnClick() {
  gameActive = true;
  startGame();
}

function startGame() {
  let count = boxBlueCount;
  let interval;

  interval = setInterval(() => {
    if (count > 0) {
      if (prevBlock) {
        prevBlock.style.backgroundColor = '#e5e5e5';
      }
      let randomNum = Math.floor(Math.random() * (BOXES - 1));

      let getBox = document.querySelector(`[data-key="${randomNum}"]`);
      gameBoxActive[index] = getBox;
      index++;


      prevBlock = getBox;
      getBox.style.backgroundColor = 'blue';
    }

    if (count === 0) {
      prevBlock.style.backgroundColor = '#e5e5e5';
      clearInterval(interval);
    }
    count--;

    console.log(gameBoxActive)
  }, 200)
}

function boxContainerFun() {
  boxContainer.addEventListener('click', (e) => {
    if (boxClicked < boxBlueCount && gameActive) {
      let className = e.target.className;
      let clickedElm = e.target;
      
      if (className === 'box') {
        if (clickedElm === gameBoxActive[boxClicked]) {
          console.log(true)
          clickedElm.style.backgroundColor = 'blue';

          setTimeout(() => {
            clickedElm.style.backgroundColor = '#e5e5e5';
          }, 300);
          score++;
          console.log(highScore, score)
          if (highScore < score) {
            highScore++;
            localStorage.setItem('highScore', highScore);
          }
          scoreElm.innerHTML = score;
          highScoreElm.innerHTML = highScore;
          if(boxClicked === boxBlueCount - 1)
          {
            gameChanger('win');
          }
          else{
          boxClicked++;
          }
        }
        else {
          clickedElm.style.backgroundColor = 'red';
          boxContainer.classList.add('shake');
          setTimeout(() => {
            boxContainer.classList.remove('shake');
            clickedElm.style.backgroundColor = '#e5e5e5';
          }, 300)
          boxClicked++;
          gameChanger('loose');

        }
      }
    }
  })
}

function gameChanger(gameType)
{
  if(gameType === 'win')
  {
    level++;
    boxBlueCount = level + 2;
  }
  else
  {
    level = 0;
    boxBlueCount = 0;
  }
  
  console.log('LEVEL' , level)
  gameBoxActive = {};
  gameActive = false;
  score = 0;
  
  index = 0;
  // boxContainerFun();
  boxClicked = 0;
  prevBlock = null;


  if (gameType === 'win') {
    setTimeout(() => {
      alert('NEXT LEVEL')
      scoreElm.innerHTML = score;
    }, 1000);
  }
  else
  {
    setTimeout(() => {
      alert('GAME OVER')
      scoreElm.innerHTML = score;
    }, 1000);
  }
}

function main() {
  let highS = localStorage.getItem('highScore') ? localStorage.getItem('highScore') : 0;
  console.log(highS)
  highScore = highS;
  highScoreElm.innerHTML = highScore;

  boxBlueCount = level + 2;

  drawMemoryBox(BOXES);
  boxContainerFun();

  btn.addEventListener('click', btnClick);
}

main();


