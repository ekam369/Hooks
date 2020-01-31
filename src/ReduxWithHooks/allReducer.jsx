import React, { useReducer } from "react";

const initialState = { customers: [] };

function reducer(initialState, action) {
  switch (action.type) {
    case "fetch":
      const res = action.payload
      res.then((res) => res.json())
      .then(res => console.log(res.results))
      break;
    default:
      throw new Error();
  }
}

function AllReducer() {

    const [state, dispatch] = useReducer(reducer, initialState);

  return <button onClick={() => dispatch({type: 'fetch', payload: fetch('https://randomuser.me/api/?results=5')})}>Fetch</button>;
}

export default AllReducer;
