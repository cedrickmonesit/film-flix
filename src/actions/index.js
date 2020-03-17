import TMDB, { KEY } from "../apis/TMDB"; //Import baseURL & API Key
import history from "../history";

//action creator
//Applying redux-thunk to action creator that is async await to request API
export const fetchMovies = searchTerm => async dispatch => {
  const response = await TMDB.get(
    `/search/movie?api_key=${KEY}&query=${searchTerm}`,
  );

  dispatch({ type: "FETCH_MOVIES", payload: response.data });
  history.push(`/list/search/movies/${searchTerm}`);
};

//action creator
//Creates an action with a payload that is the changed input
export const onInputChange = searchTerm => {
  //connect function in component will handle dispatch of this action
  return {
    type: "ON_INPUT_CHANGE",
    payload: searchTerm,
  };
};

//action creator
//Creates an action with a payload of the trending movie data from the API request
//does not dispatch action until API data has been loaded
export const fetchTrending = () => async dispatch => {
  const response = await TMDB.get(`/trending/movie/week?api_key=${KEY}`);

  //dispatches action to matching type reducer
  dispatch({ type: "FETCH_TRENDING", payload: response.data });
};

//action creator
//Creates an action with a payload of upcoming movie data from the API request
//does not dispatch action until API data has been loaded
export const fetchUpcoming = () => async dispatch => {
  const response = await TMDB.get(`/movie/upcoming?api_key=${KEY}`);

  //dispatches action to matching type reducer
  dispatch({ type: "FETCH_UPCOMING", payload: response.data });
};

//action creator
export const fetchMovieDetails = id => async dispatch => {
  const response = await TMDB.get(`/movie/${id}?api_key=${KEY}`);

  //dispatches action to matching type reducer
  dispatch({ type: "FETCH_MOVIE_DETAILS", payload: response.data });
};

//action creator
export const fetchCredits = id => async dispatch => {
  const response = await TMDB.get(
    `/movie/${id}/credits?api_key=${KEY}
      `,
  );

  //dispatches action to matching type reducer
  dispatch({ type: "FETCH_CREDITS", payload: response.data });
};

//action creator
export const fetchTopRated = () => async dispatch => {
  const response = await TMDB.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=en-US&page=1`,
  );

  //dispatches action to matching type reducer
  dispatch({ type: "FETCH_TOP_RATED", payload: response.data });
};

//action creator
export const fetchNowPlaying = () => async dispatch => {
  const response = await TMDB.get(
    `/movie/now_playing?api_key=${KEY}&language=en-US&page=1`,
  );

  //dispatches action to matching type reducer
  dispatch({ type: "FETCH_NOW_PLAYING", payload: response.data });
};

//action creator
export const fetchPopular = () => async dispatch => {
  const response = await TMDB.get(
    `/movie/popular?api_key=${KEY}&language=en-US&page=1`,
  );

  //dispatches action to matching type reducer
  dispatch({ type: "FETCH_POPULAR", payload: response.data });
};

//action creator
export const fetchTrailers = id => async dispatch => {
  const response = await TMDB.get(
    `/movie/${id}/videos?api_key=${KEY}&language=en-US`,
  );

  //dispatches action to matching type reducer
  dispatch({ type: "FETCH_TRAILERS", payload: response.data });
};

//action creator
export const fetchSimilarMovies = id => async dispatch => {
  const response = await TMDB.get(`/movie/${id}/similar?api_key=${KEY}`);

  //dispatches action to matching type reducer
  dispatch({ type: "FETCH_SIMILAR_MOVIES", payload: response.data });
};

//action creator
export const fetchGenres = () => async dispatch => {
  const response = await TMDB.get(`/genre/movie/list?api_key=${KEY}
  `);

  //dispatches action to matching type reducer
  dispatch({ type: "FETCH_GENRES", payload: response.data });
};

//action creator
export const fetchActor = id => async dispatch => {
  const response = await TMDB.get(
    `/person/${id}?api_key=${KEY}&language=en-US`,
  );

  //dispatches action to matching type reducer
  dispatch({ type: "FETCH_ACTOR", payload: response.data });
};
