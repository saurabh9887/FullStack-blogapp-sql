import { db } from "../db.js";

export const getPosts = (req, res) => {
  const q = req.query.cat
    ? `SELECT * FROM posts WHERE cat=?`
    : `SELECT * FROM posts`;

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return err;
    // if (data.length === 0) return res.status(400).json("No posts found");

    return res.status(200).json(data);
  });
};
export const getPost = (req, res) => {
  const q =
    "SELECT `username`,`postTitle`,`postDesc`,`cat`,`postImg`,`postDate` FROM users u JOIN posts p ON p.userid=u.id WHERE p.id=?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data[0]);
  });
};
export const addPost = (req, res) => {};
export const deletePost = (req, res) => {};
export const updatePost = (req, res) => {};
