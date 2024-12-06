require('dotenv').config();
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('The server is running!');
});


app.listen(process.env.port, () => {
  console.log(`Listening on ${process.env.port}`);
  console.log(`Your secret is ${process.env.SECRET_PASSWORD}`);
});

