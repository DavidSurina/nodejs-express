const pool = require("../dbconfig");

module.exports = {
  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const answerDB = await pool.query(
        "SELECT * FROM posts WHERE post_id = $1",
        [id]
      );
      res.json({
        message: "Retrieve post by id:" + id,
        code: 200,
        description: "Post with id:" + id,
        data: answerDB.rows[0],
      });
    } catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  },
  getAllPosts: async (req, res) => {
    try {
      // best practice table name in double quotes
      const answerDB = await pool.query('SELECT * FROM "posts"');
      res.json({
        message: "Retrieved all posts from Posts table",
        code: 200,
        description: "List of all Posts",
        data: answerDB.rows,
      });
    } catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  },
  getRatings: async (req, res) => {
    try {
      // best practice table name in double quotes
      const answerDB = await pool.query(
        "SELECT * FROM posts ORDER BY rating DESC"
      );
      console.log(answerDB);
      res.json({
        message: "Retrieved all posts ordered by rating desc",
        code: 200,
        description: "List of all Posts by rating desc",
        data: answerDB.rows,
      });
    } catch (e) {
      console.error(e);
      res.sendStatus(404);
    }
  },
  getByTopic: async (req, res) => {
    const { topic } = req.params;
    if (typeof topic !== "string") {
      console.log("Topic must be a string");
    } else {
      try {
        const data = await pool.query(
          "SELECT * FROM posts JOIN topics ON posts.topic_id = topics.topic_id WHERE topic_name LIKE $1",
          [topic]
        );
        // console.log(data);
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
    }
  },
  getPostJoin: async (req, res) => {
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
  getPostByTitle: async (req, res) => {
    const { title } = req.params;
    try {
      const data = await pool.query("SELECT * FROM posts WHERE title=$1", [
        title,
      ]);
      console.log(data);
      res.json({
        code: 200,
        operation: "success",
        description: "Fetched specific post by title",
        data: data.rows,
      });
    } catch (e) {
      console.error(Error(e));
      res.status(500).send("A Team, there is a problem!");
    }
  },
};
