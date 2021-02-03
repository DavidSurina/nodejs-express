const getPostByTitle = {
    logPostByTitle: (req, res) =>{
    try {
      const data = await pool.query("SELECT * FROM posts WHERE title");
      console.log(data);
        res.json({
        code: 200,
        operation: "success",
        description: "Fetched all postsByTitle",
        data: data.rows,
      });
    } catch (e) {
      console.error(Error(e));
      res.status(500).send("A Team, there is a problem!");
    }
  },
  };

  module.exports = getPostByTitle;