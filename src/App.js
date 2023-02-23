import "./App.css";
import { AddTransactions } from "./components/AddTransactions";
import { DisplayTransactions } from "./components/DisplayTransactions";
import Header from "./components/Header";
import { Input } from "./components/Input";
import { TotalBalance } from "./components/TotalBalance";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <hr />
      <AddTransactions />
      <br />
      <Input />
      <DisplayTransactions input={Input} />
      <TotalBalance />
    </div>
  );
}
export default App;
