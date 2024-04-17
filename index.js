require("dotenv").config();
const express = require('express')
const app = express()
// const bodyParser = require("body-parser");

const print = require("./controller");

app.get('/', print);
// app.get("/hello")

app.get("/introduce", (req, res) => {
    res.send("Hello, I am YONG LONG");
});

app.get("/home", (req, res) => {
  res.send("This is the home page");
});

app.post("/users", (req, res) => {
  const {name, password, email} = req.body;
  res.send(`"NAME" = ${name}, "EMAIL" = ${email}`);
});

app.listen(process.env.PORT, ()=>{
    console.log(`Listening to port ${process.env.PORT}`)
})