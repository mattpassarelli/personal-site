import "./LinksBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function LinksBar() {
  return (
    <div className="links">
      <a href="https://www.github.com/mattpassarelli">
        <FontAwesomeIcon icon={faGithub} className="link" />
      </a>
      <a href="https://www.linkedin.com/in/matthew-passarelli/">
        <FontAwesomeIcon icon={faLinkedin} className="link" />
      </a>
      <a href="https://www.youtube.com/channel/UCZE4xIPZpJBAVwituwfteGw">
        <FontAwesomeIcon icon={faYoutube} className="link" />
      </a>
      <span className="linksLabel">My Links</span>
    </div>
  );
}
