import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const Max = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    if (value.length > 10) {
      alert('Input should not exceed 10 characters');
    } else {
      setInputValue(value);
    }
  };

  return (
    <TextField
      label="Enter text"
      value={inputValue}
      onChange={handleChange}
      variant="outlined"
    />
  );
};

export default Max;
