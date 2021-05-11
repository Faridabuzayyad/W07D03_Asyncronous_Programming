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

