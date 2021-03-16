import React, {useEffect, useState} from "react";

const Clicker = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log('clicker', counter);
  }, [counter]);
  return (
    <div className="counter flex">
      <button className="flex-1 border-2 border-red-500" onClick={() => setCounter(counter - 1)}>-</button>
      <span className="flex-1 bg-green-300 text-center text-2xl p-4 hover:bg-blue-300 transition duration-300 shadow-inner from-gray-200">{counter}</span>
      <button className="flex-1 bg-green-400" onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
};
export default Clicker;
