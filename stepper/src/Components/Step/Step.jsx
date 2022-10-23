import React from "react";

import "./Step.css";

function Step({ title, description, stepClicker }) {
  return (
    <div data-key={title} id={title} className="step">
      <div data-key={title} className="circle">
        {title.split(' ')[1]}
      </div>
      <div data-key={title} className="data-container">
        <span data-key={title}>{title}</span>
        <span data-key={title}>{description}</span>
      </div>
    </div>
  );
}

export default Step;
