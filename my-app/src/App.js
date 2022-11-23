import { useState, useEffect } from "react";
import MovieDetails from "./components/MovieDetails";
import Movies from "./components/Movies";
import { getMoviesByName, getMovieById } from "./components/Utils";
import "./App.css";
import Form from "./components/Form";

import Modal from "./components/Modal";

function App() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [searchTerm, setSearchTerm] = useState("Batman");
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);
  const [close, setClose] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [type, setType] = useState("");

  async function getMovies() {
    setIsLoading(true);
    try {
      const res = await getMoviesByName(searchTerm);
      const { Search } = await res.json();
      console.log(Search);
      if (Search == undefined) {
        setError("Please Enter a Valid Title");
      } else {
        setMovies(Search);
        setError(null);
      }
      setIsLoading(false);
    } catch (err) {
      console.log("errorrrrrrr", err.message);
      setIsLoading(false);
      setError(err.message);
    }
  }

  const handleGetMovieById = async (movieId) => {
    const res = await getMovieById(movieId);
    const movie = await res.json();
    // const found = (movies.find(item => item.imdbID == movieId))
    setMovie(movie);
    console.log(movie);
  };

  // const handleSubmit = () => {
  //   if (searchTerm !== "") getMovies();
  // };

  useEffect(() => {
    getMovies();
    document.querySelector("input").addEventListener("click", () => {});
    return () => {};
  }, [searchTerm]);

  const handleClose = () => {
    setOpen(false);
    setClose(false);
  };
  return (
    <>
      <div className="container">
      {close != true && (
        <Form setRequestTitle={setSearchTerm}
        setOpen={setOpen}
        setClose={setClose}
        // setType={setType} 
        />)}
      </div>
      {open && <Modal movie={movie} handleClose={handleClose} />}
      <div className="movieInfo">
        {isLoading ? (
          <div className="loadingBox">
            <div className="loading"></div>
          </div>
        ) : error ? (
          <h1 className="technicalD">Sorry, Something Went Wrong!{error}</h1>
        ) : (
          <section className="moviesContainer">
            {close == false && (
              <Movies
                setClose={setClose}
                handleGetMovieById={handleGetMovieById}
                movies={movies}
                setSearchTerm={setSearchTerm}
                setOpen={setOpen}
              />
            )}
          </section>
        )}
      </div>
    </>
  );
}

export default App;
