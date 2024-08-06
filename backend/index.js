import express from 'express';
import homeRouter from './routes/homeRouter.js';
import userRouter from './routes/userRouter.js';
import cors from 'cors';

const app = express();


app.use(express.json())
app.use(cors())


app.use('/', homeRouter)


app.use('/user', userRouter)


const PORT = 4444
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}...`);
})
// const http = require("http");

// const homeController = require("./Controller/homeController");
// const userController = require("./Controller/userController");


// const server = http.createServer((req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");


//   if (req.url == "/") {
//     homeController.home(req, res);
//   } else if (req.url.includes("/users")) {
//     try {
//       if (req.method === "GET") {
//         userController.getUsers(req, res);
//       } else if (req.method === "POST") {
//         userController.createUser(req, res);
//       } else if (req.method === "PUT") {
//         userController.updateUser(req, res)
//       } else if (req.method === "DELETE") {
//         console.log("in delte");
//         userController.deleteUser(req, res)
//       } else {
//         res.writeHead(405, { "Content-Type": "application/json" });
//         res.end(
//           JSON.stringify({
//             code: 405,
//             remark: "Method not allowed",
//           })
//         );
//       }
//     } catch (e) {
//       console.log(e);
//       res.writeHead(500, { "Content-Type": "application/json" });
//       res.end(
//         JSON.stringify({
//           code: 500,
//           remark: "Internal server error",
//           data: null,
//           error: e,
//         })
//       );
//     }
//   } else {

//     res.writeHead(404, { "Content-Type": "application/json" });
//     res.end(
//       JSON.stringify({
//         code: 404,
//         remark: "Not found",
//         data: null,
//       })
//     );
//   }
// });


// const port = 9595;
// server.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });



