import React, { useState } from 'react';

const DynamicForm = () => {
  const [input, setInput] = useState();
  const [charCount, setCharCount] = useState();
  const[list, setList] = useState([]);

  const handleInputChange = (event) => {
      setInput(event.target.value);
      setCharCount(event.target.value.length);
  };

  const handleReset = () => {
    setInput('');
    setList([]);
  };

  const handleSubmit = (event) => {
    if (input < 8) {//Submit is not working
      alert("Minimum 8 characters please!")
    } else {
      setList([...list, input]);
      setInput('');
    }
  }

  return (
    <div style={{marginLeft: '1.4rem'}}>
      <h1>Dynamic Form</h1>
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Type something..."
        value={input}
      />
      <button onClick={handleReset}>Reset</button>
      <div>
        <h2>Current Input:</h2>
        <p>{input}</p>
        <p>number of characters: {charCount}</p>
        <button onClick={handleSubmit}>Submit</button>
        <ul>
          {list.map(el => 
            <li>{el}</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DynamicForm;