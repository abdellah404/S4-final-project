import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        id="navbar_container"
      >
        <div className="container">
          <Link to="/">
            <img
              src="https://www.avito.ma/phoenix-assets/imgs/layout/new-logo.svg"
              alt="Bootstrap"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/app">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <Link className="nav-link me-3" to="/app/login">
                  Se connecter
                </Link>
              </li>
              <li className="nav-item  ">
                <Link to="/app/search">
                  <div className="btn btn-danger">
                    <i class="bi bi-plus-circle me-2"></i>
                    Publier une annonce
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
