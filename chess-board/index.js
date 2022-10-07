/**
 * 
 * @param {String} el -> id of a parent class element 
 * @param {Number} boardSide -> side of chess board
 */
function createBoard(el, boardSide) {
  const element = document.querySelector(el);
  let startClass = 'white';
  for (let i = 1; i <= boardSide; i++) {
    const rowElem = document.createElement('div');
    rowElem.classList.add('row');
    rowElem.dataset.row = i;

    if (isEven(i)) {
      startClass = 'black';
    }
    else {
      startClass = 'white';
    }

    for (let j = 1; j <= boardSide; j++) {
      const iElem = document.createElement('i');
      iElem.classList.add('column');
      iElem.classList.remove('highlight');
      iElem.classList.add(startClass);
      iElem.dataset.column = j;
      iElem.dataset.row = i;
      iElem.id = `${i}${j}`
      // iElem.innerHTML = `[${i}][${j}]`

      rowElem.appendChild(iElem)

      if (startClass === 'black') {
        startClass = 'white';
      }
      else {
        startClass = 'black';
      }
    }
    element.appendChild(rowElem);
  }
}

/**
 * 
 * @param {Number} row - number of selected row
 * @param {Number} column - number of selected column
 * @param {Number} boardSide -> side of chess board
 */
function highlightDiagnal(row, column, boardSide) {
  removeHighlight(boardSide);
  for (let i = 1; i <= boardSide; i++) {
    for (let j = 1; j <= boardSide; j++) {
      if (j === column - row + i) {
        let elm = document.getElementById(`${i}${j}`);
        elm.classList.add('highlight');
        break;
      }
    }
  }

  for (let i = 1; i <= boardSide; i++) {
    for (let j = 1; j <= boardSide; j++) {
      if (j === row + column - i) {
        let elm = document.getElementById(`${i}${j}`);
        elm.classList.add('highlight');
        break;
      }
    }
  }
}

/**
 * 
 * @param {Number} boardSide -> side of chess board
 */
function removeHighlight(boardSide)
{
  for (let i = 1; i <= boardSide; i++) {
    for (let j = 1; j <= boardSide; j++) {
      let elm = document.getElementById(`${i}${j}`);
      if (elm.classList.contains('highlight')) {
        elm.classList.remove('highlight');
      }
    }
  }
}

/**
 * 
 * @param {Number} val -> val to check
 */
function isEven(val) {
  return val % 2 === 0 ? true : false;
}


function mainCall() {
  createBoard('#parent', 8);
  const parent = document.querySelector('#parent');
  parent.addEventListener('click', (e) => {
    if (e.target.nodeName === 'I') {
      const dataSet = e.target.dataset;
      highlightDiagnal(Number(dataSet.row), Number(dataSet.column), 8);
    }
  })

}
mainCall();

