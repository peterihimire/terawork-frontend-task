import React from "react";
import SideNav from "../components/SideNav";
import Search from "../components/Search";
import Title from "../components/Title";
// import Result from "../components/Result";
import "../components/MovieItem.css";
import "../components/Result.css";
import movies from "../movie-items";

import movieImg from "../assets/img.png";
import { Link, useHistory, Route } from "react-router-dom";
import { connect } from "react-redux";

import Modal from "../components/ErrorModal";
import "../components/Modal.css";
import "../components/ErrorModal.css";

import { FaExclamationTriangle } from "react-icons/fa";

const HomePage = (props) => {
  return (
    <>
      <Route
        path={`${props.match.url}/:id`}
        render={() => {
          return (
            <Modal
              onCancel={props.onClear}
              // header="Error"
              header={
                <div className="times-icon-div">
                  <FaExclamationTriangle className="times-icon" />
                </div>
              }
              headerClass="header-color"
              show={!!props.error}
              footer={
                <div className="modal-error">
                  <button className="modal-error-btn" onClick={props.onClear}>
                    Dismiss
                  </button>
                </div>
              }
            >
              <div className="modal-error-content">
                <div className="main-error">
                  <h6>Oh, snap!</h6>
                  <p>{props.error}</p>
                </div>
              </div>
            </Modal>
          );
        }}
      />

      <div id="page-container" className="App">
        <div id="content-wrapper">
          <SideNav />
          <div className="main-content">
            <div className="main-content-container">
              <Title title="Explore" />
              <Search />
              {/* <Result /> */}
              <div className="result">
                <div className="result-head">
                  <p>
                    Results for : <span>Mortal Kombat</span>
                  </p>
                </div>
                <div className="movie-list-grid">
                  {movies.map((movie) => {
                    return (
                      <div className="" key={movie.id}>
                        {/* <MovieItem key={movie.id} movie={movie} /> */}
                        <article className="movie-item">
                          <div className="movie-image-div">
                            <img src={movieImg} alt="movie item" />
                          </div>
                          <div className="movie-btn-div">
                            <Link
                              to={`${props.match.url}/${movie.id}`}
                              className="btn"
                            >
                              View
                            </Link>
                          </div>
                        </article>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  // console.log(state);
  // const { movies } = state;
  return { state };
};
export default connect(mapStateToProps)(HomePage);
