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
    axios.get('http://localhost:4444/user')
      .then((res) => {
        console.log(res);
        setTodos(res.data.data);
      })

  }
  const handleCustomer = (e) => {
    e.preventDefault();

    if (id) {
      axios.put("http://localhost:4444/user", { id, name, email })
        .then((res) => {
          setName("");
          setEmail("");
          setId("");
          getUsers("");
          clearForm("");

        })


    }
    else {
      axios.post("http://localhost:4444/user", { name, email })
        .then((response) => {
          setName("");
          setEmail("");
          getUsers("");
          clearForm("");

        })

    }
  }

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
  const userdelete = (id) => {
    axios.delete('http://localhost:4444/user' + id)
      .then(result => {
        console.log(result);
        window.location.reload();
      })
  }
  return (
    <div className="todo-list">
      <h2>ToDo List</h2>
      <form onSubmit={handleCustomer}>
        <input type='text' className='gap-1' value={name} onChange={(e) => setName(e.target.value)} />
        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button variant="success" className='ms-3'>{id ? 'Update' : 'Add'}</Button>
      </form>

      <ol className='mt-3'>
        {todos.map(item => (
          <li key={item.id}>
            ID: {item.id} | NAME:{item.name} | EMAIL:{item.email}
            <Button variant="primary" onClick={() => userform(item)} className='mt-2'>Edit</Button>
            <Button variant="danger" onClick={() => userdelete(item)} className='mt-2'>Delete</Button>
          </li>

        ))}
      </ol>
    </div>
  )
}

export default App