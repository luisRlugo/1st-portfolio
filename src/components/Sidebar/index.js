import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LL from "../../assets/pics/LL.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faEnvelope,
  faFile,
  faHouse,
  faList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div className="NavBar">
      <Link className="logo" to="/">
        <img src={LL} alt="me" />
      </Link>
      <nav>
        <NavLink exact="true" activeClassName="active" to="/">
          <FontAwesomeIcon icon={faHouse} color="4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeClassName="active"
          className="aboutLink"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeClassName="active"
          className="projectsLink"
          to="/projects"
        >
          <FontAwesomeIcon icon={faList} color="4d4d4e" />
        </NavLink>
        {/* <NavLink
          exact="true"
           activeClassName="active"
          className="contactLink"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />
        </NavLink> */}
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/luis-lugo-056041246/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/luisRlugo"
          >
            <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://docs.google.com/document/d/18HFFtnfcw-1wyLyYa8UoogligIljulI0/edit"
          >
            <FontAwesomeIcon icon={faFile} color="4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
