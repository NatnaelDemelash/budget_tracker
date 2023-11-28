import React from "react";

function AddExpense() {
  return (
    <div className="md:max-w-[1300px] mx-auto">
      <h1 className="px-8 text-2xl font-bold mt-8">Add Expense</h1>
      <div className="flex flex-col p-6 ml-2 md:flex-row gap-6 items-center ">
        <div className="w-full sm:w-[30%]">
          <p>Name</p>
          <input
            type="text"
            placeholder="name"
            className="border-2 border-slate-600 p-3 w-full "
          />
        </div>

        <div className="w-full sm:w-[30%]">
          <p>Cost</p>
          <input
            type="text"
            placeholder="amount you spent"
            className="border-2 border-slate-600 p-3 w-full"
          />
        </div>

        <button className="bg-[#A569BD] text-white px-6 py-4 text-center rounded-full w-[14rem] mt-6">
          Add Expense
        </button>
      </div>
    </div>
  );
}

export default AddExpense;
