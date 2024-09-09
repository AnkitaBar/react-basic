import React, { useState } from 'react'
import { TextField, Button, IconButton, List, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ToDoApp = () => {
    const [toDos, setToDos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);
    const [editValue, setEditValue] = useState('')

    const addTodo = () => {
        if (inputValue.trim() !== '') {
            const newTodo = {
                id: new Date().getTime(),
                text: inputValue,
            }
            setToDos([...toDos, newTodo]);
            setInputValue('');
        }
    }

    const deleteTodo = (id) => {
        const updatedTodos = toDos.filter((todo) => todo.id !== id);
        setToDos(updatedTodos)
    }

    const enterEditMode = (id, text) => {
        setEditMode(true);
        setEditId(id);
        setEditValue(text);
    }

    const updatedTodo = () => {
        const updatedTodos = toDos.map((todo) => {
            if (todo.id === editId) {
                return { ...todo, text: editValue };
            }
            return todo;
        });
        setToDos(updatedTodos);
        setEditMode(false);
        setEditId(null);
        setEditValue('');
    }

    return (
        <div className='todo-container' style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
            <h2>ToDo List</h2>
            <TextField
                label={editMode ? "Edit Task" : "Enter a task"}
                variant="outlined"
                value={editMode ? editValue : inputValue}
                onChange={(e) => editMode ? setEditValue(e.target.value) : setInputValue(e.target.value)}
                fullWidth
                style={{ marginBottom: '16px' }}
            />
            {
                editMode ? (
                <Button variant="contained" color="primary" onClick={updatedTodo} fullWidth>
                    Update
                </Button>
            ) : (
                <Button variant="contained" color="primary" onClick={addTodo} fullWidth>
                    Add
                </Button>
            )}

            <List>
                {toDos.map((todo) => (
                    <ListItem key={todo.id} style={{ justifyContent: 'space-between' }}>
                        <ListItemText primary={todo.text} />
                        <div>
                            <IconButton edge="end" aria-label="edit" onClick={() => enterEditMode(todo.id, todo.text)}>
                                <EditIcon />
                            </IconButton>
                            <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

export default ToDoApp;
