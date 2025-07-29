import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      {/* Decorative Circles */}
      <div className="circle yellow-circle"></div>
      <div className="circle green-circle"></div>

      <div className="hero-content container">
        <h1>
          All banks are <br />
          worried about <br />
          <span className="highlight">fintech ind.</span>
        </h1>
        <p className="hero-subtext">
          We help you get paid any way you want, with the least amount of hassle.
          It’s just one of the reasons we are the most trusted name.
        </p>

        <form className="hero-form">
          <input type="email" placeholder="Business email" required />
          <button type="submit">Get started</button>
        </form>

        <div className="hero-stats">
          <div className="stat">
            <div className="icon">💼</div>
            <div>
              <div className="value">$22k</div>
              <div className="label">Total Earning</div>
              <div className="percentage">+10.80%</div>
            </div>
          </div>
          <div className="stat">
            <div className="icon">🏧</div>
            <div>
              <div className="value">$10k</div>
              <div className="label">Withdraw</div>
              <div className="percentage">+05.80%</div>
            </div>
          </div>
          <div className="stat">
            <div className="icon">📁</div>
            <div>
              <div className="value">15</div>
              <div className="label">Total Projects</div>
              <div className="percentage">+10.80%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-image">
        {/* <img src='/girl.png' alt="Smiling woman wearing Fintech shirt" /> */}
      </div>
    </section>
  );
};

export default Hero;
