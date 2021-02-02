const { query } = require('../dbconfig');
const pool = require('./dbconfig');

const getAllPosts = {
  logAllPosts: (req, res) => {
  try {
   const data = await pool.query('select * from posts')

   res.json({
     code: 200,
     operation: "success",
     description: "Fetched all posts",
     data: data.rows,
   })
  } catch (e) {
    console.error(Error(e))
    res.status(500).send('A Team, there is a problem!')
  }

  }

};

module.exports = getAllPosts;


/* {
  try {
    const data = await pool.query("SELECT * FROM users");

    res.json({
      code: 200,
      operation: "success",
      description: "Fetched all users",
      data: data.rows,
    });
  } catch (e) {
    console.error(Error(e));
    res.status(500).send("Something happened, Hermann");
  }
} */