import MovieCard from './MovieCard';
import './Movies.css';


function Movies({ movies, handleClick, handleGetMovieById, setOpen, setClose, moviesPerPage }) {
  console.log('our movies: ', movies);

  return (
    <>
      <div className="movies">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            type={movie.Type}
            posterUrl={movie.Poster}
            movieId={movie.imdbID}
            handleGetMovieById={handleGetMovieById}
            setOpen={setOpen}
            handleClick={handleClick}
            setClose={setClose}
            moviesPerPage={moviesPerPage}
          />
        ))}
      </div>
    </>
  );
}

export default Movies;
