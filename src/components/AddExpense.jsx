import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { AppContext } from "../context/AppContext";

function AddExpense() {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const addExpense = (e) => {
    e.preventDefault();

    const newExpense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({ type: "ADD_EXPENSE", payload: newExpense });

    setName("");
    setCost("");
  };

  return (
    <div className="md:max-w-[1300px] mx-auto">
      <h1 className="px-8 text-2xl font-bold mt-8">Add Expense</h1>
      <form
        onSubmit={addExpense}
        className="flex flex-col p-6 ml-2 md:flex-row gap-6 items-center "
      >
        <div className="w-full md:w-[30%]">
          <p>Name</p>
          <input
            type="text"
            placeholder="name"
            required
            className="border-2 border-slate-600 p-3 w-full"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="w-full md:w-[30%]">
          <p>Cost</p>
          <input
            type="number"
            required
            placeholder="amount you spent"
            className="border-2 border-slate-600 p-3 w-full"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-[#A569BD] text-white px-6 py-4 text-center rounded-full w-[14rem] mt-6"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default AddExpense;
