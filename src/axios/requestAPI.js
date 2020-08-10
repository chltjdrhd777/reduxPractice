const API_KEY = "9a5891a36a5f3c9356e64cb7ad481b77";

const requests = {
  trend: `/trending/all/day?api_key=${API_KEY}`,
  netflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  romanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
