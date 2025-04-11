import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleIChange = (e) => {
    setInputValue(e.target.value);
  };

  const dmode = { backgroundColor: "#293551", color: " white", borderColor: "white" };
  const wmode = { backgroundColor: "#f0f0f0", color: " black", borderColor: "black" };
  const bdmode = {
    backgroundColor: "#1a1a2e",
    color: " white",
    borderColor: "white",
  };
  const bwmode = { backgroundColor: "white", color: " black", borderColor: "black" };

  return (
    <div style={props.mode === "on" ? bdmode : bwmode}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
        <Link
                  className="nav-link"
                  aria-current="page"
                  to="/"
                  onClick={() => props.onCatChange("General")}
                >
                  <p className="marg vv" style={props.mode === "on" ? bdmode : bwmode}>
                  <strong>NEWS-HUB</strong>
                  </p>
                </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => props.setSwitchPos1()}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
              <li className="nav-item">

              <Link
                  className="nav-link"
                  aria-current="page"
                  to="/history"
                >
                  <p className="marg" style={props.mode === "on" ? bdmode : bwmode}>
                    History
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  <p className="marg" style={props.mode === "on" ? bdmode : bwmode}>
                    About
                  </p>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="marg" style={props.mode === "on" ? bdmode : bwmode}>
                    Country
                  </span>{" "}
                </Link>
                <ul
                  style={props.mode === "on" ? bdmode : bwmode}
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link
                      className="dropdown-item pad"
                      to={`${props.currentRoute}`}
                      onClick={() => props.onVariableChange("us")}
                    >
                      <p className="marg" style={props.mode === "on" ? bdmode : bwmode}>
                        United States
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item pad"
                      to={`${props.currentRoute}`}
                      onClick={() => props.onVariableChange("in")}
                    >
                      <p className="marg" style={props.mode === "on" ? bdmode : bwmode}>
                        India
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item pad"
                      to={`${props.currentRoute}`}
                      onClick={() => props.onVariableChange("cn")}
                    >
                      <p className="marg" style={props.mode === "on" ? bdmode : bwmode}>
                        China
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item pad"
                      to={`${props.currentRoute}`}
                      onClick={() => props.onVariableChange("jp")}
                    >
                      <p className="marg" style={props.mode === "on" ? bdmode : bwmode}>
                        Japan
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item pad"
                      to={`${props.currentRoute}`}
                      onClick={() => props.onVariableChange("ru")}
                    >
                      <p className="marg" style={props.mode === "on" ? bdmode : bwmode}>
                        Russia
                      </p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="marg" style={props.mode === "on" ? bdmode : bwmode}>
                Category
              </span>
            </Link>
            <ul
              style={props.mode === "on" ? bdmode : bwmode}
              className="dropdown-menu"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <Link
                  className="dropdown-item pad"
                  to="/business"
                  onClick={() => props.onCatChange("business")}
                >
                  <p className="marg" style={props.mode === "on" ? bdmode : bwmode}>
                    Business
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item pad"
                  to="/technology"
                  onClick={() => props.onCatChange("technology")}
                >
                  <p className="marg" style={props.mode === "on" ? bdmode : bwmode}>
                    Technology
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item pad"
                  to="/entertainment"
                  onClick={() => props.onCatChange("entertainment")}
                >
                  <p className="marg" style={props.mode === "on" ? bdmode : bwmode}>
                    Entertainment
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item pad"
                  to="/general"
                  onClick={() => props.onCatChange("general")}
                >
                  <p className="marg" style={props.mode === "on" ? bdmode : bwmode}>
                    General
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item pad"
                  to="/health"
                  onClick={() => props.onCatChange("health")}
                >
                  <p className="marg" style={props.mode === "on" ? bdmode : bwmode}>
                    Health
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item pad"
                  to="/science"
                  onClick={() => props.onCatChange("science")}
                >
                  <p className="marg" style={props.mode === "on" ? bdmode : bwmode}>
                    Science
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item pad"
                  to="/sports"
                  onClick={() => props.onCatChange("Sports")}
                >
                  <p className="marg" style={props.mode === "on" ? bdmode : bwmode}>
                    Sports
                  </p>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input
            style={props.mode === "on" ? dmode : wmode}
            className="form-control me-2"
            type="search"
            aria-label="Search"
            value={inputValue}
            onChange={handleIChange}
          />
          <Link to="/search">
            <button
              style={props.mode === "on" ? dmode : wmode}
              className="btn btn-outline-success"
              type="submit"
              onClick={() => props.onInputChange(inputValue)}
            >
              Search
            </button>
          </Link>
        </form>
      </div>
    </div>
    </nav>
  </div>
  );
};

export default NavBar;