// const mainContainer = document.querySelector('#main-container');

// mainContainer.addEventListener('mouseover', (e) => {
//   if (e.target.nodeName === "I") {
//     console.log('TARGET' , e.target)
//     const emptyClassName = "fa fa-star-o";
//     const filledClassName = "fa fa-star";
//     const nextSibling = e.target.nextElementSibling;
//     const prevSibling = e.target.previousElementSibling;
//     const classOfTarget = e.target.className;

//     if (classOfTarget === emptyClassName)
//     {
//       if (!prevSibling) {
//         e.target.className = filledClassName
//       }

//       if(prevSibling && prevSibling.className === filledClassName)
//       {
//         e.target.className = filledClassName
//       }
//     }
//     else
//     {
//       if (!nextSibling) {
//         e.target.className = emptyClassName
//       }

//       if (nextSibling && nextSibling.className === emptyClassName) {
//         e.target.className = emptyClassName
//       }
//     }
    
//   }
// });


// mainContainer.addEventListener('click' , (e) => {
//   console.log('CLICK', e.target)
//   const id = e.target.id;
//   console.log('CLICK', id)
//   const textContainer = document.querySelector('#counter-para');
//   console.log('CLICK', textContainer)
//   const starValue = id && id.split('-');
//   console.log('CLICK', starValue)

//   textContainer.innerHTML = Number(starValue[1]); 
// });


function Star(el, count, callback) {
  let active = -1;
  const element = document.querySelector(el);
  const fragment = document.createDocumentFragment();

  for (let i = 1; i <= count; i++) {
    const iElem = document.createElement("i");
    iElem.classList.add("fa");
    iElem.classList.add("fa-star-o");
    iElem.dataset.ratingVal = i;
    fragment.appendChild(iElem);
  }
  element.appendChild(fragment);
  element.addEventListener("mouseover", onMouseOver);
  element.addEventListener("click", onClick);
  element.addEventListener("mouseleave", onMouseLeave);

  function onMouseOver(e) {
    const ratingVal = e.target.dataset.ratingVal;
    if (!ratingVal) {
      return;
    }
    fill(ratingVal);
  }

  function fill(ratingVal) {
    for (let i = 0; i < count; i++) {
      if (i < ratingVal) {
        element.children[i].classList.add("fa-star");
      } else {
        element.children[i].classList.remove("fa-star");
      }
    }
  }

  function onMouseLeave(e) {
    fill(active);
  }

  function onClick(e) {
    active = e.target.dataset.ratingVal;
    fill(active);
    callback(active);
  }

}

function getStar(value) {
  document.getElementById('display-star-value').innerHTML = value;
}

Star("#star", 5, getStar);
