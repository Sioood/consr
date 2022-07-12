import React, { Component } from "react";
import { Link } from "react-router-dom";

import img from '../assets/img/img.jpg';

import "../scss/pages/land.scss";

export default class Land extends Component {
  discover(e) {
    console.log(e.target);
    e.target.classList.add("discover--hide")
    const img = document.getElementById("img");
    img.classList.toggle("img--active");
  }
  render() {
    return (
      <main>
        <nav id="nav">
          <ul className="nav__links">
            <li className="nav__links__link">
              <h5 className="nav__links__link--square">
                Cons<i>r</i>
              </h5>
              <Link to={"/"}>Home</Link>
            </li>
            <li className="nav__links__link">
              <Link to={"/"}>App</Link>
            </li>
            <li className="nav__links__link">
              {/* <Link to={"/another"}>Another</Link> */}
              <a href="/another">another</a>
              <h5 className="nav__links__link--square nav__links__link--no-border">
                Cons<i>r</i>
              </h5>
            </li>
          </ul>
        </nav>
        <button id="discover" className="discover" onClick={this.discover}>
          discover
        </button>
        <div className="container">
          <div className="img" id="img">
            <img
              src={img}
              alt="Flume at Field Day Sydney"
            />
          </div>
          <div className="content">
            <h1 className="content__title">
              Cons<i>r</i>
            </h1>
            <h4>L'application qui te permet de te souvenir de tout tes concerts & festivals!</h4>
          </div>
        </div>
      </main>
    );
  }
}
