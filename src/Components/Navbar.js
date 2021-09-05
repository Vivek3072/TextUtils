import React from "react";
import PropTypes from "prop-types";
import myLogo from "../myLogo.png";
import darkLogo from "../darkLogo.png";
import { Link } from "react-router-dom";

export default function Navbar(props) {

  const handleColour1=()=>{
    document.body.style.backgroundColor="lightseagreen ";
  } 
  const handleColour2=()=>{
    document.body.style.backgroundColor="silver";
  }
  const handleColour3=()=>{
    document.body.style.backgroundColor="lightcoral";
  }


  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img
              className="mx-2"
              style={{
                width: "38px",
                display: props.mode === "dark" ? "" : "none",
              }}
              src={myLogo}
              alt="appLogo"
            />
            <img
              className="mx-2"
              style={{
                width: "38px",
                display: props.mode === "light" ? "" : "none",
              }}
              src={darkLogo}
              alt="appLogo"
            />
            Text-Utils
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>



            <div className="d-flex">
            <label className={`text-${props.mode === "light" ? "dark" : "light"}`} >Background Colors : </label>
              <button className="bg-info rounded-pill mx-2" onClick={handleColour1}  style={{height:"20px", width:"20px"}}></button>
              <button className="bg-secondary rounded-pill mx-2" onClick={handleColour2}   style={{height:"20px", width:"20px"}}></button> 
              <button className="bg-danger rounded-pill mx-2" onClick={handleColour3}   style={{height:"20px", width:"20px"}}></button>
            </div>

  

            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input "
                onClick={props.handleMode}
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  //   title: PropTypes.string.isRequired,  (Remove  default props for cheching isRequired)
  about: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Your Title Here",
  about: "About Your page",
};
