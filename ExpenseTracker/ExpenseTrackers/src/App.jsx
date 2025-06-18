import "./App.css";
import AddIncome from "./Components/AddIncome";
import AddTransaction from "./Components/AddTransaction";
import Balance from "./Components/Balance";
import Headers from "./Components/Header";
import TransactionList from "./Components/TransactionList";
function App() {
  return (
    <>
      <Headers />
      <Balance />
      <AddIncome />
      <TransactionList />
      <AddTransaction />
    </>
  );
}

export default App;
