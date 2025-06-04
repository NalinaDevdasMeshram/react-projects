import react from "react";

import Accordian from "./Accordian";

function App() {
  const data = [
    {
      id: "1",
      question: "what is javascript",
      answer:
        "javascript is a programming language which help us to create the dynamic application",
    },
    {
      id: "2",
      question: "what is reactjs",
      answer:
        "react is open source javascript library which help us to create optimized the function",
    },
    {
      id: "3",
      question: "what is state",
      answer:
        "state is a variable which hold the value and state is a local variable and state are mutable",
    },
    {
      id: "4",
      question: "what is prop",
      answer:
        "prop are immutuable and they are controlled by the parent and props cannot be modified in the recieve",
    },
    {
      id: "5",
      question: "what is closure",
      answer:
        "closure is function function along with its lexical scope bandle together form the closure",
    },
  ];

  return (
    <div>
      <h2>Accordian Display Data..</h2>
      <Accordian data={data} />
    </div>
  );
}

export default App;
