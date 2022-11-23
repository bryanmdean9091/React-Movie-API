import React from 'react';
import MovieDetails from './MovieDetails';
// import MovieDetails from './MovieDetails';
// import './modal.css';

export default function Modal({ movie, handleClose }) {
// console.log(props);
  return (
    <div className="modal-root">
     <MovieDetails movie={movie}
     handleClose={handleClose}
     />
      <div className="container"></div>
     
     
      
    </div>
  );
}
