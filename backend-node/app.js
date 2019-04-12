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

// intiializing the server to listen on port 8006
app.listen(8006, ()=> console.log('Listening on port 8006'))