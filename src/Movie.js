import React from 'react'
import './App.css'
export default function Movie({ movies }) {
    return (
        <>
            <div className="movie-container">
                {movies.map((movie, index) => (

                    <div key={index} className="movie" >
                        <p> {movie.Title}</p>
                        <img src={movie.Poster} />
                        <p>Yıl: {movie.Year}</p>
                    </div>
                ))}
            </div>
        </>
    )
}


