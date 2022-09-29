import axios from "axios";
// rate limit
import rateLimit from "axios-rate-limit";

//TMDB api key
export const KEY = "80f9558ee00fbe6653d7ee77b88e6eeb";

export default rateLimit(
  axios.create({
    baseURL: "https://api.themoviedb.org/3",
  }),
  { maxRequests: 1, perMilliseconds: 60000, maxRPS: 1 },
);
