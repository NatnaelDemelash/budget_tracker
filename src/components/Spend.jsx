import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Spend() {
  const { expenses } = useContext(AppContext);

  const totalExpense = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  return (
    <div className="bg-[#F0B27A] text-white p-6 text-center w-full md:w-[30%] rounded-lg shadow-sm mt-4">
      <p>Spent so far : ${totalExpense}</p>
    </div>
  );
}

export default Spend;
