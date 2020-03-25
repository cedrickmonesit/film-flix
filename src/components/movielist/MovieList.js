import React from "react";

import MovieCard from "../moviecard/MovieCard";
import "./movielist.scss";

class MovieList extends React.Component {
  //if this.props.match exists which means not falsey return jsx else return nothing
  //this.props.match is from Router provides movie name that the user searched
  renderSearchList() {
    if (this.props.match) {
      const searchTerm = this.props.match.params.movie;
      return (
        <React.Fragment>
          <h1> Search Results For {searchTerm}</h1>
          <div className="movie-list-container">
            <MovieCard searchTerm={searchTerm} />
          </div>
        </React.Fragment>
      );
    }
    return null;
  }

  //must pass in movies prop or it will return null
  renderMoviesList() {
    if (this.props.movies) {
      return (
        <React.Fragment>
          <div className="movie-list-container">
            <MovieCard movies={this.props.movies} />
          </div>
        </React.Fragment>
      );
    }

    return null;
  }

  render() {
    return (
      <div className="movie-list">
        {this.renderSearchList()} {this.renderMoviesList()}
      </div>
    );
  }
}

export default MovieList;
