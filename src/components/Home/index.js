import LogoTitle from "../../assets/images/logo-a.png";
import { Link } from "react-router-dom";
import "./index.scss";
import { useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["n", "m", "o", "l"];
  const wArray = [
    "f",
    "u",
    "l",
    "l",
    "s",
    "t",
    "a",
    "c",
    "k",
    "",
    "w",
    "e",
    "b",
    "",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi,
          <br />
          I'm
          <img src={LogoTitle} alt="dev" />
          <AnimatedLetters />
          <br />
          web developer
        </h1>
        <h2>Fullstack Web Developer.</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Home;
