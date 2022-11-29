import React, {  useState } from "react";
import PropTypes from "prop-types";
import "./Form.css";


export default function Form(props) {
  const { setRequestTitle, setType, setPage, setCount } = props;

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  
  const handleOptionChange = (e) => {
    setType(e.target.value);
  };

  const onSubmit = (e) => {
    console.log(e.target.value)
    e.preventDefault();
    setRequestTitle(inputValue);
    setInputValue("");
    setPage(1);
    setCount(2);
  };


  return (
    <>
      <form className="form">
        <p>IMDBryan</p>
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
              onChange={handleOptionChange}
            >
              <option value="">Any</option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
              <option value="game">Game</option>
            </select>
          </div>
        </div>
       
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
