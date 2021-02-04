const express = require("express");
const router = express.Router();

const PostController = require("../controllers/postController");

router.get("/all", PostController.getAllPosts);
router.get("/ratings", PostController.getRatings);
router.get("/postjoin", PostController.getPostJoin);
router.get("/postbytitle/:title", PostController.getPostByTitle);
router.get("/postbytopic/:topic", PostController.getByTopic);
router.get("/:id", PostController.getById);

module.exports = router;
