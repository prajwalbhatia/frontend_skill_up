import { useState } from "react";

// import "./styles.css";

import Step from "../src/Components/Step/Step";
import Steps from "../src/Components/Steps/Steps";

export default function App() {
  const [current, setCurrent] = useState("");

  const onChange = (data) => {
    setCurrent(data);
  };

  return (
    <Steps current={current} onChange={onChange}>
      <Step title="Step 1" description="This is Step 1" />

      <Step title="Step 2" description="This is Step 2" />

      <Step title="Step 3" description="This is Step 3" />

      <Step title="Step 4" description="This is Step 3" />


      <Step title="Step 5" description="This is Step 3" />


      <Step title="Step 6" description="This is Step 3" />

    </Steps>
  );
}
