import fire from "../../firebase/fire";
import React, { useState, useEffect } from "react";
const db = fire.firestore();

const SubscribeEmails = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const response = db.collection("emails");
    const data = await response.get();
    data.docs.forEach((item) => {
      setBlogs([...blogs, item.data()]);
    });
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div className="App">
      {blogs &&
        blogs.map((blog) => {
          return (
            <div className="blog-container">
              <h4>{blog.email}</h4>
              <p>{blog.time}</p>
            </div>
          );
        })}
    </div>
  );
};

export default SubscribeEmails;
