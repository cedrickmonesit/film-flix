import { combineReducers } from "redux";

import movieReducers from "./movieReducer"; //import reducer
import searchTermReducer from "./searchTermReducer";
import trendingReducer from "./trendingReducer";
import upcomingReducer from "./upcomingReducer";
import movieDetailsReducer from "./movieDetailsReducer";

//take reducer put it inside to combineReducers
export default combineReducers({
  //this will be named in the store
  movieData: movieReducers,
  searchTerm: searchTermReducer,
  trendingData: trendingReducer,
  upcomingData: upcomingReducer,
  movieDetails: movieDetailsReducer,
});
