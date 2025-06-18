import React, { useState } from "react";
const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <h3>Add New Transaction</h3>
      <form>
        <div className="form-control">
          <label className="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="text">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            placeholder="Enter text..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button className="btn">Add Transaction</button>
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
