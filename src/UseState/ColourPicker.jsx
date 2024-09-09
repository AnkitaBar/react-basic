import React, { useState } from 'react';
import { Box, MenuItem, FormControl, Select, InputLabel } from '@mui/material';

const ColourPicker = () => {
  const [selectedColor, setSelectedColor] = useState('');

  const handleChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const colors = [
    { name: 'Red', value: '#f44336' },
    { name: 'Green', value: '#4caf50' },
    { name: 'Blue', value: '#2196f3' },
    { name: 'Yellow', value: '#ffeb3b' },
    { name: 'Purple', value: '#9c27b0' },
  ];

  return (
    <div>
      <FormControl Width>
        <InputLabel id="color-select-label">Select Color</InputLabel>
        <Select
          labelId="color-select-label"
          id="color-select"
          value={selectedColor}
          label="Select Color"
          onChange={handleChange}
        >
          {colors.map((color) => (
            <MenuItem key={color.value} value={color.value}>
              {color.name}
            </MenuItem>
          ))}
        </Select>
        <Box
        mt={2}
        width={100}
        height={100}
        bgcolor={selectedColor}
        border={1}
        borderColor="black"
      />
      </FormControl>

     
    </div>
  );
};

export default ColourPicker;
