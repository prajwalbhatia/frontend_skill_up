import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import InputForward from './inputForward';
import MemoFIle from './memoFile';
import PortalDemo from './portalDemo';
import HeroName from './HeroName';
import ErrorBoundary from './ErrorBoundary';
import HooksPractice from './hooksPractice';

function App() {
  const inputRef = useRef();
  const [name, setName] = useState('');
  console.log('PARENT COMPONENT')
  const clickHandler = () => {
    inputRef.current.focus();
  }

  useEffect(() => {
    setInterval(() => {
      setName('Prajwal')
    }, 1000);
  }, [])

  return (
    <div className="App">
      
    <HooksPractice/>

      {/* <ErrorBoundary>
        <HeroName name={'Joker'} />

      </ErrorBoundary>

      <ErrorBoundary>
        <HeroName name={'BATMAN'} />

      </ErrorBoundary> */}
      {/* <PortalDemo/> */}
      {/* <MemoFIle name={name}/> */}
      {/* <InputForward ref={inputRef}/>
      <button onClick={clickHandler}>Click</button> */}
    </div>
  );
}

export default App;
