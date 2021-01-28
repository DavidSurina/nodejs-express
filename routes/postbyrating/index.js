const express = require("express");
const router = express.Router();

const getPostByRating = require("../../controllers/postByRating");

router.get("/postbyrating", getPostByRating.logPostByRating);

module.exports=router;