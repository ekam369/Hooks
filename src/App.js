import React, { useState, useEffect } from "react";

function App() {
  const [ count, setCount ] = useState(0);
  
  useEffect(() => {
      // console.log('Mounted');
      // return function cleanup() {
      //   console.log('unmounted');
      // }
      console.log('changes')
     document.title = `You have clicked ${count} times`; 
  }, [count])

  return (
    <div>
      <p>You clicked {count} times</p>
        <button
            onClick={() => setCount(count+1)}
        > Click here
        </button>
    </div>
  );
}

export default App;
