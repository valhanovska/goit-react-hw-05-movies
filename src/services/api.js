import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '4126216689337915d73a8e90fb5db117';

const fetchTrendingMovies = async () => {
  try {
    const URL = `/trending/movie/day?api_key=${API_KEY}`;
    const data = await axios.get(URL);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchMovie = async () => {
  try {
    const URL = `/search/movie?api_key=${API_KEY}&query={query}`;
    const data = await axios.get(URL);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchMovieDetails = async () => {
  try {
    const URL = `/search/movie/{movieId}?api_key=${API_KEY}`;
    const data = await axios.get(URL);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchMovieDetailsActors = async () => {
  try {
    const URL = `/search/movie/{movieId}/credits?api_key=${API_KEY}`;
    const data = await axios.get(URL);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchMovieDetailsReviews = async () => {
  try {
    const URL = `/search/movie/{movieId}/reviews?api_key=${API_KEY}`;
    const data = await axios.get(URL);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const api = {
  fetchTrendingMovies,
  fetchMovie,
  fetchMovieDetails,
  fetchMovieDetailsActors,
  fetchMovieDetailsReviews,
};

// https://api.themoviedb.org/3/movie/550?api_key=4126216689337915d73a8e90fb5db117

// https://api.themoviedb.org/3/trending/movie/day - home

// /search/movie - movies

// /movie/{movie_id} - details

// /movie/{movie_id}/credits - actors

// /movie/{movie_id}/reviews - reviews
