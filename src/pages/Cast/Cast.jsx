import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';

import s from './Cast.module.css';

const Cast = () => {
  const [actors, setActors] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    api.fetchMovieDetailsActors(movieId).then(({ data }) => {
      try {
        setActors(data.cast);
      } catch (error) {
        console.log(error);
      }
    });
  }, [movieId]);

  return (
    <ul className={s.container}>
      {actors &&
        actors.map(actor => (
          <li>
            <img
              className={s.image}
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt={actor.name}
            />
            <h3>{actor.name}</h3>
            <p>Character: {actor.character}</p>
          </li>
        ))}
    </ul>
  );
};

export default Cast;
