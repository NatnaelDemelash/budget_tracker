import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

function AllExpenses({ expense }) {
  const { dispatch } = useContext(AppContext);

  const handleDelete = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: expense.id,
    });
  };

  return (
    <div className="flex items-center justify-between text-justify gap-6 mt-8 w-[80%] ">
      <p className="text-justify">{expense.name}</p>
      <div className="flex items-center gap-4">
        <p className="bg-[#FAD7A0] p-2 rounded-full w-20 text-center">
          ${expense.cost}
        </p>
        <TiDelete
          onClick={handleDelete}
          size={24}
          color="#EC7063"
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default AllExpenses;
