import "./App.css";
import PersonDetails from "./PersonDetails";

function App() {
  const data = [
    {
      id: 1,
      email: "nalumeshram20@gmail.com",
      name: "nalina",
      state: "maharashtra",
      age: 25,
    },
    {
      id: 2,
      email: "nalumeshram20@gmail.com",
      name: "nal",
      state: "Goa",
      age: 27,
    },
    {
      id: 3,
      email: "nalumeshram20@gmail.com",
      name: "nali",
      state: "panjab",
      age: 20,
    },
    {
      id: 4,
      email: "nalumeshram20@gmail.com",
      name: "naina",
      state: "karantaka",
      age: 23,
    },
  ];
  return (
    <div>
      <h2>Display Person Details</h2>
      <PersonDetails data={data} />
    </div>
  );
}

export default App;
