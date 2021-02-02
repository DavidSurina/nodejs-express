const { query } = require('../dbconfig');
const pool = require('./dbconfig');

const getAllPosts = {
  logAllPosts: (req, res) =>

  pool.query('select * from posts')

};

module.exports = getAllPosts;
