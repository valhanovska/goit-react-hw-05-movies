import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// import { ReactComponent as MyIcon } from '../../icon/search.svg';

// import s from './Movies.module.css';

const Movies = () => {
  const [input, setInput] = useState('');
  const [movies, setMovies] = useState([]);

  const handleChange = e => {
    setInput(e.target.value.toLowerCase());
  };

  return (
    <>
      <label>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          autocomplete="off"
          autofocus
          placeholder="Search movies"
        />
      </label>
      <button type="submit">
        Search
        {/* <MyIcon /> */}
      </button>
      <Outlet />
    </>
  );
};

export default Movies;
