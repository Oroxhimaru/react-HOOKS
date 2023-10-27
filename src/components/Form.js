import React, { useState } from 'react';

const Form = () => {
    const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div> 
      <p>Handling Form Inputs: When dealing with controlled form components (form inputs whose values are controlled by React state), useState is commonly used to store and update form input values.</p>
        <br />
      <form>
      <input type="text" value={inputValue} onChange={handleChange} />
     <br />
     <br />
      {inputValue}
    </form>
    </div>
  )
}

export default Form