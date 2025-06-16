import { useState } from "react";
import modal from "./Modal";
import "./App.css";

function App() {
  const [showButton, setShowButton] = useState(false);

  const handleToggleModalPopup = () => {
    setShowButton(!showButton);
  };
  const handleonClose = () => {
    setShowButton(false);
  };
  return (
    <div>
      <button onClick={handleToggleModalPopup}>open model popup</button>
      {showButton && (
        <modal
          id={"custome-id"}
          header={<h1>Customized header</h1>}
          footer={<h1>Customized footer</h1>}
          onClose={handleonClose}
          body={<div>Customized body</div>}
        />
      )}
    </div>
  );
}

export default App;
