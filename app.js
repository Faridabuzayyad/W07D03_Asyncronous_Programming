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

  //getPost(1);
  //getPost(50);


//Pulse Check Q5
const getPostAsync = async (data) => {
    try{
       const response = await axios.get(
           `https://jsonplaceholder.typicode.com/posts/${data}`
           );
       console.log('DATA', response.data);
     } catch(err){
       throw err;
      }
    };

  //getPost(1);
  //getPost(50);

//Practice

//Q1
const appendToFile = async (data) => {
    try {
        await fs.promises.appendFile('./data.txt', `\n${data}`)
      } catch (err) {
        throw err;
      }
  };

  //appendToFile('Italia');

//Q2
const copyFile = async (fileName) => {
    try {
        await fs.promises.copyFile(`./${fileName}` , `./copy_of_${fileName}`);
        console.log(done);
    } catch {
        console.log(`The ${fileName} could not be copied`)
    }

  };


  //copyFile('data.txt');
  

//Q3
// the API Expects JSON data to be sent and that's why `JSON.stringify` is used
const post = JSON.stringify({
    title: "JavaScript Basics",
    body: "This post contains information about javaScript ",
    // the id of the user who is going to create the post
    userId: 1,
  });
  
const createPost = async (post) => {
    await axios.post("https://jsonplaceholder.typicode.com/posts" , post)
    .then((response)=>{
        console.log(response.data)
    })
    .catch((err)=>{
        throw err
    })
  };
  
  //createPost(post);


//Q4

const newPost = JSON.stringify({
    // the post id that we want to update, change it when trying to update another post
    id: 1,
    title: "Updated Title",
    body: "Updated body",
    userId: 1,
  });
  
  const updatePost = async (postId, data) => {
    await axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}` , data)
    .then((response)=>{
        console.log(response.data)
    })
    .catch((err)=>{
        throw err
    })
  };
  
  //updatePost(3, newPost);



//Q5

const getUsers = async () => {
    await axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        console.log(response.data)
    })
    .catch((err)=>{
        throw err
    })
  };

getUsers();
app.listen(PORT, () => {
    console.log('SERVER IS WORKING ON http://localhost:' + PORT);
  });