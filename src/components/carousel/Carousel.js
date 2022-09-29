import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

import "./carousel.scss";

class MovieShowCarousel extends React.Component {
  //render the ratings for this movie
  renderRating(movie) {
    if (movie.vote_average) {
      return (
        <div className="slide-movie-rating">
          <FaStar className="carousel-star-rating" />
          <p>{Math.round(parseFloat(movie.vote_average) * 10) / 10}</p>
        </div>
      );
    }
    return;
  }

  //renders carousel with movies values
  renderMovies() {
    if (this.props.movies) {
      //loops through movies foreach movie returns jsx
      return this.props.movies.map((movie) => {
        return (
          <div key={movie.id} className="slide">
            <Link to={`/details/movie/${movie.id}`}>
              <div className="carousel-image-container">
                <img className="slide-image" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                {this.renderRating(movie)}
              </div>

              <div className="slide-title">
                <p>{movie.title}</p>
              </div>
            </Link>
          </div>
        );
      });
    }
  }

  //renders carousel with shows values
  renderShows() {
    if (this.props.shows) {
      //loops through movies foreach movie returns jsx
      return this.props.shows.map((show) => {
        return (
          <div key={show.id} className="slide">
            <Link to={`/details/show/${show.id}`}>
              <div className="carousel-image-container">
                -
                <img className="slide-image" src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`} alt={show.name} />
                {this.renderRating(show)}
              </div>

              <div className="slide-title">
                <p>{show.name}</p>
              </div>
            </Link>
          </div>
        );
      });
    }
  }

  render() {
    //settings for this carousel
    const settings = {
      slidesPerPage: 6,
      slidesPerScroll: 6,
      infinite: true,
      animationSpeed: 500,
      arrows: true,
      breakpoints: {
        1150: {
          slidesPerPage: 5,
          slidesPerScroll: 5,
        },
        980: {
          slidesPerPage: 4,
          slidesPerScroll: 4,
        },
        850: {
          slidesPerPage: 3,
          slidesPerScroll: 3,
        },
        350: {
          slidesPerPage: 2,
          slidesPerScroll: 2,
        },
        200: {
          slidesPerPage: 1,
          slidesPerScroll: 1,
        },
      },
    };

    //this conditional will check whether movies or show should be shown depending which one is truthy
    if (this.props.movies) {
      return (
        <Carousel
          {...settings}
          arrowLeft={<FaChevronLeft className="carousel-arrow-left" />}
          arrowRight={<FaChevronRight className="carousel-arrow-right" />}
          addArrowClickHandler
          className="wow fadeIn delay-1s"
        >
          {this.renderMovies()}
        </Carousel>
      );
    } else if (this.props.shows) {
      return (
        <Carousel
          {...settings}
          arrowLeft={<FaChevronLeft className="carousel-arrow-left" />}
          arrowRight={<FaChevronRight className="carousel-arrow-right" />}
          addArrowClickHandler
          className="wow fadeIn delay-0.5s"
        >
          {this.renderShows()}
        </Carousel>
      );
    }
    return null;
  }
}

export default MovieShowCarousel;
