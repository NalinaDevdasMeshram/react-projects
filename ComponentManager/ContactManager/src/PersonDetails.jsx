import React, { useState } from "react";
const PersonDetails = ({ data }) => {
  const [clearData, setClearData] = useState(data);
  const handleClick = () => {
    setClearData("");
  };
  console.log(handleClick);
  return (
    <div>
      <h2>Person Details</h2>
      {data.map((product) => {
        const { id, name, email, age, state } = product;
        return (
          <div key={id}>
            <div>
              <h4>{name}</h4>
              <h5>{email}</h5>
              <h5>{age}</h5>
              <h6>{state}</h6>
            </div>
            <button onClick={() => setClearData("")}>Clear Data</button>
          </div>
        );
      })}
    </div>
  );
};

export default PersonDetails;
