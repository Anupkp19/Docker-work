
const express = require('express');
const app=express();

app.get("/", (req,res) => {
res.send("Welcome to this page");
})
app.get("/get", (req,res) => {
    res.send("Welcome to this page");
    })

app.listen(8080, () => {
    console.log('Listening on port 8080');
  });