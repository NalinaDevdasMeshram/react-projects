import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icons from "../../assets/caret_icon.svg";

import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar_left">
        <img src={logo} alt="refresh" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>old & popular</li>
          <li>Movies</li>
          <li>My List</li>
          <li>Browse By Language</li>
        </ul>
      </div>
      <div className="Navbar_right">
        <img src={search_icon} alt="" className="icons" />
        <p>Children</p>
        <img src={bell_icon} alt="" className="icons" />
        <div className="Navbar_profile">
          <img src={profile_img} alt="" className="profile" />
          <img src={caret_icons} alt="" />
          <div className="dropdown">
            <p>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
