import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Link } from "react-router-dom";

import "./imageCarousel.scss";
import renderMovieGenres from "../renderMovieGenres"; //reusable function

class ImageCarousel extends React.Component {
  //renders imagecarousel with movies values
  renderMovies() {
    //loops through movies foreach movie returns jsx
    return this.props.movies.map((movie) => {
      return (
        <div key={movie.id} className="img-slide">
          <Link to={`/details/movie/${movie.id}`}>
            <div
              className="img-slide-image"
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://image.tmdb.org/t/p/original/${movie.backdrop_path}) center/cover no-repeat border-box, rgb(255, 255, 255)`,
              }}
            >
              <div className="img-slide-details">
                <p className="img-slide__category">{this.props.title}</p>
                <h2 className="img-slide__title"> {movie.title}</h2>
                <p className="img-slide__genre">
                  {renderMovieGenres(movie.genre_ids, this.props.genres)}
                </p>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  }

  //renders imagecarousel with shows values
  renderShows() {
    //loops through movies foreach show returns jsx
    return this.props.shows.map((show) => {
      return (
        <div key={show.id} className="img-slide">
          <Link to={`/details/show/${show.id}`}>
            <div
              className="img-slide-image"
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://image.tmdb.org/t/p/original/${show.backdrop_path}) center/cover no-repeat border-box, rgb(255, 255, 255)`,
              }}
            >
              <div className="img-slide-details">
                <p className="img-slide__category">{this.props.title}</p>
                <h2 className="img-slide__title"> {show.name}</h2>
                <p className="img-slide__genre">
                  {renderMovieGenres(show.genre_ids, this.props.genres)}
                </p>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  }

  render() {
    //settings for carousel
    const settings = {
      autoPlay: 5000,
      slidesPerPage: 1,
      slidesPerScroll: 1,
      infinite: true,
      animationSpeed: 500,
      arrows: false,
    };

    //conditional that determines which one is truthy to show the jsx
    if (this.props.movies) {
      return <Carousel {...settings}>{this.renderMovies()}</Carousel>;
    } else if (this.props.shows) {
      return <Carousel {...settings}>{this.renderShows()}</Carousel>;
    }
    return null;
  }
}

export default ImageCarousel;
