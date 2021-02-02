const express = require("express");
const router = express.Router();

const getPostJoin = require("../../controllers/postjoin");

router.get("/postjoin", getPostJoin.logPostJoin);

module.exports = router;

/*
1 . Create the get all posts

SELECT title FROM posts;

2. Create the get post  by id

SELECT * FROM posts where post_id = 2;


3. Create the get posts ordered by rating

SELECT * FROM posts ORDER BY rating DESC;

4. Create the get posts by title partial filter (remember the % symbol)

SELECT * FROM posts WHERE title LIKE '%a%';

5. Create the get posts by topic partial filter query

SELECT * FROM posts JOIN topics ON posts.topic_id = topics.topic_id
WHERE topic_name LIKE '%s%';


6. Modify the get posts requests so that we can see the user data and the premium level on the same query result

SELECT * FROM posts JOIN users ON posts.user_id = users.user_id
                     JOIN premium ON users.premium_id = premium.premium_id;


https://dbdiagram.io/d/600f277d80d742080a37ccc7

// insert into posts

insert into posts (title, content, rating, user_id, topic_id) values ('boxing',  'tyson',  '2', '3')

*/
