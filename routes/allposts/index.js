const express = require("express");
const router = express.Router();
//const studentsController = require("../controllers/students");
const getAllPosts = require("../../controllers/allPosts");

router.get("/allposts", getAllPosts.logAllPosts);

module.exports = router;
