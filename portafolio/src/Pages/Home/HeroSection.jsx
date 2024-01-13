import React from 'react';
import { Link } from 'react-scroll';

export default function HeroSection() {
  const closeMenu = () => {
    // Placeholder function, replace with your logic
    console.log('Menu closed');
  };

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Welcome to Guillermo´s Portfolio</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">iOS and Web</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Degree in Mathematics and Computer Science
            <br />
          </p>
          <Link
            activeClass="navbar--active-content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="MyPortfolio"
            className="btn btn-touch"
            style={{
              backgroundColor: "black",
              color: "#fff",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              textDecoration: "none",
              padding: "10px 20px",
            }}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/home_front.png" alt="Hero Section" />
      </div>
    </section>
  );
}
