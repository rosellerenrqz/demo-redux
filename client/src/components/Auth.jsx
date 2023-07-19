import React from "react";
import { authActions } from "../store/auth";
import { useDispatch } from "react-redux";

const Auth = () => {
  const dispatch = useDispatch();

  const submitCredentialsHandler = (e) => {
    e.preventDefault();

    dispatch(authActions.login());
  };
  return (
    <>
      <main className="text-center p-4 my-20 mx-auto max-w-2xl rounded-lg bg-white shadow-md">
        <form onSubmit={submitCredentialsHandler}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block uppercase mb-2 text-gray-500">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="border border-gray-200 rounded-md p-1 w-80 mx-auto"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block uppercase mb-2 text-gray-500">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-200 rounded-md p-1 w-80 mx-auto"
            />
          </div>
          <button className="bg-blue-500 px-6 py-2 rounded-md text-white cursor-pointer hover:bg-blue-400 active:bg-blue-300">
            Login
          </button>
        </form>
      </main>
    </>
  );
};

export default Auth;
