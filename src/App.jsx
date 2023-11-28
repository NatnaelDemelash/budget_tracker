import React from "react";
import NavBar from "./components/NavBar";
import Budget from "./components/Budget";
import Remaining from "./components/Remainings";
import ExpenseLists from "./components/ExpenseLists";
import Spend from "./components/Spend";
import AddExpense from "./components/AddExpense";

function App() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col px-8 md:flex-row md:justify-evenly items-center">
        <Budget />
        <Remaining />
        <Spend />
      </div>
      <ExpenseLists />
      <AddExpense />
    </>
  );
}

export default App;
