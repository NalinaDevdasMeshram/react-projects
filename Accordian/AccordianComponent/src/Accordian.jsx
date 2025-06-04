import React, { useState } from "react";
import "./App.css";
const Accordian = ({ data }) => {
  const [select, setSelect] = useState(null);
  const [enableMultiple, setEnableMultiple] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleClick = (getCurrentid) => {
    console.log(getCurrentid);
    setSelect(getCurrentid);
  };
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiple(!enableMultiple)}>
        Enable multiple selection
      </button>
      <div className="Accordian">
        {data && data.length > 0 ? (
          data.map((dataitem) => {
            return (
              <>
                <div className="container" key={dataitem}>
                  <div
                    onClick={() => handleClick(dataitem.id)}
                    className="title"
                  >
                    {dataitem.question}
                    <span>+</span>
                  </div>
                  {select === dataitem.id ? (
                    <div> {dataitem.answer} </div>
                  ) : null}
                </div>
              </>
            );
          })
        ) : (
          <div>Data not Found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
