import React, { useEffect, useRef } from "react";
import "./titleCards.css";
import Cards_data from "../../assets/cards/Cards_data";
const TitleCards = ({ title, card }) => {
  const inputRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    inputRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    inputRef.current.addEventListener("wheel", handleWheel);
  }, []);
  return (
    <div className="Title-Cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card_List" ref={inputRef}>
        {Cards_data.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={card.image} alt="" />
              <p>{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
