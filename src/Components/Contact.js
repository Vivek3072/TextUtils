import React from "react";
import darkLogo from "../darkLogo.png";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <div className="headpart container text-center my-3">
        <h1>
          <img
            src={darkLogo}
            className="mx-3"
            style={{ width: "80px" }}
            alt="appLogo"
          />
          Contact Us
        </h1>
      </div>
      <div className="container mb-4 my-4" style={{ padding: "10px 80px" }}>
        <input
          type="text"
          className="form-control my-3"
          id="exampleFormControlInput1"
          placeholder="Your Name"
          required
          autoComplete="off"
        />
        <input
          type="email"
          className="form-control my-3"
          id="email"
          placeholder="Your E-mail"
          required
          autoComplete="off"
        />
        <input
          type="text"
          className="form-control my-3"
          id="phone"
          placeholder="Phone Number"
          required
          autoComplete="off"
        />

        <div className="mb-3">
          <textarea
            placeholder="Your Message Here"
            className="form-control my-3"
            id="message"
            rows="3"
            required
            autoComplete="off"
          ></textarea>
        </div>
        <Link to="/">
          <button className="btn btn-outline-primary">Submit</button>
        </Link>
      </div>
    </>
  );
}
