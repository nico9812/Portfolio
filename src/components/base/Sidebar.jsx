import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "../../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a href="https://wa.me/+5493855726237" target="_blank" rel="noreferrer">
        <FaWhatsapp className="icon" />
      </a>
      <a href="https://www.instagram.com/nicocalderon_98" target="_blank" rel="noreferrer">
        <FaInstagram className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/NicoCalderonDev" target="_blank" rel="noreferrer">
        <FaLinkedin className="icon" />
      </a>
      {/* <a href="https://github.com/NicoCalderonDev" target="_blank" rel="noreferrer">
        <FaGithub className="icon" />
      </a> */}
    </div>
  );
};

export default Sidebar;
