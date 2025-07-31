// Hero.jsx
import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero ">
      <div className="hero-left">
        <div className="circle yellow-circle"></div>
        <div className="circle green-circle"></div>
        <h1>
          All banks are <br /> worried about <br /> <span>fintech ind.</span>
        </h1>
        <p>
          We help you get paid any way you want, with the least amount of
          hassle. It’s just one of the reasons we are the most trusted name.
        </p>
        <div className="email-form">
          <input type="email" placeholder="Business email" />
          <button>Get started</button>
        </div>

        <div className="stats">
          <div className="stat-box">
            <div className="icon-circle">
              <i className="fa-solid fa-sack-dollar"></i>
            </div>
            <div className="stat-text">
              <h3>$22k</h3>
              <p>
                Total Earning <span>+20.80%</span>
              </p>
            </div>
          </div>
          <div className="stat-box">
            <div className="icon-circle">
              <i className="fa-solid fa-money-bills"></i>
            </div>
            <div className="stat-text">
              <h3>$10k</h3>
              <p>
                Withdraw <span>+05.80%</span>
              </p>
            </div>
          </div>
          <div className="stat-box">
            <div className="icon-circle">
              <i className="fa-regular fa-square-check"></i>
            </div>
            <div className="stat-text">
              <h3>15</h3>
              <p>
                Total Projects <span>+10.80%</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="background-shape"></div>
        <img src="/girl.png" alt="Smiling woman" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
