import React , {useEffect , useState } from 'react'

function useKeyDownHandler(key) {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log(e.key)
      if(e.key === key)
      {
        setKeyPressed(true);
      }
    }

    const handleKeyUp = (e) => {
      console.log(e.key)
      if (e.key === key) {
        setKeyPressed(false);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);


    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);

    }
  } , []);


  const setData = (val) => {
    setKeyPressed(val);
  }

  return [keyPressed , setData];
}

export default useKeyDownHandler