import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Navigation from "./navigation/Navigation";
import SearchResults from "./searchresults/SearchResults";
import MovieDetails from "./details/MovieDetails";
import ShowDetails from "./details/showdetails/ShowDetails";
import ActorDetails from "./actorDetails/ActorDetails";
import Shows from "./home/Shows";
import Home from "./home/Home";
import Login from "./login/Login";
import Approval from "./login/Approval";
import Account from "./account/Account";
import Favorites from "./favorites/Favorites";
import Footer from "./footer/Footer";
import history from "../history";

const App = () => {
  //these routes are from Router used to navigate the one page app
  //navigation is using history.push and Link tags to show components
  //anything outside of the switch will not be changed on the one page app
  return (
    <HashRouter history={history}>
      <Navigation />
      <div className="main">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user/signin" exact component={Login} />
          <Route path="/user/approval" exact component={Approval} />
          <Route path="/user/account" exact component={Account} />
          <Route path="/user/favorites" exact component={Favorites} />
          <Route path="/details/movie/:id" exact component={MovieDetails} />
          <Route path="/details/show/:id" exact component={ShowDetails} />
          <Route path="/details/actor/:id" exact component={ActorDetails} />
          <Route
            path="/list/search/results/:searchterm"
            exact
            component={SearchResults}
          />
          <Route path="/shows" exact component={Shows} />
        </Switch>
      </div>
      <Footer />
    </HashRouter>
  );
};

export default App;
