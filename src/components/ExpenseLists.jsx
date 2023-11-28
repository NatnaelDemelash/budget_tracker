import React from "react";
import AllExpenses from "./AllExpenses";

const expenses = [
  { id: 1, name: "Shpping", cost: 30 },
  { id: 2, name: "Holiday", cost: 400 },
  { id: 3, name: "Transportaion", cost: 2300 },
  { id: 4, name: "Fuel", cost: 800 },
];

function ExpenseLists() {
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
