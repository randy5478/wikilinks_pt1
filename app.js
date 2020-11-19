const express = require('express');
const morgan = require('morgan');
const pg = require('pg');
const bodyParser = require("body-parser");
const layout = require('./views/layout');
const { db } = require('./models');
const wikiRouter = require("./routes/wiki")
const usersRouter = require("./routes/users")

const app = express();

app.use("/wiki", wikiRouter)
app.use("/users", usersRouter)

app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}))

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })
  

  app.get('/', (req, res) => {
    res.redirect("/wiki");
  })

  app.get('/', (req, res) => {
    res.send(layout(''));
  })
  
const syncDatabase = async () => {
  await db.sync({force: true}); //toggling: {force: true}

  const PORT = 3000;
  app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
  });
}

syncDatabase();


