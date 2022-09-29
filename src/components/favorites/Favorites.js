import React from "react";
import { connect } from "react-redux";

import { fetchFavoriteMovies, fetchFavoriteShows } from "../../actions";
import MovieList from "../list/List";
import "./favorites.scss";
import Loader from "../loader/Loader";

//login page
class Favorites extends React.Component {
  //need to fetch the data of genres and nowplaying movies
  componentDidMount() {
    this.props.fetchFavoriteMovies();
    this.props.fetchFavoriteShows();
  }

  renderFavorites() {
    return (
      <React.Fragment>
        <h2>Movies</h2>
        <MovieList items={this.props.movies} isDeletable={true} />
        <h2>Shows</h2>
        <MovieList items={this.props.shows} type="shows" isDeletable={true} />
      </React.Fragment>
    );
  }

  //login is reusing the imagecarousel component resized
  render() {
    return (
      <React.Fragment>
        <Loader lazyload={true} />
        <div className="main-favorites">
          <h1>Favorites</h1>
          {this.renderFavorites()}
        </div>
      </React.Fragment>
    );
  }
}

//getting the nowplaying movies and genres for each movie
const mapStateToProps = (state) => {
  return {
    movies: state.favoriteMovies,
    shows: state.favoriteShows,
  };
};

export default connect(mapStateToProps, {
  fetchFavoriteMovies,
  fetchFavoriteShows,
})(Favorites);
