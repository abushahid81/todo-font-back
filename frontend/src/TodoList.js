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

  // const getUsers = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:5001/users");
  //     setTodos(res.data.data);
  //     console.log("Users fetched successfully:", res.data.data);
  //   } catch (error) {
  //     console.error("There was an error fetching the users!", error);
  //   }
  // };
  const getUsers = () => {
    axios.get('http://localhost:5001/users')
      .then((res) => {
        console.log(res);
        setTodos(res.data.data);
      })

  }
  // const handleUser = async (e) => {
  //   e.preventDefault();
  //   try {
  //     if (id) {
  //       const response = await axios.put("http://localhost:5001/users", { id, name, email });
  //       console.log("User updated successfully:", response.data.data);
  //     } else {
  //       const response = await axios.post("http://localhost:5001/users", { name, email });
  //       console.log("User created successfully:", response.data.data);
  //     }
  //     clearForm();
  //     getUsers();
  //   } catch (error) {
  //     console.error("There was an error saving the user!", error);
  //   }
  // };
  const handleCustomer = async (e) => {
    e.preventDefault();
    try {
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

    } catch (error) {
      console.error("There was an error saving the user!", error);
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
      <h2>ToDo List</h2>
      <form onSubmit={handleCustomer}>
        <input type='text' placeholder='Username' className='gap-1' value={name} onChange={(e) => setName(e.target.value)} />
        <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button variant="success" type='submit' className='ms-3'>{id ? 'Update' : 'Add'}</Button>
      </form>

      <ol className='mt-3'>
        {todos.map(data => (
          <li key={data.id}>
            ID: {data.id} | NAME:{data.name} | EMAIL:{data.email}
            <Button variant="primary" onClick={() => userform(data)} className='mt-2'>Edit</Button>
            <Button variant="danger" onClick={() => handleDelete(data.id)} className='mt-2'>Delete</Button>
          </li>

        ))}
      </ol>
    </div>
  )
}

export default App