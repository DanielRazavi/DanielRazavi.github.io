import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
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
