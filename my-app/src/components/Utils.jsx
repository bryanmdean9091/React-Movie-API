


export function getMoviesByName(name,page, type ) {
  return fetch(
    `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MY_API_KEY}&s=${name}&page=${page}&type=${type}`
  );
}

export function getMovieById(movieId) {
    return fetch(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MY_API_KEY}&i=${movieId}`
    );
  }
  