import React from "react";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import { connect } from "react-redux";

import Carousel from "../carousel/Carousel";
import ImageCarousel from "../carousel/ImageCarousel";
import "./home.scss";
import {
  fetchTrending,
  fetchUpcoming,
  fetchTopRated,
  fetchNowPlaying,
  fetchPopular,
  fetchGenres,
} from "../../actions";

class Home extends React.Component {
  //lifecycle method
  //when Home component mounts it will invoke these actions that fetch data from TMDB API
  componentDidMount() {
    this.props.fetchTrending();
    this.props.fetchUpcoming();
    this.props.fetchTopRated();
    this.props.fetchNowPlaying();
    this.props.fetchPopular();
    this.props.fetchGenres();
  }

  renderHome(movies) {
    return (
      <React.Fragment>
        <div className="home-container-image-carousel">
          <ImageCarousel
            movies={movies.nowPlaying}
            genres={this.props.genres}
          />
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
    console.log(this.props, "Home component");
    return (
      <div className="home-container">{this.renderHome(this.props.movies)}</div>
    );
  }
}

//filter the data from the redux store to the Home component's props for passing onto the Carousel component as props
const mapStateToProps = state => {
  return {
    movies: {
      trending: state.trendingData.results,
      upcoming: state.upcomingData.results,
      topRated: state.topRatedData.results,
      nowPlaying: state.nowPlayingData.results,
      popular: state.popularData.results,
    },
    shows: {},

    genres: state.genresData.genres,
  };
};

//connect function from react-redux to access redux store and dispatch actions
export default connect(mapStateToProps, {
  fetchTrending,
  fetchUpcoming,
  fetchTopRated,
  fetchNowPlaying,
  fetchPopular,
  fetchGenres,
})(Home);
