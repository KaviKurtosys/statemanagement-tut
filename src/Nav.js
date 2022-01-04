import React, { useContext} from 'react';
import { MovieContext } from './MovieContext';

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);

    const styles = {
        backgroundColor: 'grey',
        margin: '0',
        padding: '5px 0'
    }

    return (
        <div style={styles}>
            <h3>Kavi</h3>
            <p>List of Movies: {movies.length}</p>
        </div>
    )
}

export default Nav;