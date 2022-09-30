import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { api } from '../../services/api';
import Searchbar from '../../components/Searchbar';
// import { ReactComponent as MyIcon } from '../../icon/search.svg';

import s from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();
  useEffect(() => {
    if (query) {
      try {
        api.fetchMovie(query).then(({ data }) => {
          if (data.results.length === 0) {
            setSearchParams('');
          }
          setMovies(data.results);
        });
      } catch (error) {
        console.log(error);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleSubmit = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <div className={s.container}>
      <Searchbar onSubmit={handleSubmit} />
      <div>
        <ul className={s.gallery}>
          {movies.map(({ title, poster_path, id }) => {
            return (
              <li key={id} className={s.item}>
                <Link
                  to={`/movies/${id}`}
                  className={s.link}
                  state={{ from: location }}
                >
                  <img
                    className={s.image}
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={title}
                  />
                  <p className={s.link}>{title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Movies;
