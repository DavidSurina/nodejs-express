const express = require("express");
const router = express.Router();

const getPostByTitle = require("../../controllers/postByTitle");

router.get("/postbytitle/:title", getPostByTitle.logPostByTitle);

module.exports=router;