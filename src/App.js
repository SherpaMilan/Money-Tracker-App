import { useState } from "react";
import "./App.css";
import { AddTransactions } from "./components/AddTransactions";
import { DisplayTransactions } from "./components/DisplayTransactions";
import Header from "./components/Header";

import { Input } from "./components/Input";

function App() {
  const [list, setList] = useState([]);

  const addTransaction = (data) => {
    console.log(data);
    setList([...list, data]);
  };

  const handleOnDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const tempArg = list.filter((item, i) => i !== id);
      setList(tempArg);
    }
  };

  return (
    <>
      <Header />
      <hr />
      <AddTransactions />
      <div className="wrapper ">
        <br />
        <Input addTransaction={addTransaction} />
        <DisplayTransactions list={list} handleOnDelete={handleOnDelete} />
      </div>
    </>
  );
}
export default App;
