import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import "./Form.css";
// import { getMoviesById } from "../movies";

export default function Form(props) {
  const { setRequestTitle, movies } = props;

  const [inputValue, setInputValue] = useState("");
 


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };



  // const handleOptionChange = (e) => {
  //   setType(e.target.value);
    
  // };

  // useEffect(() => {
  //   console.log("setvalue:", optionValue);
  // }, [optionValue]);

  const onSubmit = (e) => {
    e.preventDefault();
    setRequestTitle(inputValue);
    setInputValue("");
  };

  return (
    <>
      <form className="form">
        <p>Bryan's Second Rate IMDB Ripoff</p>
        <div className="inputContainer">
          <input
            value={inputValue}
            type="text"
            className="movieInput"
            onChange={handleInputChange}
            placeholder="Enter a Movie, Series or Game..."
            autoFocus
          />

          <div className="typeOf">
            <select
              className="media"
              name="media"
              // onChange={handleOptionChange}
            >
              <option value="">Any</option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
              <option value="game">Games</option>
            </select>
          </div>
        </div>
        {/* <div className="pagination">
          <p>
            <input
              className="pageInput"
              value={currentPage}
              type="text"
              onChange={handlePageChange}
              onClick={(e) => e.target.select()}
            />
            {` of ${pageNumbers}`}
          </p>
        </div> */}
        <button id="btn" type="button" onClick={onSubmit}>
              Search
            </button>
      </form>
    </>
  );
}

Form.propTypes = {
  setSearchTerm: PropTypes.func,
};
