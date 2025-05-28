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
    const q = `SELECT * FROM posts WHERE id=?`
};
export const addPost = (req, res) => {};
export const deletePost = (req, res) => {};
export const updatePost = (req, res) => {};
