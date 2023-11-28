import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Remaining() {
  const { expenses, budget } = useContext(AppContext);

  const totalExpense = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const RemainingAlert = totalExpense > budget ? "bg-warning" : "bg-normal";

  return (
    <div
      className={`${RemainingAlert} text-white p-6 text-center w-full md:w-[30%] rounded-lg shadow-sm mt-4`}
    >
      <p>Remaining : ${budget - totalExpense}</p>
    </div>
  );
}

export default Remaining;
