import axios from "axios";
// rate limit
import rateLimit from "axios-rate-limit";

//TMDB api key
export const KEY = {
  /* Insert TMDB API KEY */
};

export default rateLimit(
  axios.create({
    baseURL: "https://api.themoviedb.org/3",
  }),
  { maxRequests: 1, perMilliseconds: 60000, maxRPS: 1 },
);
