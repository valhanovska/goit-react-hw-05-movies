import { Route, Routes, NavLink } from 'react-router-dom';
import Home from '../components/Home';
import Movies from '../components/Movies';
import MovieDetails from '../components/MovieDetails';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';

import s from './App.module.css';

export const App = () => {
  return (
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101',
    //   }}
    // >
    //   React homework template
    // </div>
    <>
      <nav className={s.nav}>
        <NavLink to="/" end className={s.link}>
          Home
        </NavLink>
        <NavLink to="movies" className={s.link}>
          Movies
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<div>NotFound</div>} />
      </Routes>
    </>
  );
};

// '/' – компонент Home, домашня сторінка зі списком популярних
// кінофільмів.

// '/movies' – компонент Movies, сторінка пошуку кінофільмів за
// ключовим словом.

// '/movies/:movieId' – компонент MovieDetails, сторінка з
// детальною інформацією про кінофільм.

// /movies/:movieId/cast – компонент Cast, інформація про
// акторський склад. Рендериться на сторінці MovieDetails.

// /movies/:movieId/reviews – компонент Reviews, інформація
// про огляди. Рендериться на сторінці MovieDetails.
