import TMDB, { KEY } from "../apis/TMDB"; //Import baseURL & API Key

//action creator
//Applying redux-thunk to action creator that is async await to request API
export const fetchMovies = searchTerm => async dispatch => {
  const response = await TMDB.get(
    `/search/movie?api_key=${KEY}&query=${searchTerm}`,
  );

  dispatch({ type: "FETCH_MOVIES", payload: response.data });
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
  const response = await TMDB.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`,
  );

  //dispatches action to matching type reducer
  dispatch({ type: "FETCH_TRENDING", payload: response.data });
};

//action creator
//Creates an action with a payload of upcoming movie data from the API request
//does not dispatch action until API data has been loaded
export const fetchUpcoming = () => async dispatch => {
  const response = await TMDB.get(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY}`,
  );

  //dispatches action to matching type reducer
  dispatch({ type: "FETCH_UPCOMING", payload: response.data });
};
