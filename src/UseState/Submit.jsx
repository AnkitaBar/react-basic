import React, { useState } from 'react';

function Submit() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    if (value.length > 10) {
      alert('Input should not exceed 10 characters');
    } else {
      setInputValue(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length > 10) {
      alert(`Input is too long! It has ${inputValue.length} characters.`);
    } else {
      alert(`Your input: ${inputValue}`);
    }
  };

  return (
    <div>
    <h1>{inputValue.length}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter up to 10 characters"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Submit;
