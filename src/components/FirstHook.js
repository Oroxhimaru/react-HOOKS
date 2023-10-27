import React, { useState } from 'react'

const FirstHook = () => {
  const [count, setCount] = useState(4);

 
  function decrementFunc() {
    setCount(prevCount => prevCount - 1);
  }
  function incrementFunc() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
        <h1>UseState</h1>
        <p>useState is a React hook used to add state management to functional components in React. It's one of the most fundamental hooks in React, and you can use it in various scenarios, such as:

Managing Component State: You can use useState to store and manage local state within a functional component. For example, if you have a component that needs to keep track of a counter, form input values, or whether a modal is open, you can use useState to manage these states.</p>
        <button onClick={decrementFunc} className='btn'>-</button>
        <span>{count}</span>
        <button onClick={incrementFunc} className='btn'>+</button>
    </div>
  )
}

export default FirstHook