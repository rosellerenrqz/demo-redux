import React from "react";

const Header = () => {
  return (
    <header className="w-full h-20 flex justify-between items-center py-0 px-10 bg-white">
      <h1>Redux Auth</h1>
      <nav>
        <ul className="flex list-none m-0 p-0 items-center text-lg">
          <li className="my-0 mx-4">
            <a href="/">My Products</a>
          </li>
          <li className="my-0 mx-4">
            <a href="/">My Sales</a>
          </li>
          <li className="my-0 mx-4">
            <button className="text-lg font-medium text-white py-2 px-4 rounded-lg shadow-md  bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
