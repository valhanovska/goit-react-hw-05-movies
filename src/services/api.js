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

const fetchMovie = async query => {
  try {
    const URL = `/search/movie?api_key=${API_KEY}&query=${query}`;
    const data = await axios.get(URL);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchMovieDetails = async id => {
  try {
    const URL = `/movie/${id}?api_key=${API_KEY}`;
    const data = await axios.get(URL);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchMovieDetailsActors = async id => {
  try {
    const URL = `/movie/${id}/credits?api_key=${API_KEY}`;
    const data = await axios.get(URL);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchMovieDetailsReviews = async id => {
  try {
    const URL = `/movie/${id}/reviews?api_key=${API_KEY}`;
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
