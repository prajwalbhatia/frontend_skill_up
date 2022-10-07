import React, { useEffect } from 'react';

import useKeyDownHandler from '../Hooks/useKeyDownHandler';

import '../App.css';
import SearchModal from './SearchModal';

const Home = () => {
  const [control , setControl] = useKeyDownHandler('Control');
  console.log('🚀 ~ file: Home.js ~ line 7 ~ Home ~ control', control);
  const [K , setK] = useKeyDownHandler('K');
  const [modal , setModal] = useKeyDownHandler(false);

  console.log('🚀 ~ file: Home.js ~ line 9 ~ Home ~ K', K);
  // const k = useKeyDownHandler('k');

  // useEffect(() => {
  //   const callback = (event) => {
  //     if ((event.metaKey || event.ctrlKey) && event.code === 'KeyK') {
  //       // setModal((modal) => !modal);
  //       console.log('COMMAND')
  //     }
  //   };
  //   document.addEventListener('keydown', callback);
  //   return () => {
  //     document.removeEventListener('keydown', callback);
  //   };
  // } , [])

  useEffect(() => {
    if(control && K)
    {
      console.log('COMMAND');

      setModal(true);
      setControl(false);
      setK(false);
    }
  } , [control , K])


  return (
    <>
    {true && <SearchModal/>}
    <div className="container">
      <h1>Command Palette</h1>
      <p>Read the description to start solving the problem. 💯</p>
      <p className="desc">
        <span>CMD + K</span> should open a Search Modal to navigate through
        website pages.
      </p>
    </div>
    </>
  );
};

export default Home;
