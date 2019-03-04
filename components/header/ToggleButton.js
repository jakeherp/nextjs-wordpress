import React from "react";

const toggleButton = () => (
  <div
    className="toggle-button"
    style={{
      width: 50,
      height: 30,
      position: `absolute`,
      top: `2.5rem`,
      right: `1rem`,
      cursor: `pointer`,
      textAlign: `center`
    }}
  >
    <span
      style={{
        top: `100%`,
        right: `0`,
        width: `100%`,
        height: `2px`,
        backgroundColor: `#000`,
        display: `block`,
        position: `relative`
      }}
    />
    <span
      style={{
        top: `50%`,
        right: `0`,
        width: `80%`,
        height: `2px`,
        backgroundColor: `#000`,
        display: `block`,
        position: `relative`
      }}
    />
    <span
      style={{
        top: `0%`,
        right: `0`,
        width: `60%`,
        height: `2px`,
        backgroundColor: `#000`,
        display: `block`,
        position: `relative`
      }}
    />
  </div>
);

export default toggleButton;
