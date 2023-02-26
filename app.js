/* The above code is creating a server that is listening on port 3000. It is also creating two routes.
The first route is "/index" and the second route is "/info". The "/index" route is sending a message
to the client.
The "/info" route is sending a message and the data from the data.js file to the client. */

// importing express from express file
const express = require("express");
const app = express();
/* Importing the data from the data.js file. */
const data = require("./data");
/* Declaring a constant variable called port and assigning it the value 3000. */
const port = 3000;
/* Enabling the json formating of the request content. */
app.use(express.json());
/* This is a route handler. It is a function that is called when a request is made to the specified
route. */
app.get("/index", (req, res) => {
  res.send("welcome to page index");
});

/* This is a route handler. It is a function that is called when a request is made to the specified
route. */
app.post("/register", (request, response) => {
  console.log(request.body);
  let username = request.body.user;
  let password = request.body.pass;
  console.log(username, password, "reciving data from requset body");
  response.json({ message: "data recived" });
});

/* This is a route handler. It is a function that is called when a request is made to the specified
route. */
app.get("/info", (request, result) => {
  // setting the status code 201
  result.status(201).json({
    // result.json to send the data
    message: "sending data...",
    // fetching the data from data.js and sending the data in get request
    data: data,
  });
});

/* This is a function that is called when the server is started. It is a callback function. */
app.listen(port, () => {
  console.log("Server has be started on port 3000");
});
