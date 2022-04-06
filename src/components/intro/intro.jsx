import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();


  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Motivated", "Designer", "Student"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
        <img src="./assets/Irvin.jpg" />
</div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello! My Name Is</h2>
          <h1>Irvin Ruiz</h1>
          <h3>
            Full Stack Developer Student At DU <span ref={textRef}></span>
          </h3>
        </div>
       
      </div>
    </div>
  );
}
