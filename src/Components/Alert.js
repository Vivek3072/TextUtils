import React from "react";

export default function Alert(props) {
  const Capitalize = (word) => {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} fade show role="alert" `}
      >
        <strong>
          {props.alert.type === "success"
            ? Capitalize(props.alert.type) + "! "
            : ""}
        </strong>
        {props.alert.msg}
      </div>
    )
  );
}
