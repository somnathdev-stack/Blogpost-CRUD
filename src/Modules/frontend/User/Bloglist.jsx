import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Tablelisting from "../../../Utility/Tablelisting";
import Confirmationmodal from "../../../Utility/Modal/Confirmationmodal";
import Addbloglist from "./Addbloglist";
const Bloglist = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAddBlogModal, setShowAddBlogModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    content: "",
  });


  const [posts, setPosts] = useState([
    { id: 1, title: "First Post", author: "Author One" },
    { id: 2, title: "Second Post", author: "Author Two" },
    { id: 3, title: "First Post", author: "Author One" },
    { id: 4, title: "Second Post", author: "Author Two" },
    { id: 5, title: "First Post", author: "Author One" },
    { id: 6, title: "Second Post", author: "Author Two" },
    { id: 7, title: "First Post", author: "Author One" },
    { id: 8, title: "Second Post", author: "Author Two" },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

 
  const handleEdit = (id) => {
    console.log("Edit post with id:", id);
    // Implement your edit logic here
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const confirmDelete = () => {
    console.log("Delete post with id:", deleteId);
    setPosts(posts.filter((post) => post.id !== deleteId));
    setShowModal(false);
    setDeleteId(null);
  };

  const closeModal = () => {
    setShowModal(false);
    setDeleteId(null);
  };

  const handleAddBlog = () => {
    console.log("Add Blog button clicked");
    setShowAddBlogModal(true);
  };
  const submitBlog = () => {
    console.log("Add Blog button clicked",formData);
    setPosts([formData,...posts, ]);
    console.log(formData)
  };
  return (
    <div className="container mt-4">
      <h1>Blog Lists</h1>
      <Button
        variant="primary"
        onClick={handleAddBlog}
        className="mb-4" 
      >
        Add Blog
      </Button>
      <Tablelisting
        columns={["Title", "Author"]}
        data={posts}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <Confirmationmodal
        show={showModal}
        onClose={closeModal}
        onConfirm={confirmDelete}
        title="Confirm Delete"
        message="Are you sure you want to delete this post?"
      />
      <Addbloglist
        show={showAddBlogModal}
        onClose={() => setShowAddBlogModal(false)}
        dataPost={submitBlog}
        formData={formData}
        handleChange={handleChange}
      />
    </div>
  );
};

export default Bloglist;
