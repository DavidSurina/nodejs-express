const express = require("express");
const app = express();
const allPosts = require("./routes/allposts/index");
const postbyid = require("./routes/postbyid/index");
const port = 3000;

app.get("/", (req, res) => res.send("11313"));
app.get("/allPosts", allPosts);
app.get("/postbyid",postbyid);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
