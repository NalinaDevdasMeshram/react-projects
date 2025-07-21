import React from "react";
import "./titleCards.css";
import Cards_data from "../../assets/cards/Cards_data";
const TitleCards = () => {
  return (
    <div className="Title-Cards">
      <h2>Popular on Netflix</h2>
      <div className="card_List">
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
