import MovieCard from './MovieCard';

function Movies({ movies, handleClick, handleGetMovieById, setOpen, setClose }) {
  console.log('our movies: ', movies);

  return (
    <>
      <div className="movies row">
        {movies?.map((movie) => (
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
          />
        ))}
      </div>
    </>
  );
}

export default Movies;
