const pool = require("../dbconfig");

const getPostByRating = {
  logPostByRating: async (req, res) => {
    try {
      const data = await pool.query("SELECT * FROM posts ORDER BY rating DESC");
      console.log(data);
        res.json({
        code: 200,
        operation: "success",
        description: "Fetched posts by Rating desc order",
        data: data.rows,
      });
    } catch (e) {
      console.error(Error(e));
      res.status(500).send("A Team, there is a problem!");
    }
  },
};

module.exports = getPostByRating;