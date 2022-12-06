// const debounceFun = (callback , d) => {
//   let timer;
//   return function (...args)
//   {
//       if(timer) clearTimeout(timer);
//       timer = setTimeout(() => {
//         callback(...args)
//       }, d);
//   }
// }


// function value ()
// {
//   console.log('abc')
// }


// const debounced = debounceFun(value, 1000);
// debounced();


//REACT EXAMPLE
// import "./styles.css";

// export default function App() {
//   const debounceFun = (callback, d) => {
//     let timer;
//     return function (...args) {
//       if (timer) clearTimeout(timer);
//       timer = setTimeout(() => {
//         callback(...args);
//       }, d);
//     };
//   };

//   const handleChange = (e) => {
//     debounceFun(() => {
//       console.log(e.target.value);
//     }, 1000)();
//   };

//   return (
//     <div className="App">
//       <input onChange={handleChange} />
//     </div>
//   );
// }