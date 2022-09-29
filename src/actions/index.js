import TMDB, { KEY } from "../apis/TMDB"; //Import baseURL & API Key
import history from "../history";

//action creators are used to create actions with a payload of the data from the API request
//this is then dispatched to the reducers for State Management in the Redux Store

//action creator
//Applying redux-thunk to action creator that is async await to request API
export const fetchMovies = (searchTerm) => async (dispatch) => {
  const response = await TMDB.get(`/search/multi?api_key=${KEY}&query=${searchTerm}`);

  dispatch({ type: "FETCH_MOVIES", payload: response.data });
  history.push(`/list/search/results/${searchTerm}`);
};

//action creator
//Creates an action with a payload that is the changed input
export const onInputChange = (searchTerm) => {
  //connect function in component will handle dispatch of this action
  return {
    type: "ON_INPUT_CHANGE",
    payload: searchTerm,
  };
};

//action creator
//Creates an action with a payload of the trending movie data from the API request
//does not dispatch action until API data has been loaded
export const fetchTrending = () => async (dispatch) => {
  const response = await TMDB.get(`/trending/movie/day?api_key=${KEY}`);

  //dispatches action to matching type reducer
  dispatch({ type: "FETCH_TRENDING", payload: response.data });
};

//action creator
//Creates an action with a payload of upcoming movie data from the API request
//does not dispatch action until API data has been loaded
export const fetchUpcoming = () => async (dispatch) => {
  const response = await TMDB.get(`/movie/upcoming?api_key=${KEY}`);

  //dispatches action to matching type reducer
  dispatch({ type: "FETCH_UPCOMING", payload: response.data });
};

//action creator
export const fetchMovieDetails = (id) => async (dispatch) => {
  const response = await TMDB.get(`/movie/${id}?api_key=${KEY}`);

  //dispatches action to matching type reducer
  dispatch({ type: "FETCH_MOVIE_DETAILS", payload: response.data });
};

//action creator
export const fetchCredits = (id) => async (dispatch) => {
  const response = await TMDB.get(
    `/movie/${id}/credits?api_key=${KEY}
      `,
  );

  //dispatches action to matching type reducer
  dispatch({ type: "FETCH_CREDITS", payload: response.data });
};

//action creator
export const fetchTopRated = () => async (dispatch) => {
  const response = await TMDB.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=en-US&page=1`);

  //dispatches action to matching type reducer
  dispatch({ type: "FETCH_TOP_RATED", payload: response.data });
};

//action creator
export const fetchNowPlaying = () => async (dispatch) => {
  const response = await TMDB.get(`/movie/now_playing?api_key=${KEY}&language=en-US&page=1`);

  //dispatches action to matching type reducer
  dispatch({ type: "FETCH_NOW_PLAYING", payload: response.data });
};

//action creator
export const fetchPopular = () => async (dispatch) => {
  const response = await TMDB.get(`/movie/popular?api_key=${KEY}&language=en-US&page=1`);

  //dispatches action to matching type reducer
  dispatch({ type: "FETCH_POPULAR", payload: response.data });
};

//action creator
export const fetchTrailers = (id) => async (dispatch) => {
  const response = await TMDB.get(`/movie/${id}/videos?api_key=${KEY}&language=en-US`);

  //dispatches action to matching type reducer
  dispatch({ type: "FETCH_TRAILERS", payload: response.data });
};

//action creator
export const fetchSimilarMovies = (id) => async (dispatch) => {
  const response = await TMDB.get(`/movie/${id}/similar?api_key=${KEY}`);

  //dispatches action to matching type reducer
  dispatch({ type: "FETCH_SIMILAR_MOVIES", payload: response.data });
};

//action creator
export const fetchGenres = () => async (dispatch) => {
  const response = await TMDB.get(`/genre/movie/list?api_key=${KEY}
  `);

  //dispatches action to matching type reducer
  dispatch({ type: "FETCH_GENRES", payload: response.data });
};

//action creator
export const fetchActor = (id) => async (dispatch) => {
  const response = await TMDB.get(`/person/${id}?api_key=${KEY}&language=en-US`);

  //dispatches action to matching type reducer
  dispatch({ type: "FETCH_ACTOR", payload: response.data });
};

//action creator
export const fetchActorMovies = (id) => async (dispatch) => {
  const response = await TMDB.get(`/person/${id}/movie_credits?api_key=${KEY}&language=en-US`);

  //dispatches action to matching type reducer
  dispatch({ type: "FETCH_ACTOR_MOVIES", payload: response.data });
};

//action creator
export const fetchTvPopular = () => async (dispatch) => {
  const response = await TMDB.get(`/tv/popular?api_key=${KEY}&language=en-US&page=1
  `);

  //dispatches action to matching type reducer
  dispatch({ type: "FETCH_TV_POPULAR", payload: response.data });
};

//action creator
export const fetchTvTopRated = () => async (dispatch) => {
  const response = await TMDB.get(
    `/tv/top_rated?api_key=${KEY}&language=en-US&page=1
    `,
  );

  //dispatches action to matching type reducer
  dispatch({ type: "FETCH_TV_TOP_RATED", payload: response.data });
};

//action creator
export const fetchTvAiringToday = () => async (dispatch) => {
  const response = await TMDB.get(`/tv/airing_today?api_key=${KEY}&language=en-US`);

  //dispatches action to matching type reducer
  dispatch({ type: "FETCH_TV_AIRING_TODAY", payload: response.data });
};

//action creator
export const fetchTvOnAir = () => async (dispatch) => {
  const response = await TMDB.get(`/tv/on_the_air?api_key=${KEY}&language=en-US`);

  //dispatches action to matching type reducer
  dispatch({ type: "FETCH_TV_ON_AIR", payload: response.data });
};

//action creator
export const fetchTvTrending = () => async (dispatch) => {
  const response = await TMDB.get(`/trending/tv/day?api_key=${KEY}&language=en-US`);

  //dispatches action to matching type reducer
  dispatch({ type: "FETCH_TV_TRENDING", payload: response.data });
};

//action creator
export const fetchShowDetails = (id) => async (dispatch) => {
  const response = await TMDB.get(`/tv/${id}?api_key=${KEY}&language=en-US`);

  //dispatches action to matching type reducer
  dispatch({ type: "FETCH_SHOW_DETAILS", payload: response.data });
};

//action creator
export const fetchShowVideos = (id) => async (dispatch) => {
  const response = await TMDB.get(`/tv/${id}/videos?api_key=${KEY}&language=en-US`);

  //dispatches action to matching type reducer
  dispatch({ type: "FETCH_SHOW_VIDEOS", payload: response.data });
};

//action creator
export const fetchShowCredits = (id) => async (dispatch) => {
  const response = await TMDB.get(`tv/${id}/credits?api_key=${KEY}&language=en-US`);

  //dispatches action to matching type reducer
  dispatch({ type: "FETCH_SHOW_CREDITS", payload: response.data });
};

//action creator
export const fetchShowSimilar = (id) => async (dispatch) => {
  const response = await TMDB.get(`/tv/${id}/recommendations?api_key=${KEY}&language=en-US`);

  //dispatches action to matching type reducer
  dispatch({ type: "FETCH_SHOW_SIMILAR", payload: response.data });
};

//creat token
//create token for approval by user
//this will be invoked in the sign in component
export const createSignInToken = () => async (dispatch, getState) => {
  const response = await TMDB.get(`/authentication/token/new?api_key=${KEY}`);

  //dispatches action to matching type reducer
  await dispatch({
    type: "CREATE_SIGN_IN_TOKEN",
    payload: response.data.request_token,
  });

  //store token locally for redirect back to /user/approval
  localStorage.setItem("token", getState().signInToken);

  //go to the TMDB website with token to get user approval
  //redirect to TMDB site then redirect back to film flix
  window.location.replace(`https://www.themoviedb.org/authenticate/${getState().signInToken}?redirect_to=https://cedrickmonesit.github.io/film-flix/`);
};

//sign in
//create a session after token has been approved
//this will be invoked in the approval component
//session id will be used to get user account information
export const createSignInSession = () => async (dispatch, getState) => {
  //when the token is approved use the token to create a new session to access user account
  const response = await TMDB.post(
    `/authentication/session/new?api_key=${KEY}`,
    //user local storage to access token after redirecting back to film flix from TMDB
    //request body
    { request_token: localStorage.getItem("token") },
  );

  await dispatch({
    type: "CREATE_SIGN_IN_SESSION",
    payload: response.data.session_id,
  });

  //store session id so refreshing site does not prevent sign out or loss of data
  localStorage.setItem("session", getState().signInSession);

  //navigate to /user/account
  history.push("/user/account");
};

//sign out
//this will delete the user session basically signing out
export const deleteSignOutSession = () => async (dispatch, getState) => {
  const response = await TMDB.delete(
    `/authentication/session?api_key=${KEY}
  `,
    {
      //use local storage to retrieve session id in case of refresh
      //request body
      data: { session_id: localStorage.getItem("session") },
    },
  );
  //removes everything in localstorage such as session id and token and account id
  localStorage.clear();

  await dispatch({
    type: "DELETE_SIGN_OUT_SESSION",
    payload: response.data,
  });
};

//fetch account details
//we are using the session id that was created earlier by signing in to get user account information
export const fetchAccountDetails = () => async (dispatch, getState) => {
  const response = await TMDB.get(
    //use local storage to retrieve session id in case of refresh
    `/account?api_key=${KEY}&session_id=${localStorage.getItem("session")}
  `,
  );

  await dispatch({
    type: "FETCH_ACCOUNT_DETAILS",
    payload: response.data,
  });

  //store account id in local storage for use
  localStorage.setItem("account", getState().accountDetails.id);
};

//fetch favorite movies
export const fetchFavoriteMovies = () => async (dispatch) => {
  const account = localStorage.getItem("account");
  const session = localStorage.getItem("session");

  const response = await TMDB.get(
    //use local storage to retrieve session id in case of refresh
    `/account/${account}/favorite/movies?api_key=${KEY}&session_id=${session}&language=en-US
  `,
  );

  dispatch({
    type: "FETCH_FAVORITE_MOVIES",
    payload: response.data.results,
  });
};

//fetch favorite tv shows
export const fetchFavoriteShows = () => async (dispatch) => {
  const account = localStorage.getItem("account");
  const session = localStorage.getItem("session");

  const response = await TMDB.get(
    //use local storage to retrieve session id in case of refresh
    `/account/${account}/favorite/tv?api_key=${KEY}&session_id=${session}&language=en-US
  `,
  );

  dispatch({
    type: "FETCH_FAVORITE_SHOWS",
    payload: response.data.results,
  });
};

//add to favorites
export const postFavorite = (id, media_type, isFavorite) => async (dispatch) => {
  const account = localStorage.getItem("account");
  const session = localStorage.getItem("session");

  const response = await TMDB.post(
    `/account/${account}/favorite?api_key=${KEY}&session_id=${session}`,
    //request body
    //string, string, boolean
    { media_type: media_type, media_id: id, favorite: isFavorite },
    //headers
    { "content-type": "application/json;charset=utf-8" },
  );

  await dispatch({
    type: "POST_FAVORITE",
    payload: response.data,
  });
};
