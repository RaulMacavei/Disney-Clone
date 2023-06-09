import axios from "axios";

// eslint-disable-next-line no-unused-vars
const api_key = "86880ecf2940626e590fd172c1aa7c60";
const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=86880ecf2940626e590fd172c1aa7c60";

const getTrendingVideos = axios.get(
  "https://api.themoviedb.org/3/trending/all/day?api_key=" + api_key
);
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
