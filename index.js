const express = require("express");
const app = express();

const { Pool } = require("pg");

const dotenv = require("dotenv");
//
dotenv.config();

const pool = require("./dbconfig");

const allPosts = require("./routes/allposts/index");
const PostByTopic = require("./routes/postbytopic/index");
const postById = require("./routes/postbyid/index");
const postByRating = require("./routes/postbyrating/index");
const postByTitle = require("./routes/postbytitle/index");
const postjoin = require("./routes/postjoin/index");

const port = 3000;

app.get("/", (req, res) => res.send("11313"));
app.get("/allposts", allPosts);
app.get("/PostByTopic/:topic", PostByTopic);
app.get("/postbyid", postById);
app.get("/postbyrating", postByRating);
app.get("/postbytitle/:title", postByTitle);
app.get("/postjoin", postjoin);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
