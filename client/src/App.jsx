import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SingleBlogPost from "./pages/SingleBlogPost";
import AddUpdateBlog from "./pages/AddUpdateBlog";
import Layout from "./components/Layout";
import Register from "./pages/Register";
import "./style.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="container">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="single-blog/:id" element={<SingleBlogPost />} />
              <Route path="add-update-blog" element={<AddUpdateBlog />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
