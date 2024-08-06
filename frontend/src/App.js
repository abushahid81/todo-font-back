import React from 'react'
// import { BrowserRouter, Routers, Route } from 'react-router-dom'
import TodoList from "./TodoList"

const App = () => {
  return (
    <div>

      <TodoList />
    </div>
  )
}

export default App



// import React, { useState, useEffect } from 'react'
// import axios from 'axios';
// // import cors from 'cors'
// import './Apptodo.css'
// import Button from 'react-bootstrap/Button';

// const App = () => {
//   const [todos, setTodos] = useState([]);
//   // const [input, setInput] = useState('');
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [id, setId] = useState("");


//   useEffect(() => {

//     getUsers();

//   }, []);

//   const getUsers = () => {
//     axios.get('http://localhost:5959/users').then((res) => {
//       console.log(res)
//       setTodos(res.data);
//       // console.log(res);
//     })
//   }
//   const handleCustomer = (e) => {



//     if (id) {
//       axios.put("http://localhost:5959/users", { id, name, email })
//         .then((response) => {
//           setName("");
//           setEmail("");
//           setId("");
//           getUsers("");

//         });

//     }
//     else {
//       axios.post("http://localhost:5959/users", { id, name, email })
//         .then((response) => {
//           setName("");
//           setEmail("");
//           setId("");

//         });
//     }
//   }
//   return (
//     <div className="todo-list">
//       <h2>ToDo List</h2>
//       <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
//       <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
//       <Button onClick={(e) => handleCustomer(todos)} variant="success" className='ms-3'>Add</Button>

//       <ol className='mt-3'>
//         {todos.map(item => (
//           <li key={item.id}>
//             ID: {item.id} | NAME:{item.name} | EMAIL:{item.email}
//             <Button variant="primary" className='mt-2'>Edit</Button>
//             <Button variant="danger" className='mt-2'>Delete</Button>
//           </li>

//         ))}
//       </ol>
//     </div>
//   )
// }

// export default App