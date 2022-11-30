import React, { useState } from "react";
import classes from "./Card.module.css";
import Heading from "../UI/Heading";
import Form from "../UI/Form";
import List from "../UI/List";
import Pagination from "./Pagination";
import { useSelector, useDispatch } from "react-redux";
  const Card = () => {
  const list = useSelector((state) => state.todolist.list);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;
  const parentClasses = `${classes.parent} d-flex justify-content-center align-items-center`;
  const cardClasses = `${classes.card} rounded shadow bg-light bg-gradient bg-danger border border-dark m-2`;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (number) => {
    setCurrentPage(number);
  };
  return (
    <div className={parentClasses}>
      <div className={cardClasses}>
        <Heading />
        <Form />
        <List Lists={currentPosts} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={list.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};
export default Card;
