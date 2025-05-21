import React, { useState } from "react";
import TextEditor from "../components/TextEditor";

const AddUpdateBlog = () => {
  const [editorContent, setEditorContent] = useState("");
  return (
    <div>
      <div className="addupdateBlog">
        <div className="content">
          <input type="text" placeholder="Title" />
          <div className="editorContainer">
            <TextEditor
              className="editor"
              value={editorContent}
              onChange={setEditorContent}
              placeholder="Write something interesting..."
            />
          </div>
        </div>
        <div className="menu">
          <div className="item">
            <h1>Publish</h1>
            <span>
              <b />
              Status:
              <b /> Draft
            </span>
            <span>
              <b />
              Visibility:
              <b /> Public
            </span>

            <input style={{ display: "none" }} type="file" id="blog-img" />
            <label className="file" htmlFor="blog-img">Upload Cover Image</label>
            <div className="buttons">
              <button>Save as a draft</button>
              <button>Update</button>
            </div>
          </div>
          <div className="item">
            <h1>Category</h1>
            <div className="cat">
              <input
                type="radio"
                // checked={cat === "art"}
                name="cat"
                value="art"
                id="art"
                // onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="art">Art</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                // checked={cat === "science"}
                name="cat"
                value="science"
                id="science"
                // onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="science">Science</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                // checked={cat === "technology"}
                name="cat"
                value="technology"
                id="technology"
                // onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="technology">Technology</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                // checked={cat === "cinema"}
                name="cat"
                value="cinema"
                id="cinema"
                // onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="cinema">Cinema</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                // checked={cat === "design"}
                name="cat"
                value="design"
                id="design"
                // onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="design">Design</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                // checked={cat === "food"}
                name="cat"
                value="food"
                id="food"
                // onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="food">Food</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUpdateBlog;
