import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import {
  deletePostSingleBlogPostAPI,
  getSingleBlogPostAPI,
} from "../API_Services/postsAPI";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const SingleBlogPost = () => {
  const [post, setPost] = useState([]);
  const location = useLocation();
  const { currentUser } = useContext(AuthContext);

  const postID = location.pathname.split("/")[2];
  const navigate = useNavigate();

  useEffect(() => {
    GetSingleBlogPost(postID);
  }, [postID]);

  const GetSingleBlogPost = async (postID) => {
    try {
      const res = await getSingleBlogPostAPI(postID);
      if (res.status === 200) {
        setPost(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      await deletePostSingleBlogPostAPI(postID);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="singlePage">
      <div className="content">
        <img src={post.postImg} alt="" />

        <div className="user">
          {post.img && <img src={post?.img} alt="" />}
          <div className="info">
            <span>{post.username}</span>
            <p style={{ margin: "0px" }}>Posted {moment(post?.date).fromNow}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/add-update-blog?edit=2`}>
                <img src="../../public/images/edit.png" alt="" />
              </Link>
              <img
                onClick={handleDelete}
                src="../../public/images/delete.png"
                alt=""
              />
            </div>
          )}
        </div>
        <h1>{post.postTitle}</h1>
        {post.postDesc}
      </div>
      <Menu />
    </div>
  );
};

export default SingleBlogPost;
