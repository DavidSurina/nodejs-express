const express = require("express");
const router = express.Router();

const getPostByTopic = require("../../controllers/postByTopic");

router.get("/postbytopic/:topic", getPostByTopic.logPostByTopic);

module.exports = router;
