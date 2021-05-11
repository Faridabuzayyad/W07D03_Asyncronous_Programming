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
        "./data.txt" ,
        "Data I want to write",
        (err)=>{
            if(err){
                console.log("error")
            };
            console.log("Please Do not overwrite the data in this file")
        })
  };

