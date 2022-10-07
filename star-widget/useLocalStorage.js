// // Write custom hook implementation here.
// import React, { useEffect, useState } from 'react';

// function useLocalStorage(key, value) {
//   const [storage, setStorage] = useState(value);

//   useEffect(() => {
//     if (window && key && value) {
//       const item = window.localStorage.getItem(key);
//       if (!item) {
//         window.localStorage.setItem(key, JSON.stringify(value));
//       } else {
//         const val = JSON.parse(item);
//         setStorage(val);
//       }
//     }
//   }, []);

//   function setValue(val) {
//     if (window && val) {
//       window.localStorage.setItem(key, JSON.stringify(val));
//       setStorage(val);
//     }
//   }

//   return [storage, setValue];
// }

// export default useLocalStorage;




//OTHER FILE

// import * as React from 'react';
// import './style.css';

// import useLocalStorage from './useLocalStorage';

// export default function App() {
//   const [storedValue, setStoredValue] = useLocalStorage('theme', 'dark');

//   console.log(storedValue);

//   return (
//     <div className="container">
//       <h1>useLocalStorage</h1>
//       <span>Algochurn</span>
//       <p>Read the description to start solving the problem</p>
//       {/* Write your code here */}

//       <select
//         className="select"
//         value={storedValue}
//         onChange={(e) => setStoredValue(e.target.value)}
//       >
//         <option value="dark">Dark</option>
//         <option value="light">Light</option>
//       </select>

//       <p className="desc">
//         Value from local storage: <span>{storedValue}</span>
//       </p>
//     </div>
//   );
// }

