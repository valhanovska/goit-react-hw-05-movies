import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';

import s from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    api.fetchMovieDetailsReviews(movieId).then(({ data }) => {
      try {
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    });
  }, [movieId]);

  return (
    <ul className={s.container}>
      {reviews &&
        reviews.map(rev => (
          <li>
            <h3>{rev.author}</h3>
            <p>{rev.content}</p>
          </li>
        ))}
    </ul>
  );
};

export default Reviews;
