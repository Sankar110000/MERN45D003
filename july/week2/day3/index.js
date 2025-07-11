// // to import the packages

// const http = require('http')
// const port = 9000

// const server = http.createServer((req, res) => {
//     if(req.url === "/"){
//         res.end("this is my ")
//     }
// })

// // to run thee server
// server.listen(port, () => {
//  console.log('server is running on port 9000');
// })





















const express = require("express");
const app = express();

app.get("/err", (req, res) => {
  throw new Error("Something broke!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});