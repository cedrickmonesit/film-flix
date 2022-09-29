import React from "react";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./home.scss";
import { fetchTrending, fetchUpcoming, fetchTopRated, fetchNowPlaying, fetchPopular, fetchGenres } from "../../actions";
import Carousel from "../carousel/Carousel";
import ImageCarousel from "../carousel/ImageCarousel";
import Loader from "../loader/Loader";

class Home extends React.Component {
  //lifecycle method
  //when Home component mounts it will invoke these action creators that fetch data from TMDB API
  componentDidMount() {
    //movies
    this.props.fetchNowPlaying();
    this.props.fetchTrending();
    this.props.fetchUpcoming();
    this.props.fetchTopRated();
    this.props.fetchPopular();
    this.props.fetchGenres();
    this.props.fetchTopRated();
    window.scrollTo(0, 0);
  }

  //will render movies with carousels shows are rendered through the shows component
  //movies and shows are switched using react-router-dom {Link} movies are with the Home component while shows are in the shows component
  renderHome(movies, genres) {
    return (
      <React.Fragment>
        <Loader lazyload={true} />
        <div className="home-container-image-carousel">
          <ImageCarousel movies={movies.nowPlaying} genres={genres} title="Now Playing" />
        </div>

        <div className="home-container-movie-show-buttons">
          <Link className="home-container-movies-button" to="/">
            Movies
          </Link>
          <Link className="home-container-shows-button" to="/shows">
            Shows
          </Link>
        </div>

        <div className="home-container-carousel">
          <h1 className="home-container-genre">Upcoming</h1>
          <Carousel movies={movies.upcoming} />
          <hr className="home-container-coursel__separator" />
        </div>
        <div className="home-container-carousel">
          <h1 className="home-container-genre">Trending</h1>
          <Carousel movies={movies.trending} />
          <hr className="home-container-coursel__separator" />
        </div>
        <div className="home-container-carousel">
          <h1 className="home-container-genre">Popular</h1>
          <Carousel movies={movies.popular} />
          <hr className="home-container-coursel__separator" />
        </div>
        <div className="home-container-carousel">
          <h1 className="home-container-genre">Top Rated</h1>
          <Carousel movies={movies.topRated} />
        </div>
      </React.Fragment>
    );
  }

  render() {
    if (window.location.href.indexOf("approved") > -1) {
      window.location.href = "https://cedrickmonesit.github.io/film-flix/#/user/approval";
    }
    return <div className="home-container">{this.renderHome(this.props.movies, this.props.genres)}</div>;
  }
}

//filter the data from the redux store to the Home component's props for passing onto the Carousel component as props
const mapStateToProps = (state) => {
  return {
    movies: {
      trending: state.trendingData.results,
      upcoming: state.upcomingData.results,
      topRated: state.topRatedData.results,
      nowPlaying: state.nowPlayingData.results,
      popular: state.popularData.results,
    },

    genres: state.genresData.genres,
  };
};

//connect function from react-redux to access redux store and dispatch actions
//to use action creators it must be passed into the connect()
export default connect(mapStateToProps, {
  fetchTrending,
  fetchUpcoming,
  fetchTopRated,
  fetchNowPlaying,
  fetchPopular,
  fetchGenres,
})(Home);
