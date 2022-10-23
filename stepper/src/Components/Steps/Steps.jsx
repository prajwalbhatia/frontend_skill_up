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

        if (prevSibling === null || nxtSibling === null)
        {
          elm.style.background = "blue";
        }

        if (prevSibling) {
          while (prevSibling !== null) {
            prevSibling.style.background = "blue";
            prevSibling = prevSibling.previousSibling;
          }
        }

        if (nxtSibling) {
          while (nxtSibling !== null) {
            nxtSibling.style.background = "red";
            nxtSibling = nxtSibling.nextSibling;
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
