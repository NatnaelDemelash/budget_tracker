import React, { useContext, useState } from "react";

import { FaRegEdit } from "react-icons/fa";

import { AppContext } from "../context/AppContext";

function Budget() {
  const { budget } = useContext(AppContext);

  return (
    <div className="bg-[#5D6D7E] text-white flex justify-between items-center px-32 text-center w-full md:w-[30%] p-6 rounded-lg shadow-sm mt-4">
      <p>Budget: ${budget}</p>
      <FaRegEdit size={20} cursor="pointer" />
    </div>
  );
}

export default Budget;
