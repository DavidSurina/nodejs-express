const express = require("express");
const app = express();
const allPosts = require("./routes/allposts/index");
const PostByTopic = require("./routes/postbytopic/index");
const port = 3000;

app.get("/", (req, res) => res.send("11313"));
app.get("/allPosts", allPosts);
app.get("/PostByTopic", PostByTopic);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
