import React, { useState, createContext } from 'react'
import MovieList from './MovieList';

export const MovieContext = createContext();

export const MovieProvider = (props) => {

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
        <MovieContext.Provider value={[movies, setMovies]}>
            { props.children }
        </MovieContext.Provider>
    );
}