import { useEffect } from 'react';
import { useState } from 'react';
import {
  NavLink,
  Link,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { api } from '../../services/api';

import s from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();

  const location = useLocation();

  useEffect(() => {
    api.fetchMovieDetails(movieId).then(({ data }) => {
      try {
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    });
  }, [movieId]);
  const from = location.state?.from ?? '/';
  return (
    <>
      <div className={s.container}>
        <Link to={from} className={s.back}>
          Go back
        </Link>
        {movie && (
          <div className={s.info}>
            <img
              className={s.image}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <div>
              <h2>
                {movie.title}({movie.release_date})
              </h2>
              <p>User Score: {movie.vote_average}</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <div className={s.genres}>
                <p className={s.text}>
                  {movie.genres.map(g => g.name).join(', ')}
                </p>
              </div>
            </div>
          </div>
        )}
        <NavLink className={s.link} to="cast">
          Cast
        </NavLink>
        <NavLink className={s.link} to="reviews">
          Reviews
        </NavLink>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
