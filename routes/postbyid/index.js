const express = require("express");
const router = express.Router();

const getPostById = require("../../controllers/postById");

router.get("/postbyid", getPostById.logPostById);

module.exports=router;