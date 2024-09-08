import React, { useState } from "react";
import Formmodal from "../../../Utility/Modal/Formmodal";
import Forminput from "../../../Utility/Forminput";
import Textareainput from "../../../Utility/Textareainput";
import Submitbutton from "../../../Utility/Submitbutton";

const Addbloglist = ({ show, onClose, dataPost, formData , handleChange }) => {

   

  return (
    <Formmodal
      show={show}
      onClose={onClose}
      title={"Add New Blog"}
      dataPost={dataPost}
    >
      <Forminput
        controlId="formBlogTitle"
        label="Blog Title"
        type="text"
        placeholder="Enter blog title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <Forminput
        controlId="formAuthorName"
        label="Author Name"
        type="text"
        placeholder="Enter author name"
        name="author"
        value={formData.author}
        onChange={handleChange}
      />
      <Textareainput
        label="blogcontent"
        placeholder="Enter Blog Content"
        name="content"
        value={formData.content}
        onChange={handleChange}
      />
      <Submitbutton text="Submit Post" />
    </Formmodal>
  );
};

export default Addbloglist;
