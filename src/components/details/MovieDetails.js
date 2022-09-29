import React from "react";
import { connect } from "react-redux";
import { FaStar, FaRegStar, FaHeart } from "react-icons/fa";
import Rating from "react-rating";

import {
  fetchMovieDetails,
  fetchCredits,
  fetchTrailers,
  fetchSimilarMovies,
  fetchGenres,
  postFavorite,
} from "../../actions";
import "./movieDetails.scss";
import TrailersCarousel from "./trailerscarousel/TrailersCarousel.js";
import PeopleCarousel from "./peoplecarousel/PeopleCarousel";
import Carousel from "../carousel/Carousel";
import renderMovieGenres from "../renderMovieGenres";
//import Loader from "../loader/Loader";

class MovieDetails extends React.Component {
  componentDidMount() {
    this.fetchData();
  }

  //checks if props changed compares it to previous props
  //checks if id is the same as previous id
  //the props being changed is the id in the URL to make the request to the api using id
  //scroll to the top
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchData();
    }
    window.scrollTo(0, 0);
  }

  //make api request using action creators
  fetchData() {
    const id = this.props.match.params.id;
    this.props.fetchMovieDetails(id);
    this.props.fetchCredits(id);
    this.props.fetchTrailers(id);
    this.props.fetchSimilarMovies(id);
    this.props.fetchGenres();
  }

  renderSimilarMovies(similarMovies) {
    if (similarMovies === undefined || similarMovies.length === 0) {
      return null;
    }
    return (
      <div className="movie-details-carousel-container">
        <h1 className="movie-details-main-genre">Similar Movies</h1>
        <Carousel movies={similarMovies} />
      </div>
    );
  }

  renderTrailers(trailers) {
    if (trailers === undefined || trailers.length === 0) {
      return null;
    }
    return (
      <div className="movie-details-carousel-container">
        <h1 className="movie-details-main-genre">Trailers</h1>
        <TrailersCarousel trailers={trailers} />
      </div>
    );
  }

  //if credits data have not loaded return nothing
  renderCredits(credits) {
    if (credits === undefined || credits.length === 0) {
      return null;
    }
    return (
      <div className="movie-details-carousel-container">
        <h1 className="movie-details-main-genre">Cast</h1>
        <PeopleCarousel credits={credits} />
      </div>
    );
  }

  //filter year/month/day from release date
  renderDate(releaseDate) {
    if (releaseDate) {
      const date = releaseDate.split("-");
      const year = date[0];
      return year;
    }
    return null;
  }

  //this method is a callback function from onclick so it must be an arrow function
  onClickAddToFavorites = () => {
    const id = this.props.match.params.id;
    //post action creator to add to favorite movies list
    this.props.postFavorite(id, "movie", true);
    //changes color to secondary after clicked
    document.querySelector(".details-fav-heart").style.color = "#fe346e";
  };

  renderDetails = () => {
    if (this.props.movie) {
      return (
        <div className="movie-details">
          <header
            className="movie-details-header"
            style={{
              background: `linear-gradient(0deg, rgb(0, 0, 0) 5%, rgba(0, 0, 0, 0.45) 92%), url(https://image.tmdb.org/t/p/original/${this.props.movie.backdrop_path}) center/cover no-repeat border-box, rgb(255, 255, 255)`,
            }}
          >
            <div className="movie-details-header-info-container">
              <img
                className="movie-details-poster"
                src={`https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`}
                alt={this.props.movie.title}
              />
              <div className="movie-details-title">
                <h1>{this.props.movie.title}</h1>
                <Rating
                  emptySymbol={
                    <FaRegStar className="movie-details-star-rating" />
                  }
                  fullSymbol={<FaStar className="movie-details-star-rating" />}
                  initialRating={this.props.movie.vote_average / 2}
                  readonly
                />
                <FaHeart
                  className="icon details-fav-heart"
                  onClick={this.onClickAddToFavorites}
                />
                <p>
                  {`${this.props.movie.status} | ${this.renderDate(
                    this.props.movie.release_date,
                  )} |
                  ${this.props.movie.original_language}`}
                </p>
                <p className="movie-details-summary-genres">
                  {renderMovieGenres(
                    this.props.movie.genres,
                    this.props.genres,
                  )}
                </p>
              </div>
            </div>
          </header>
          <main className="movie-details-main">
            <div className="movie-details-summary">
              <h2>Summary</h2>
              <p>{this.props.movie.overview}</p>
            </div>

            {this.renderTrailers(this.props.trailers)}

            {this.renderCredits(this.props.credits)}

            {this.renderSimilarMovies(this.props.similarMovies)}
          </main>
        </div>
      );
    }
    return;
  };
  render() {
    return (
      <React.Fragment>
        {/*<Loader lazyload={true} />*/}
        {this.renderDetails()}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.movieDetails,
    credits: state.creditsData.cast,
    trailers: state.trailersData.results,
    similarMovies: state.similarMoviesData.results,
    genres: state.genresData.genres,
    status: state.postFavoriteStatus.status_message,
  };
};

export default connect(mapStateToProps, {
  fetchMovieDetails,
  fetchCredits,
  fetchTrailers,
  fetchSimilarMovies,
  fetchGenres,
  postFavorite,
})(MovieDetails);
