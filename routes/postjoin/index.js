const express = require("express");
const router = express.Router();

const getPostJoin = require("../../controllers/postjoin");

router.get("/postjoin", getPostJoin.logPostJoin);

module.exports=router;