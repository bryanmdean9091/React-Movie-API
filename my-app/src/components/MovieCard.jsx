import "./MovieCard.css";

export default function MovieCard({
  title,
  posterUrl,
  movieId,
  handleGetMovieById,
  setOpen,
  setClose,
}) {
  const handleClick = () => {
    handleGetMovieById(movieId);
    setOpen(true);
    setClose(true);
  };

  

  return (
    <div className="card-container">
      <div className="movie-card">
        <img
          className="poster"
          src={posterUrl}
          alt={title}
          onClick={handleClick}
        />
         <div className="card-body">
          <h3 className="title">{title}</h3>
        </div>
      </div>
     
     
    </div>
  );
}

MovieCard.defaultProps = {
  title: "",
};
