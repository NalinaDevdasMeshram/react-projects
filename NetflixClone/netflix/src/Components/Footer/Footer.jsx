import React from "react";
import "./Footer.css";
import Twitter_icons from "../../assets/twitter_icon.png";
import Facebook_icons from "../../assets/facebook_icon.png";
import instagram_icons from "../../assets/instagram_icon.png";
import youtube_icons from "../../assets/youtube_icon.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_icons">
        <img src={Twitter_icons} alt="" />
        <img src={Facebook_icons} alt="" />
        <img src={instagram_icons} alt="" />
        <img src={youtube_icons} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Term for Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookies Preferences</li>
        <li>Corporate Information</li>
        <li>Cantact Us</li>
      </ul>
      <div className="copy-writetext">© 1997-2025 Netflix, Inc</div>
    </div>
  );
};

export default Footer;
