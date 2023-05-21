import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import {
  faCss3,
  faEnvira,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>About me</h1>
        <p>
          A reliable hard-working individual seeking to continue my education
          while working in an environment that allows me to gain new skills and
          knowledge. My goal is to have a career in the tech world since I
          believe that technology is the future of the planet and I wish to be a
          part of the growing field.
        </p>
        <h4>
          Technical Skills: JavaScript, HTML, CSS, MERN, Modern React, Scrum,
          Node.js, MongoDB
        </h4>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faEnvira} color="green" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
