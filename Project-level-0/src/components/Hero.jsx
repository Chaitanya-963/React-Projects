import React from "react";
import "../App.css";
import heroimg from "../images/hero-img.png";
import linkedin from "../images/linkedin.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";

const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>Smart Watch</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
          eius repellendus velit consequuntur debitis vel quibusdam ullam
         
        </p>
        <div className="hero-btn">
          <button>Add to Cart</button>
          <button className="price">$199</button>
        </div>

        <div className="social-media">
            <img src={linkedin} alt="heroimg" />
            <img src={facebook} alt="heroimg" />
            <img src={instagram} alt="heroimg" />
            <img src={twitter} alt="heroimg" />
        </div>
      </div>
      <div className="hero-img">
        <img src={heroimg} alt="" />
      </div>
    </main>
  );
};

export default Hero;
