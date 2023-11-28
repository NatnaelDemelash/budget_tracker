import React from "react";
import NavBar from "./components/NavBar";
import Budget from "./components/Budget";
import Remaining from "./components/Remainings";
import ExpenseLists from "./components/ExpenseLists";
import Spend from "./components/Spend";
import AddExpense from "./components/AddExpense";

import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <NavBar />
      <div className="flex flex-col px-8 md:flex-row md:justify-evenly items-center">
        <Budget />
        <Spend />
        <Remaining />
      </div>
      <ExpenseLists />
      <AddExpense />
    </AppProvider>
  );
}

export default App;
