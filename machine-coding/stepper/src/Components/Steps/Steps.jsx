import React, { useEffect } from "react";

import "./Steps.css";

function Steps({ current, onChange, children }) {
  useEffect(() => {
    window.addEventListener("click", (e) => {
      const keyVal = e.target.dataset?.key;
      if (e.target.dataset?.key && keyVal) {
        const key = `[data-key=${JSON.stringify(keyVal)}]`;
        console.log(key);
        const elm = document.querySelector(key);
        let prevSibling = elm.previousSibling;
        let nxtSibling = elm.nextSibling;

        if(elm)
        {
          elm.style.background = "white";
        }

        if (elm)
        {
          let val = +keyVal.split(" ")[1];

          let circle = elm.querySelector('.circle');
          let spanEl = elm.querySelector('.data');
          let spanEl1 = elm.querySelector('.data1');
          circle.innerHTML = val

          circle.style.background = "blue";
          spanEl.style.color = "#000";
          spanEl1.style.color = "#000";
          circle.style.color = 'white'
        }

        if (prevSibling) {
          while (prevSibling !== null) {
            let circle = prevSibling.querySelector('.circle');
            let spanEl = prevSibling.querySelector('.data');
            let spanEl1 = prevSibling.querySelector('.data1');

            circle.style.background = "blue";
            circle.innerHTML = "✅"
            circle.style.color = 'white';
            spanEl.style.color = "#000";
            spanEl1.style.color = "#000";
            prevSibling = prevSibling.previousSibling;
          }
        }

        if (nxtSibling) {
          let val = +keyVal.split(" ")[1] + 1;
          while (nxtSibling !== null) {
            let circle = nxtSibling.querySelector('.circle');
            let spanEl = nxtSibling.querySelector('.data');
            let spanEl1 = nxtSibling.querySelector('.data1');

            circle.innerHTML = val
            circle.style.background = "#fff";
            circle.style.color = "#e5e5e5";
            spanEl.style.color = "#e5e5e5";
            spanEl1.style.color = "#e5e5e5";

            nxtSibling = nxtSibling.nextSibling;
            val += 1;
          }
        }

        onChange(e.target.dataset?.key);
      }
    });

    return () => {
      window.removeEventListener("click", (e) => {
        onChange(e.target.id);
      });
    };
  }, []);


  return <div className="stepper-container">{children}</div>;
}

export default Steps;
