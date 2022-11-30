import React, { useState } from "react";
const Pagination = (props) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="d-flex justify-content-center align-items-center">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li className="page-item" key={Math.random().toString()}>
            <a
              onClick={() => {
                props.paginate(number);
              }}
              href="#!"
              className={"page-link"}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
