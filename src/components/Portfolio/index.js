import React from "react";
import { useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import portfolioData from "../../data/portfolio.json";
const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  console.log(portfolioData);
  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Portfolio".split("")}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio}</div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
