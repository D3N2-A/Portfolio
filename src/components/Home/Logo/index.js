import { useEffect, useRef } from "react";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import LogoS from "../../../assets/images/logo-a.png";
import "./index.scss";

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();
  const tl = useRef(gsap.timeline());
  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    tl.current
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 7,
      });

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    );
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} src={LogoS} alt="" className="solid-logo" />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 559 897">
        <g className="svg-container">
          <path
            ref={outlineLogoRef}
            d="M246.8 62.1h103.5l206.1 801.8h-106l-41.9-165.2H189.8l-43.6 165.2h-106L246.8 62.1zm52.4 212.6L227.3 550h143.4l-71.5-275.3zM210.1 62.1h103.5l206.1 801.8h-106l-41.9-165.2H153l-43.6 165.2H3.4L210.1 62.1zm52.3 212.6L190.5 550h143.4l-71.5-275.3zm0-7.7 36.8.3"
            fill="none"
            stroke="#ffd700"
            strokeWidth="5"
            strokeMiterimit="10"
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
