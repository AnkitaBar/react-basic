import React, { useState } from 'react';
import { Button, TextField, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const handleSubmit = () => {
    if (inputValue.trim() === '') return;

    if (editIndex >= 0) {
      const updatedTodos = todos.map((todo, index) =>
        index === editIndex ? inputValue : todo
      );
      setTodos(updatedTodos);
      setEditIndex(-1);
    } else {
      setTodos([...todos, inputValue]);
    }

    setInputValue('');
  };

  const handleDelete = (index) => {
    const filteredTodos = todos.filter((_, i) => i !== index);
    setTodos(filteredTodos);
  };

  const handleEdit = (index) => {
    setInputValue(todos[index]);
    setEditIndex(index);
  };

  return (
    <div style={{ width: '300px', margin: '0 auto', textAlign: 'center' }}>
      <TextField
        label="Enter To-Do"
        variant="outlined"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: '10px' }}>
        {editIndex >= 0 ? 'Update' : 'Submit'}
      </Button>

      <List style={{ marginTop: '20px' }}>
        {todos.map((todo, index) => (
          <ListItem key={index}>
            <ListItemText primary={todo} />
            <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(index)}>
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(index)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ToDoList;
