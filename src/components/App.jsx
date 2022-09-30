import { Route, Routes, NavLink } from 'react-router-dom';
// import Home from '../pages/Home';
// import Movies from '../pages/Movies';
// import MovieDetails from '../pages/MovieDetails';
// import Cast from '../pages/Cast';
// import Reviews from '../pages/Reviews';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import s from './App.module.css';
import { lazy, Suspense } from 'react';

// const MyComponent = lazy(() => import('path/to/MyComponent'));

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));

export const App = () => {
  return (
    <>
      <nav className={s.nav}>
        <NavLink to="/" end className={s.link}>
          Home
        </NavLink>
        <NavLink to="movies" className={s.link}>
          Movies
        </NavLink>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<div>NotFound</div>} />
        </Routes>
      </Suspense>

      <ToastContainer autoClose={3000} />
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
