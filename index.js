require('dotenv').config();
const express = require('express');
const app = express();
const connection = require('./mysql');

const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/palabras', (req, res) => {
    connection.query('SELECT * FROM palabras', function (error, results, fields) {
        if (error) throw error;
        
        res.json(results);
      });
});

app.listen(PORT, function () {
  console.log(`La aplicación ha arrancado en http://localhost:${PORT}`);
});