import React from "react";

export default function Footer(props) {
  return (
    <>
      <div className={`text-${props.mode === "light" ? "dark" : "white"}`}>
        <footer
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "100px 0px 0px 0px",
          }}
        >
          All Rights Reserved &copy;
          <a
            href="/"
            style={{ color: props.mode === "dark" ? "orange" : "blueviolet" }}
          >
            Text-Utils.com
          </a>
        </footer>
      </div>
    </>
  );
}
