import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import cors from 'cors';
import './TodoList.css'
// import { response } from 'express';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const respond = await axios.get('http://localhost:9001/user').then((res) => {
      // console.log(res)
      setTodos(respond.data.data);

    })
  };

  const addTodo = async () => {
    if (newTodo.trim() === '') return;
    const response = await axios.post('http://localhost:9001/user', { text: newTodo });
    setTodos([...todos, response.data]);
    setNewTodo('');
  };

  const updateTodo = async (id, updatedText) => {
    const response = await axios.put(`http://localhost:9001/user/${id}`, { text: updatedText });
    setTodos(todos.map(todo => (todo.id === id ? response.data : todo)));
  };

  const deleteTodo = async id => {
    await axios.delete(`http://localhost:9595/user/${id}`);
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="text"
              value={todo.text}
              onChange={(e) => updateTodo(todo.id, e.target.value)}
            />
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
