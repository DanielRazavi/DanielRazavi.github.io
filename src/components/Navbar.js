import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const navbarClassName = `${style.navbar} ${isHovered ? style.hovered : ""}`;

  return (
    <div
      className={navbarClassName}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}>
      <Link to="./">Home</Link>
      <Link to="./photos">Photos</Link>
      <Link to="./tutorials">Tutorials</Link>
      <Link to="./projects">Projects</Link>
      <a href="https://www.youtube.com/channel/UC_Qf_qMb1DbiT4pknZNTn0A?view_as=subscriber">
        YouTube
      </a>
    </div>
  );
}

export default Navbar;
