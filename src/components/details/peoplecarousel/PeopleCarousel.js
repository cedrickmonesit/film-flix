import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "../../carousel/carousel.scss";

class PeopleCarousel extends React.Component {
  mapMovies() {
    if (this.props.credits) {
      //loops through movies foreach movie returns jsx
      return this.props.credits.map((person) => {
        if (person.profile_path) {
          return (
            <div key={person.id} className="slide">
              <Link to={`/details/actor/${person.id}`}>
                <img
                  className="slide-image"
                  src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                  alt={person.name}
                />
                <div className="slide-title">
                  <p>{person.name}</p>
                </div>
              </Link>
            </div>
          );
        }
        return null;
      });
    }
    return null;
  }

  render() {
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

    return (
      <Carousel
        {...settings}
        arrowLeft={<FaChevronLeft className="carousel-arrow-left" />}
        arrowRight={<FaChevronRight className="carousel-arrow-right" />}
        addArrowClickHandler
      >
        {this.mapMovies()}
      </Carousel>
    );
  }
}

export default PeopleCarousel;
