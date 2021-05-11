const express = require("express");
const fs = require("fs");
const axios = require("axios");
const { response } = require("express");
const app = express();
const PORT = 3000;

//Pulse Check Q2
const readFile = () => {
    fs.readFile('./data.txt' , (err , data)=>{
        if(err){
            console.log("error")
        }
        console.log('Data:' , data.toString());
    })
  };

//Pulse Check Q3
const writeFile = () => {
    fs.writeFile(
        "./text.txt" ,
        "A new file has been created",
        (err)=>{
            if(err){
                console.log("error")
            };
            console.log("Please Do not overwrite the data in this file")
        })
  };

//Pulse Check Q4  
const getPost = (id) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        console.log('DATA', response.data);
      })
      .catch((err) => {
        console.log('ERR', err);
      });
  };


  getPost(1);
  getPost(50);

app.listen(PORT, () => {
    console.log('SERVER IS WORKING ON http://localhost:' + PORT);
  });