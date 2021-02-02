const pool = require("../dbconfig");

const getPostJoin = {
  logPostJoin: async (req, res) => {
    try {
      const data = await pool.query(
        "SELECT * FROM posts JOIN users ON posts.user_id = users.user_id JOIN premium ON users.premium_id = premium.premium_id"
      );
      console.log(data);
      res.json({
        code: 200,
        operation: "success",
        description: "Fetched all posts",
        data: data.rows,
      });
    } catch (e) {
      console.error(Error(e));
      res.status(500).send("A Team, there is a problem!");
    }
  },
};

module.exports = getPostJoin;
