import React, {useEffect, useRef, useState} from 'react';
import "./my-timer.scss";

function defaultCounterFromLocalStorage () {
  if (localStorage.getItem('counter')) {
    return +localStorage.getItem('counter');
  } else {
    return 1;
  }
}

const MyTimer = () => {
  const [counter, setCounter] = useState(defaultCounterFromLocalStorage());
  const [isCounterWalking, setIsCounterWalking] = useState(false);
  const timerIdRef = useRef(0);
  
  function start () {
    setIsCounterWalking(true)
  }
  
  function stop () {
    setIsCounterWalking(false)
  }
  
  function reset () {
    setCounter(0);
    setIsCounterWalking(false);
  }
  
  useEffect(() => {
    localStorage.setItem('counter', counter);
  }, [counter])
  //
  useEffect(() => {
    if (isCounterWalking) {
      timerIdRef.current = setInterval(() => {
        setCounter((prev) => prev + 1)
      }, 1000)
    }
    return () => {
      clearInterval(timerIdRef.current)
    }
  }, [isCounterWalking]);
  return (
    <div className="my-timer">
      <div className="my-timer__container">
        <h3>{counter}</h3>
        <div className="my-timer__buttons">
          <button onClick={start}>Start</button>
          <button onClick={stop}>Stop</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
};
export default MyTimer;
