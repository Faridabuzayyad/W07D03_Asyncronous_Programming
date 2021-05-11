const express = require("express");
const fs = require("fs");
const axios = require("axios");

const readFile = () => {
    fs.readFile('./data.txt' , (err , data)=>{
        if(err){
            console.log("error")
        }
        console.log('Data:' , data.toString());
    })
  };

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

  const getPost = (id) => {
    axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((respone)=>{
        console.log(respone)
    })
    .catch((err)=>{
        throw err;
    });
  };
  
  getPost(1);
  getPost(50);

