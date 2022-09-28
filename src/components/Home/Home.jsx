import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { api } from '../../services/api';
import s from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.fetchTrendingMovies().then(({ data }) => setMovies(data.results));
  }, []);

  return (
    <>
      <ul className={s.gallery}>
        {movies.map(({ title, poster_path, id }) => {
          return (
            <li key={id} className={s.item}>
              <img
                className={s.image}
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
              />
              <NavLink className={s.link}>{title}</NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
