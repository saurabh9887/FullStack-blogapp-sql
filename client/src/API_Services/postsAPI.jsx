import axios from "axios";
import { Base_Url } from "../Base_Url/Base_Url";

export const getAllBlogPostAPI = async (cat) => {
  const url = `${Base_Url}/posts${cat}`;
  const res = await axios.get(url);

  return res;
};

export const getSingleBlogPostAPI = async (postID) => {
  const url = `${Base_Url}/posts/${postID}`;
  const res = await axios.get(url);

  return res;
};

export const deletePostSingleBlogPostAPI = async (postID) => {
  const url = `${Base_Url}/posts/${postID}`;
  const res = await axios.delete(url, { withCredentials: true });

  return res;
};

export const getAllCatBlogPostAPI = async (cat) => {
  const url = `${Base_Url}/posts/?cat=${cat}`;
  const res = await axios.get(url);

  return res;
};
