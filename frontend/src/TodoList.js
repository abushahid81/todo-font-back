import React, { useState, useEffect } from 'react'
import axios from 'axios';
// import cors from 'cors'
import './TodoList.css'
import Button from 'react-bootstrap/Button';

const App = () => {
  const [todos, setTodos] = useState([]);
  // const [newId, setNewId] = useState("");
  // const [newName, setNewName] = useState("");
  // const [newEmail, setNewEmail] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");


  useEffect(() => {

    getUsers();

  }, []);

  const getUsers = () => {
    axios.get('http://localhost:5001/users')
      .then((res) => {
        // console.log(res);
        setTodos(res.data.data);
      })

  }

  const handleCustomer = (e) => {
    e.preventDefault();

    if (id) {
      axios.put("http://localhost:5001/users", { id, name, email })
        .then((response) => {
          setName("");
          setEmail("");
          setId("");
          getUsers("");


        })


    } else {
      axios.post("http://localhost:5001/users", { id, name, email })
        .then((response) => {
          setName("");
          setEmail("");
          setId("");
          getUsers("");
          clearForm("");

        })

    }
  }

  const handleDelete = async (userId) => {
    try {
      const response = await axios.delete('http://localhost:5001/users', { data: { id: userId } })
      console.log(response.data.data);
      getUsers();
    } catch (error) {
      console.error("There was an error deleting the user!", error);
    }
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setId("");
  }
  const userform = (userData) => {
    setName(userData.name);
    setEmail(userData.email);
    setId(userData.id);
  }




  return (
    <div className="todo-list">
      <h2 className='ms-5'>To Do List</h2>
      <form onSubmit={handleCustomer}>
        <input type='text' placeholder='Username' className='gap-1' value={name} onChange={(e) => setName(e.target.value)} />
        <input type='text' placeholder='Email' className='gap-1' value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button variant="success" type='submit' className='ms-3'>{id ? 'Update' : 'Add'}</Button>
      </form>

      <ul className='mt-3'>
        {todos.map(data => (
          <li key={data.id} className='db'>
            ID: {data.id} | NAME:{data.name} | EMAIL:{data.email}
            <Button variant="primary" onClick={() => userform(data)} className='mt-2 me-2'>Edit</Button>
            <Button variant="danger" onClick={() => handleDelete(data.id)} className='mt-2'>Delete</Button>
          </li>

        ))}
      </ul>
    </div>
  )
}

export default App