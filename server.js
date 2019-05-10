const express = require("express");
const bodyParser = require("body-parser");
const PORT = 5000;

// Set up the express app
const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// get all todos
app.get("/api/v1/todos", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "todos retrieved successfully",
    todos: "Here you go"
  });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
