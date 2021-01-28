const express = require("express");
const router = express.Router();

const getPostByTopic = require("../../controllers/postByTopic");

router.get("/postbytopic", getPostByTopic.logPostByTopic);

module.exports = router;
