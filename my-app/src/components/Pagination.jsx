import React, { useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./Pagination.css";

const Pagination = ({
  setPage,
  page,
  setCount,
  count,
  getMovies,
  name,
  totalMovies
}) => {
 

  useEffect(() => {
    getMovies(page, name);
  }, [page]);

  const pageUp = () => {
    if (count <= totalMovies) {
      setCount((count) => count + 1);
      setPage((page) => page + 1);
    }
  };

  const pageDwn = () => {
    if (count > 2) {
      setCount((prevCount) => prevCount - 1);
      setPage((page) => page - 1);
      console.log(count);
    }

    if (count <= 1) {
      setCount(1);

      console.log(count);
    }
  };

 
  return (
    <div className="pageBox">
      <i className="leftArrow" onClick={pageDwn}>
        <FaAngleLeft />
      </i>
      <p className="pageNo">{count - 1}</p>
      <i className="rightArrow" onClick={pageUp}>
        <FaAngleRight />
      </i>
    </div>
  );
};

export default Pagination;
