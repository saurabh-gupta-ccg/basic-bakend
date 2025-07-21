require('dotenv').config();
const express = require("express");
const app = express();
const port = 4000;
app.get("/", (req, res) => {
  res.send("hello bhai");
});
app.get("/twitter", (req, res) => {
  res.send("saurabhtwit@gupta");
});
app.get('/github',(req,res)=>{
  res.send({name:'saurabh',
    id: '0001'
  })
})
app.get("/login",(req,res)=>{
    res.send("go on the login page");
})
app.get("/saur",(req,res)=>{
    res.send('<h1>this is saurabh page</h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`example app listening on port ${port}`);
});
