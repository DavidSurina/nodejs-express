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
app.get("/PostByTopic", PostByTopic);
app.get("/postbyid", postById);
app.get("/postbyrating", postByRating);
app.get("/postbytitle", postByTitle);
app.get("/postjoin", postjoin);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

// 1 . Create the get all posts

// SELECT title FROM posts;

// 2. Create the get post  by id

// SELECT * FROM posts where post_id = 2;


// 3. Create the get posts ordered by rating

// SELECT * FROM posts ORDER BY rating DESC;

// 4. Create the get posts by title partial filter (remember the % symbol)

// SELECT * FROM posts WHERE title LIKE '%a%';

// 5. Create the get posts by topic partial filter query

// SELECT * FROM posts JOIN topics ON posts.topic_id = topics.topic_id
// WHERE topic_name LIKE '%s%';




// 6. Modify the get posts requests so that we can see the user data and the premium level on the same query result

// SELECT * FROM posts JOIN users ON posts.user_id = users.user_id
//                      JOIN premium ON users.premium_id = premium.premium_id;