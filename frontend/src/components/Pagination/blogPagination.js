import React from "react";
import { Link } from "react-router-dom";

const BlogPagination = ({ totalPosts, paginatePosts, postsPerPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination flex-row">
      {pageNumbers.map(number => {
        return (
          <Link
            key={number}
            onClick={() => paginatePosts(number)}
            className="pages link"
          >
            {number}
          </Link>
        );
      })}
    </div>
  );
};

export default BlogPagination;
