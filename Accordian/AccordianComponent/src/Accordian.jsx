import React, { useState } from "react";
import "./App.css";
const Accordian = ({ data }) => {
  const [select, setSelect] = useState(null);
  const [enableMultiple, setEnableMultiple] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentid) => {
    setSelect(getCurrentid === select ? null : getCurrentid);
  };
  const handleMultiSelection = (getCurrentid) => {
    let cpyMultiple = [...multiple];
    const IndexOfCurrentId = cpyMultiple.indexOf(getCurrentid);
    console.log(IndexOfCurrentId);
    if (IndexOfCurrentId === -1) cpyMultiple.push(getCurrentid);
    else cpyMultiple.splice(IndexOfCurrentId, 1);
    setMultiple(multiple);
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
                    onClick={
                      enableMultiple
                        ? () => handleMultiSelection(dataitem.id)
                        : () => handleSingleSelection(dataitem.id)
                    }
                    className="title"
                  >
                    {dataitem.question}
                    <span>+</span>
                  </div>
                  {enableMultiple
                    ? multiple.indexOf(dataitem.id) !== -1 && (
                        <div>{dataitem.answer}</div>
                      )
                    : select === dataitem.id && <div>{dataitem.answer}</div>}
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
