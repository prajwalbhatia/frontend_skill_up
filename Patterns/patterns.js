const patternDiv = document.querySelector('.patterns');
const squarePattern = document.querySelector('.square-pattern');
const trianglePattern = document.querySelector('.triangle-pattern');
const trianglePatternNumber = document.querySelector('.triangle-pattern-number');
const trianglePatternNumber2 = document.querySelector('.triangle-pattern-number-2');
const invertedTrianglePattern = document.querySelector('.inverted-triangle-pattern');
const eqiTrianglrePattern = document.querySelector('.eqi-triangle-pattern');


function printSquare(side) {
  let output = '';
  for (let i = 0; i < side; i++) {
    for (let j = 0; j < side; j++) {
      output += '*'
    }
    const div = document.createElement('div');
    div.innerHTML = output;
    squarePattern.appendChild(div);
    output = ''
  }
}

function printTriangle(row) {
  let output = '';
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= i; j++) {
      output += '*'
    }
    const div = document.createElement('div');
    div.innerHTML = output;
    trianglePattern.appendChild(div);
    output = ''
  }
}

function printTriangleNumber(row) {
  let output = '';
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= i; j++) {
      output += `${j.toString()}`
    }
    const div = document.createElement('div');
    div.innerHTML = output;
    trianglePatternNumber.appendChild(div);
    output = ''
  }
}

function printTriangleNumber2(row) {
  let output = '';
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= i; j++) {
      output += `${i.toString()}`
    }
    const div = document.createElement('div');
    div.innerHTML = output;
    trianglePatternNumber2.appendChild(div);
    output = ''
  }
}

function invertedTriangle(row) {
  let output = '';
  for (let i = row; i >= 1; i--) {
    for (let j = row; j >= row - i + 1; j--) {
      output += `${j.toString()}`
    }
    const div = document.createElement('div');
    div.innerHTML = output;
    invertedTrianglePattern.appendChild(div);
    output = ''
  }
}

function eqiTriangle(row) {
  let output = '';
  for (let i = 1; i <= row; i++) {
    // printing spaces
    for (let j = 1; j <= row - i; j++) {
      output += "0";
    }
    // printing star
    for (let k = 0; k < 2 * i - 1; k++) {
      output += "*";
    }
    const div = document.createElement('div');
    div.innerHTML = output;
    eqiTrianglrePattern.appendChild(div);
    output = ''
  }
}


printSquare(7)
printTriangle(7)
printTriangleNumber(7)
printTriangleNumber2(7)
invertedTriangle(7)
eqiTriangle(3)