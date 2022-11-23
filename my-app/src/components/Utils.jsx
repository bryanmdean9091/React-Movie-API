


export function getMoviesByName(name) {
  return fetch(
    `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MY_API_KEY}&s=${name}`
  );
}

export function getMovieById(movieId) {
    return fetch(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MY_API_KEY}&i=${movieId}`
    );
  }
  