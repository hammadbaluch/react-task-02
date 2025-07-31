// Features.jsx
import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section className="features">
      <div className="feature-box">
        <div className="icon-wrapper green">
          <i className="fa-regular fa-credit-card"></i>
        </div>
        <p>Improved collection <br /> performance</p>
      </div>

      <div className="feature-box">
        <div className="icon-wrapper yellow">
          <i className="fa-solid fa-wallet"></i>
        </div>
        <p>Convenient, local payment <br /> options</p>
      </div>

      <div className="feature-box">
        <div className="icon-wrapper yellow-overlap">
          <i className="fa-solid fa-coins"></i>
        </div>
        <p>The best price <br /> guarantee</p>
      </div>
    </section>
  );
};

export default Features;
