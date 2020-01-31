import React, { useState, useEffect, useReducer } from "react";

function HooksPrac() {

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log('Mounted')
        document.title = `You have clicked ${counter} times`

        return function cleanup(){
            console.log('Unmounted')
        }
    })

    return (
    <div>
      <p>{`You have clicked ${counter} times`}</p>
      <button
        onClick={() => counter === 5 ? setCounter(counter) : setCounter(counter+1)}
      >
        Click me
      </button>
    </div>
  );
}

export default HooksPrac;