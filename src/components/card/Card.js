import React from "react";
import { connect } from "react-redux";
import { postFavorite } from "../../actions";
import { FaStar } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

import history from "../../history";
import "./card.scss";

//you must say if the shows props is true so if you are passing an array of shows shows={true}
class Card extends React.Component {
  isDeletable = (isDeletable) => {
    if (isDeletable) {
      return (
        <React.Fragment>
          <div className="card-delete-btn-cover"></div>
          <TiDelete className="card-delete-btn" />
        </React.Fragment>
      );
    }
  };

  //handle target element for event bubbling
  handleCardClickEvent = (event, id, type) => {
    console.log(id);
    if (event.target.classList.contains("card-delete-btn-cover")) {
      if (type === "tv" || this.props.type === "shows") {
        this.props.postFavorite(id, "tv", false);
        document.getElementById(id).style.display = "none";
      } else {
        this.props.postFavorite(id, "movie", false);
        document.getElementById(id).style.display = "none";
      }
    } else if (type === "tv" || this.props.type === "shows") {
      history.push(`/details/show/${id}`);
    } else {
      history.push(`/details/movie/${id}`);
    }
  };

  renderCard = (items) => {
    //if movies or shows from api hasn't been loaded will render nothing, prevents error
    if (items) {
      //loop through movies or shows foreach movie return jsx
      return items.map((item) => {
        if (this.props.type === "shows" || item.media_type === "tv") {
          if (item.poster_path) {
            return (
              <div
                key={item.id}
                id={item.id}
                className="movie-card"
                onClickCapture={(e) => {
                  this.handleCardClickEvent(e, item.id, item.media_type);
                }}
              >
                <div className="movie-card-image-container">
                  <img className="movie-card-image" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
                  <div className="movie-card-rating ">
                    <FaStar className="movie-card-star-rating" />
                    <p>{Math.round(parseFloat(item.vote_average) * 10) / 10}</p>
                  </div>
                  {this.isDeletable(this.props.isDeletable)}
                </div>
                <p className="movie-card-title">{item.name}</p>
              </div>
            );
          }
        }
        if (item.poster_path) {
          return (
            <div
              key={item.id}
              id={item.id}
              className="movie-card"
              onClickCapture={(e) => {
                this.handleCardClickEvent(e, item.id);
              }}
            >
              <div className="movie-card-image-container">
                <img className="movie-card-image" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
                <div className="movie-card-rating ">
                  <FaStar className="movie-card-star-rating" />
                  <p>{Math.round(parseFloat(item.vote_average) * 10) / 10}</p>
                </div>
                {this.isDeletable(this.props.isDeletable)}
              </div>
              <p className="movie-card-title">{item.title}</p>
            </div>
          );
        }
        return null;
      });
    }
    return null;
  };
  render() {
    return this.renderCard(this.props.items);
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.postFavoriteStatus.status_message,
  };
};

export default connect(mapStateToProps, {
  postFavorite,
})(Card);
