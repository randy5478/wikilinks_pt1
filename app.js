const express = require('express');
const morgan = require('morgan');
const pg = require('pg');
const bodyParser = require("body-parser");
const layout = require('./views/layout');
const { db } = require('./models');

const app = express();

app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}))

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

app.get('/', (req, res) => {
  res.send(layout(''));
})



const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
