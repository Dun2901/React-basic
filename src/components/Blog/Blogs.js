import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import "./Blogs.css";

const Blogs = () => {
  const {
    data: dataBlogs,
    isLoading,
    isError,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  let newData = [];
  if (dataBlogs && dataBlogs.length > 0) {
    newData = dataBlogs.filter((item, index) => index < 9);
  }

  return (
    <div className="blogs-container">
      {isLoading === false &&
        newData &&
        newData.length > 0 &&
        newData.map((item) => {
          return (
            <div className="single-blog" key={item.id}>
              <div className="title">{item.title}</div>
              <div className="content">{item.body}</div>
              <button>
                <Link to={`/Blogs/${item.id}`}>View detail</Link>
              </button>
            </div>
          );
        })}

      {isLoading === true && (
        <div style={{ textAlign: "center !important", width: "100%" }}>
          Loading data ...
        </div>
      )}
    </div>
  );
};

export default Blogs;
