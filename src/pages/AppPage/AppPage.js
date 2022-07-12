import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./AppPage.scoped.scss";

export default class AppPage extends Component {
  discover(e) {
    console.log(e.target);
    e.target.classList.add("discover--hide");
    const img = document.getElementById("img");
    img.classList.toggle("img--active");
  }
  render() {
    return (
      <main>
        <nav id="nav" className="nav">
          <ul className="nav__links">
            <li className="nav__links__link">
              <Link className="nav__links__link--no-border-top" to={"/"}>
                Account
              </Link>
            </li>
            <li className="nav__links__link">
              <Link to={"/"}>All</Link>
            </li>
            <li className="nav__links__link">
              <Link to={"/"}>Concerts</Link>
            </li>
            <li className="nav__links__link">
              {/* <Link to={"/another"}>Another</Link> */}
              <a className="nav__links__link--no-border-bottom" href="/another">
                Festival
              </a>
            </li>
          </ul>
        </nav>
      </main>
    );
  }
}
