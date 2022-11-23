import React, { useState, useEffect } from "react";
// import MovieCard from './MovieCard';
import "./MovieDetails.css";

export default function MovieDetails(props) {
  console.log(props);


  return (
    <>
      {props.movie == undefined && <h1>loading</h1>}
      {props.movie.Title != undefined && (
        <div className="outerBox">
          <div className="detailsBox">
            <div className="fb-container">
              <div className="poster-box">
                <img src={props.movie.Poster} alt={props.movie.Title} />
              </div>
              <div className="fbc-2">
                <div className="title">
                  <h1>{props.movie.Title}</h1>
                </div>
                <div className="fbc-3">
                  <h5 className="split">{props.movie.Rated}</h5>
                  <h5>{props.movie.Runtime}</h5>
                </div>
                <div className="fbc-4">
                  <h5 className="genre">{props.movie.Genre}</h5>
                </div>
                <div className="fbc-5">
                  <h3 className="plot">Plot</h3>
                  <p className="descript">{props.movie.Plot}</p>
                  <h3>Actors</h3>
                  <p className="descript actors">{props.movie.Actors}</p>
                </div>
              </div>
              <div className="fbc-6">
                <h4>{props.movie.imdbRating}</h4>
              </div>
            </div>
          </div>
          <div className="btnBox">
            <button onClick={() => props.handleClose()}>Back</button>
          </div>
        </div>
      )}
    </>
  );
}
