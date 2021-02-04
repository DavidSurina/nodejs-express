const express = require("express");
const app = express();

//nunnecessary
const { Pool } = require("pg");

const dotenv = require("dotenv");
//
dotenv.config();


//unnecessary
const pool = require("./dbconfig");
const postRoutes = require('./Routes/posts');


const port = 3000;

app.get("/", (req, res) => res.send("11313"));
app.use('/posts', postRoutes);


app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
