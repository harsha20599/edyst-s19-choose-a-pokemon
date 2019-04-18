// Importing the libraries into the file
const express = require('express');
const app = express();

// creating the instance of data
const data = {
  "pokemon": ["bulbasaur", "charmander", "squirtle"  ]
}

app.get('/api/pokemon',(req,res)=>{
  // returning the pokemon data in the json format
  res.json(data);
})

// Handing errors from invalid API calls
app.get('/*',(req,res) =>{
  res.status(404).send({error : "Sorry, the requested URL is not found on this server"});
})

// intiializing the server to listen on port 8006
app.listen(8006, ()=> console.log('Listening on port 8006'))