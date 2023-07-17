import React from "react";

const Counter = () => {
  return (
    <main className="text-center m-20 mx-auto p-6 max-w-2xl bg-white shadow-md rounded-lg">
      <h1 className="uppercase text-gray-600 font-bold text-lg m-0">
        Redux Counter
      </h1>
      <div className="uppercase text-4xl text-blue-700 font-bold my-6 mx-0">
        -- Counter Value --
      </div>
      <button className="px-4 py-2 text-lg rounded-lg cursor-pointer bg-blue-500 text-white  hover:bg-blue-400 active:bg-blue-300">
        Toggle Counter
      </button>
    </main>
  );
};

export default Counter;
