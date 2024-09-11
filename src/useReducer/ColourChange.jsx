// import React, { useReducer } from 'react';
// import { Box, MenuItem, FormControl, Select, InputLabel } from '@mui/material';

// // Reducer function to handle state changes
// const colorReducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_COLOR':
//       return action.payload;
//     default:
//       return state;
//   }
// };

// const Colour = () => {
//   // Use useReducer to manage selected color state
//   const [selectedColor, dispatch] = useReducer(colorReducer, '');

//   const handleChange = (event) => {
//     dispatch({ type: 'SET_COLOR', payload: event.target.value });
//   };

//   const colors = [
//     { name: 'Red', value: '#f44336' },
//     { name: 'Green', value: '#4caf50' },
//     { name: 'Blue', value: '#2196f3' },
//     { name: 'Yellow', value: '#ffeb3b' },
//     { name: 'Purple', value: '#9c27b0' },
//   ];

//   return (
//     <div>
//       <FormControl fullWidth>
//         <InputLabel id="color-select-label">Select Color</InputLabel>
//         <Select
//           labelId="color-select-label"
//           id="color-select"
//           value={selectedColor}
//           label="Select Color"
//           onChange={handleChange}
//         >
//           {colors.map((color) => (
//             <MenuItem key={color.value} value={color.value}>
//               {color.name}
//             </MenuItem>
//           ))}
//         </Select>
//         <Box
//           mt={2}
//           width={100}
//           height={100}
//           bgcolor={selectedColor}
//           border={1}
//           borderColor="black"
//         />
//       </FormControl>
//     </div>
//   );
// };

// export default Colour;





// import React, { useReducer } from "react";

// const ini = { colo: "#922B21" };

// function reducer(state, action) {

//   const p = data.find((ele) => ele.label === action.type);
//   if (p) {
//     return { colo: p.color };
//   }

//   return state;
// }

// const data = [
//   { label: "Red", color: "#FF0000" },
//   { label: "Green", color: "#00FF00" },
//   { label: "Blue", color: "#0000FF" },
// ];

// function Colour() {
//   const [state, dispatch] = useReducer(reducer, ini);

//   const handleSelectChange = (e) => {
//     dispatch({ type: e.target.value });
//   };

//   return (
//     <div>
//       <select name="" id="" onChange={handleSelectChange}>
//         <option value="Red">Red</option>
//         <option value="Green">Green</option>
//         <option value="Blue">Blue</option>
//       </select>
//       <div
//         style={{ backgroundColor: state.colo, width: "100px", height: "100px" }}
//       ></div>
//     </div>
//   );
// }

// export default Colour;



import React, { useReducer } from "react";

const color = (state, action) => {
  console.log(action, "state");
  if (action.type === "color") {
    return { color: action.color };
  } else if (action.type === "normal") {
    return { color: "basic" };
  } else {
    return state;
  }
};

export default function UseReducerColor() {
  const initialState = { color: "basic" };
  const [state, dispatch] = useReducer(color, initialState);

  const onChange = (event) => {
    const maincolor = event.target.value;
    dispatch({ type: "color", color: maincolor });
  };
  const colors = [
    { label: "Red", value: "#ff0000" },
    { label: "Green", value: "#00ff00" },
    { label: "Blue", value: "#0000ff" },
    { label: "Yellow", value: "#ffff00" },
  ];

  return (
    <>
      <div>
        <select value={state.color} onChange={onChange}>
          {colors.map((color) => (
            <option key={color.value} value={color.value}>
              {color.label}
            </option>
          ))}
        </select>
        <div
          style={{
            backgroundColor: state.color,
            width: "100px",
            height: "100px",
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
      </div>
    </>
  );
}


