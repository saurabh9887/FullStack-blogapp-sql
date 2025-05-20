import React from "react";

const AddUpdateBlog = () => {
  return (
    <div>
      <div className="addupdateBlog">
        <div className="content">
          <input type="text" placeholder="Title" />
          <div className="editorContainer"></div>
        </div>
        <div className="menu">
          <div className="item">I1</div>
          <div className="item">I2</div>
        </div>
      </div>
    </div>
  );
};

export default AddUpdateBlog;
