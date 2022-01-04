import React, { useState } from 'react';

const MovieList = () => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 21324
        },
        {
            name: 'Game Of Thrones',
            price: '$10',
            id: 25543
        },
        {
            name: 'Inception',
            price: '$10',
            id: 12345
        }
    ]);

    return (
        <div>
            { movies.map(movie => (
                <li>{movie.name}</li>
            ))}
        </div>
    )
}

export default MovieList;