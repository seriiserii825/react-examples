import React, {useEffect, useRef, useState} from 'react';

function setDefaultValue () {
  const userCount = localStorage.getItem('count');
  return userCount ? +userCount : 0;
}

const Timer = () => {
  const [count, setCount] = useState(setDefaultValue());
  const [isCounting, setIsCounting] = useState(false);
  const timerIdRef = useRef(0);
  console.log('isCounting', isCounting);
  const handleStart = () => {
    setIsCounting(true);
  }
  
  function handleStop () {
    setIsCounting(false);
  }

  function handleReset () {
    setCount(0);
    setIsCounting(false)
  }
  
  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);
  //
  useEffect(() => {
    if (isCounting) {
      timerIdRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timerIdRef.current)
    }
  }, [isCounting])
  //
  return (
    <div className="App">
      <h1>React Timer</h1>
      <h3>{count}</h3>
      <hr/>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
export default Timer;
