import { useState } from "react";
import { useAsync } from "./customHooks/useAsync";
import { useIdle } from "./customHooks/useIdle";
import { usePrevious } from "./customHooks/usePrevious";
import { useResponsive } from "./customHooks/useResponsive";
import { useWhyDidYouUpdate } from "./customHooks/useWhyDidYouUpdate";

import React from "react";

// const PreviousHookPractice = () => {
//   const [count, setCount] = useState(0);
//   // get the previous value passed into the hook on the last render
//   const prevCount = usePrevious(count);
//   // show both current and previous value
//   return (
//     <div>
//       <h1>
//         Now: {count}, before: {prevCount}
//       </h1>
//       <button onClick={() => setCount(count - 1)}>Decrement </button>
//     </div>
//   );
// };
// export default PreviousHookPractice;


// const IdleHookPractice = () => {
//   const isIdle = useIdle(2000);
//   return (
//     <div>
//       <h1> IsIdle: {isIdle ? "true" : "false"} </h1>
//     </div>
//   );
// };

// export default IdleHookPractice;


//dummy api call
// const fakeApiCall = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const rnd = Math.random() * 10;
//       rnd <= 5 ? resolve("Success") : reject("Error");
//     }, 1000);
//   });
// };

// const AsyncHookPractice = () => {
//   const { status, value, error } = useAsync(fakeApiCall);
//   console.log('🚀 ~ file: hooksPractice.js:47 ~ AsyncHookPractice ~ status', status);
//   return (
//     <div>
//       <div> Status: {status} </div>
//       <div> Value: {value} </div>
//       <div> error: {error} </div>
//     </div>
//   );
// };

// export default AsyncHookPractice;


// const ResponsiveHookPractice = () => {
//   const { isMobile, isTablet, isDesktop } = useResponsive();
//   console.log(isMobile, isTablet, isDesktop);
//   return <></>;
// };

// export default ResponsiveHookPractice;


const Counter = React.memo((props) => {
  useWhyDidYouUpdate("Counter", props);
  return <div style={props.style} > {props.count} </div>;
});

function WhyDidYouUpdatePractice() {
  const [count, setCount] = useState(0);
  const [testCase, setTestCase] = useState(null);
  const counterStyle = {
    fontSize: "3rem",
    color: "red",
  };
  
  return (
    <div>
      <div className="counter" >
        <Counter
          count={count}
          style={counterStyle}
          testCaseWithArray={testCase}
          function={() => console.log(count)}
        />
        <button
          onClick={() => {
            setCount(count + 1);
            setTestCase([count + 1]);
          }}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default WhyDidYouUpdatePractice;
