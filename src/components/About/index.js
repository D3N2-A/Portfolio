import "./index.scss";
import AnimatedLettters from "../AnimatedLetters";
import { useEffect, useState } from "react";
const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLettters
            letterClass={letterClass}
            strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
            idx={15}
          />
        </h1>
        <p>
          I'm ambitious front-end developer with some knowledge of backend. I'm
          looking for oppurtunity to work on full stack projects with new
          technology.
        </p>
        <p>
          I'm quietly confident, naturally curious, and perpertually working on
          improving my chops one design problem at a time.
        </p>
      </div>
    </div>
  );
};
export default About;
