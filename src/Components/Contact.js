import React from "react";
import myLogo from "../myLogo.png";
import darkLogo from "../darkLogo.png";
import { Link } from "react-router-dom";
import "./MyStyle.css";

export default function Contact(props) {
  return (
    <>
      <div className="container text-center my-3">
        <div className="row">
          <div className="contactLeft col-lg-4 text-center">
            <img
              src={darkLogo}
              className="animeLogo img-fluid mx-3 my-4"
              style={{ display: props.mode === "light" ? "" : "none" }}
              alt="appLogo"
            />
            <img
              src={myLogo}
              className="animeLogo img-fluid mx-3 my-4"
              style={{ display: props.mode === "dark" ? "" : "none" }}
              alt="appLogo"
            />
          </div>

          <div className="col-lg-8 contactRight my-3">
            <h1 className={`text-${props.mode === "light" ? "dark" : "white"}`}>
              Contact Us
            </h1>
            <div
              className="container mb-4 my-4"
              style={{ padding: "10px 10px" }}
            >
              <input
                type="text"
                className="form-control my-3"
                id="exampleFormControlInput1"
                placeholder="Your Name *"
                style={{
                  backgroundColor: props.mode === "dark" ? "#36454F" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
                required
                autoComplete="off"
              />
              <input
                type="email"
                className="form-control my-3"
                id="email"
                placeholder="Your E-mail *"
                style={{
                  backgroundColor: props.mode === "dark" ? "#36454F" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
                required
                autoComplete="off"
              />

              <input
                type="text"
                className="form-control my-3"
                id="phone"
                placeholder="Phone Number"
                style={{
                  backgroundColor: props.mode === "dark" ? "#36454F" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
                required
                autoComplete="off"
              />
              {/* 
              <select
                className={ `form-select  bg-${props.mode==="dark"?"dark" : "white"} text-${props.mode==="light"?"dark" : "light" }`}
                aria-label="Default select example"
              >
                <option >Subject *</option>
                <option value="1">Post a review!</option>
                <option value="2">Have a suggestion!</option>
                <option value="3">Report bugs!</option>
              </select> */}

              <div className="mb-3">
                <textarea
                  placeholder="Your Message Here *"
                  style={{
                    backgroundColor:
                      props.mode === "dark" ? "#36454F" : "white",
                    color: props.mode === "dark" ? "white" : "black",
                  }}
                  className="form-control my-3"
                  id="message"
                  rows="4"
                  required
                  autoComplete="off"
                />
              </div>
              <Link to="/">
                <button className="btn btn-primary">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
