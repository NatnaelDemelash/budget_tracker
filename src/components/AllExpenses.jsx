import React from "react";
import { TiDeleteOutline } from "react-icons/ti";

function AllExpenses({ expense }) {
  return (
    <div className="flex items-center justify-between text-justify gap-6 mt-8 w-[80%] ">
      <p className="text-justify">{expense.name}</p>
      <div className="flex items-center gap-4">
        <p className="bg-[#FAD7A0] p-2 rounded-full w-20 text-center">
          ${expense.cost}
        </p>
        <TiDeleteOutline
          size={24}
          color="#EC7063"
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default AllExpenses;
