import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({ firstname: "", lastname: "" });
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(`${formData.firstname} ${formData.lastname}`);
  };
  const handleClick = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Display Full Name</h3>
        <label htmlFor="firstname">First Name:</label>
        <input
          type="text"
          placeholder="Enter first name"
          id="firstname"
          name="firstname"
          value={formData.firstname}
          onChange={handleClick}
          required
        />
        <label htmlFor="lastname">Last Name:</label>
        <input
          type="text"
          placeholder="Enter last name"
          id="lastname"
          name="lastname"
          value={formData.lastname}
          onChange={handleClick}
          required
        />
        <button>Submit</button>
        {fullName && <p>FullName : {fullName}</p>}
      </form>
    </div>
  );
}

export default App;
