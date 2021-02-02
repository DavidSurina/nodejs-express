const pool = require("../dbconfig");

const getPostByTopic = {
  logPostByTopic: async (req, res) => {
    try {
      const data = await pool.query(
        "SELECT * FROM posts JOIN topics ON posts.topic_id = topics.topic_id WHERE topic_name LIKE $1",
        [topic]
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

module.exports = getPostByTopic;
