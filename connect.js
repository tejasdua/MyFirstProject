const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();

const port = 8000;

const uri = 'mongodb+srv://tejasdua:Gravitycr7@to-dolist.klqwqhd.mongodb.net/?retryWrites=true&w=majority';

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to MongoDB successfully!');
    // Your application logic and CRUD operations can go here
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.log('Error connecting to MongoDB:', err);
  });

  
  
