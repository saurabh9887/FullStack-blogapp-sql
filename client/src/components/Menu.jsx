import React from "react";
import { getAllCatBlogPostAPI } from "../API_Services/postsAPI";
import { useState } from "react";
import { useEffect } from "react";

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    GetAllBlogPosts(cat);
  }, [cat]);

  const GetAllBlogPosts = async (cat) => {
    try {
      const res = await getAllCatBlogPostAPI(cat);
      if (res.status === 200) {
        setPosts(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="menu">
      <h1 style={{ margin: "0" }}>Other posts you may like</h1>
      <div className="posts">
        {posts.map((post) => (
          <div className="post">
            <img src={post.postImg} alt="" />
            <h2>{post.postTitle}</h2>
            <button>Read more</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
