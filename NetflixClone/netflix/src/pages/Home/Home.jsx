import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import Navbar from "../../Components/Navbar/Navbar";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import "./Home.css";
import TitleCards from "../../Components/titleCards/titleCards";
const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="hero_banner" />
        <div className="hero_caption">
          <img src={hero_title} alt="" className="caption_img" />
          <p>
            Discovering his secret ties to an ancient order, a young man living
            in the modern world is thrust into a destiny he never imagined.
          </p>
          <div className="hero_btn">
            <button className="btn">
              <img src={play_icon} alt="" />
              play
            </button>
            <button className="btn dark_info">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
        </div>
      </div>

      <TitleCards />
    </div>
  );
};

export default Home;
