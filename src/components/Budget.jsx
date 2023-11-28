import React, { useContext } from "react";

import { AppContext } from "../context/AppContext";

function Budget() {
  const { budget } = useContext(AppContext);
  return (
    <div className="bg-[#5D6D7E] text-white text-center w-full md:w-[30%] p-6 rounded-lg shadow-sm mt-4">
      <p>Budget : ${budget}</p>
    </div>
  );
}

export default Budget;
