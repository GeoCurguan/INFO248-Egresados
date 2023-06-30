// Import React
import { useState } from "react";
// Import Components
import CardPost from "./CardPost";
import Pagination from "./Pagination";

const Posts = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  return (
    <>
      {posts
        .slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)
        .map((post) => (
          <CardPost key={post._id} post={post} />
        ))}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        postsPerPage={postsPerPage}
      />
    </>
  );
};

export default Posts;
