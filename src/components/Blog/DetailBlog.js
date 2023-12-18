import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import useFetch from "../../Hooks/useFetch";
import "./Blogs.css";

const DetailBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: dataBlogDetail,
    isLoading,
    isError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  console.log(dataBlogDetail);

  const handleBackData = () => {
    navigate("/Blogs");
  };

  return (
    <>
      <div>
        <button class="button-74" onClick={handleBackData}>
          <FaArrowLeft /> Back
        </button>
      </div>
      <div className="blog-detail">
        {dataBlogDetail && (
          <>
            <div className="title">
              Blog ID: {id} ---
              {isLoading === true ? "Loading data ..." : dataBlogDetail.title}
            </div>
            <div className="content">{dataBlogDetail.body}</div>
          </>
        )}
      </div>
    </>
  );
};

export default DetailBlog;
