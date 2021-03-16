import React, {useEffect, useRef} from 'react';

const UseRef = () => {
  const inputEl = useRef();
  console.table(inputEl);
  useEffect(() => {
    console.table(inputEl);
  }, []);
  return (
    <div>
      <input type="text" placeholder="name" ref={inputEl}/>
    </div>
  );
};
export default UseRef;
