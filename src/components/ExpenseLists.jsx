import React, { useContext } from "react";
import AllExpenses from "./AllExpenses";

import { AppContext } from "../context/AppContext";

function ExpenseLists() {
  const { expenses } = useContext(AppContext);

  return (
    <div className="w-full px-10 sm:max-w-[1300px] mx-auto">
      <h1 className="text-2xl font-bold my-6">Expenses</h1>
      <div className="">
        {" "}
        <input
          type="text"
          className="border-2 border-slate-600 p-3 w-[80%] rounded"
          placeholder="Search Expense"
        />
      </div>
      {expenses.map((exp) => (
        <AllExpenses expense={exp} key={exp.id} />
      ))}
    </div>
  );
}

export default ExpenseLists;
