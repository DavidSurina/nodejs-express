const express = require("express");
const app = express();

const dotenv = require('dotenv');
//
dotenv.config();

const pool = require('./dbconfig');

const allPosts = require("./routes/allposts/index");
const postById = require("./routes/postbyid/index");
const postByRating = require("./routes/postbyrating/index");
const postByTitle = require("./routes/postbytitle/index");
const port = 3000;

app.get("/", (req, res) => res.send("11313"));
app.get("/allPosts", allPosts);
app.get("/postbyid",postById);
app.get("/postbyrating", postByRating);
app.get("/postbytitle", postByTitle);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
