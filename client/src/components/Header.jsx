import React from "react";
import { authActions } from "../store/auth";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className="w-full h-20 flex justify-between items-center py-0 px-10 bg-white">
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul className="flex list-none m-0 p-0 items-center text-lg">
            <li className="my-0 mx-4">
              <a href="/">My Products</a>
            </li>
            <li className="my-0 mx-4">
              <a href="/">My Sales</a>
            </li>
            <li className="my-0 mx-4">
              <button
                onClick={logoutHandler}
                className="text-lg font-medium text-white py-2 px-4 rounded-lg shadow-md  bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600">
                Logout
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
