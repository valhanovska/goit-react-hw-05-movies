import { NavLink } from 'react-router-dom';
// import Cast from '../Cast';

const MovieDetails = () => {
  //   const { movieId } = useParams();

  return (
    <>
      <div>Details</div>
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
    </>
  );
};

export default MovieDetails;
