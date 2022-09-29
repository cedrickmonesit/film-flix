import React from "react";
import { connect } from "react-redux";
import { FaStar, FaRegStar, FaHeart } from "react-icons/fa";
import Rating from "react-rating";

import {
  fetchShowDetails,
  fetchShowVideos,
  fetchShowCredits,
  fetchShowSimilar,
  fetchGenres,
  postFavorite,
} from "../../../actions";
import "../movieDetails.scss";
import TrailersCarousel from "../trailerscarousel/TrailersCarousel";
import PeopleCarousel from "../peoplecarousel/PeopleCarousel";
import Carousel from "../../carousel/Carousel";
import renderMovieGenres from "../../renderMovieGenres";
import Loader from "../../loader/Loader";

class ShowDetails extends React.Component {
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
    this.props.fetchShowDetails(id);
    this.props.fetchShowVideos(id);
    this.props.fetchShowCredits(id);
    this.props.fetchShowSimilar(id);
    this.props.fetchGenres();
  }

  renderSimilarShows(similar) {
    if (similar === undefined || similar.length === 0) {
      return null;
    }
    return (
      <div className="movie-details-carousel-container">
        <h1 className="movie-details-main-genre">Similar Shows</h1>
        <Carousel shows={similar} />
      </div>
    );
  }

  //if there are no trailers return null
  renderVideos(videos) {
    if (videos === undefined || videos.length === 0) {
      return null;
    }
    return (
      <div className="movie-details-carousel-container">
        <h1 className="movie-details-main-genre">Videos</h1>
        <TrailersCarousel trailers={videos} />
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
    //post action creators for favorite tv shows list
    this.props.postFavorite(id, "tv", true);
    //change color to secondary after click
    document.querySelector(".details-fav-heart").style.color = "#fe346e";
  };

  renderDetails = () => {
    if (this.props.show) {
      return (
        <div className="movie-details">
          <header
            className="movie-details-header"
            style={{
              background: `linear-gradient(0deg, rgb(0, 0, 0) 5%, rgba(0, 0, 0, 0.45) 92%), url(https://image.tmdb.org/t/p/original/${this.props.show.backdrop_path}) center/cover no-repeat border-box, rgb(255, 255, 255)`,
            }}
          >
            <div className="movie-details-header-info-container">
              <img
                className="movie-details-poster"
                src={`https://image.tmdb.org/t/p/w500/${this.props.show.poster_path}`}
                alt={this.props.show.name}
              />
              <div className="movie-details-title">
                <h1>{this.props.show.name}</h1>
                <Rating
                  emptySymbol={
                    <FaRegStar className="movie-details-star-rating" />
                  }
                  fullSymbol={<FaStar className="movie-details-star-rating" />}
                  initialRating={this.props.show.vote_average / 2}
                  readonly
                />
                <p>
                  {`${this.props.show.status} | ${this.renderDate(
                    this.props.show.first_air_date,
                  )} |
                  ${this.props.show.original_language}`}
                </p>
                <p className="movie-details-summary-genres">
                  {renderMovieGenres(this.props.show.genres, this.props.genres)}
                </p>
              </div>
              <FaHeart
                className="icon details-fav-heart"
                onClick={this.onClickAddToFavorites}
              />
            </div>
          </header>
          <main className="movie-details-main">
            <div className="movie-details-summary">
              <h2>Summary</h2>
              <p>{this.props.show.overview}</p>
            </div>

            {this.renderVideos(this.props.videos)}

            {this.renderCredits(this.props.credits)}

            {this.renderSimilarShows(this.props.similar)}
          </main>
        </div>
      );
    }
    return;
  };
  render() {
    return (
      <React.Fragment>
        <Loader lazyload={true} /> {this.renderDetails()}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    show: state.showDetails,
    credits: state.showCredits.cast,
    videos: state.showVideos.results,
    similar: state.showSimilar.results,
    genres: state.genresData.genres,
    status: state.postFavoriteStatus.status_message,
  };
};

export default connect(mapStateToProps, {
  fetchShowDetails,
  fetchShowVideos,
  fetchShowCredits,
  fetchShowSimilar,
  fetchGenres,
  postFavorite,
})(ShowDetails);
