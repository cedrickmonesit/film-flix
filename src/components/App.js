import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Navigation from "./navigation/Navigation";
import MovieList from "./MovieList";
import MovieDetails from "./moviedetails/MovieDetails";
import Home from "./home/Home";
import Footer from "./footer/Footer";
import history from "../history";

const App = () => {
  return (
    <Router history={history}>
      <Navigation />
      <div className="main">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/moviedetails/:id" exact component={MovieDetails} />
          <Route path="/movielist" exact component={MovieList} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
