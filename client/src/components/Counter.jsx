import React from "react";
import { counterActions } from "../store/counter-slice";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increase = () => {
    dispatch(counterActions.increase(5)); // {type: 'Unique_Identifier', payload: 5}
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <React.Fragment>
      {isAuth && (
        <main className="text-center m-20 mx-auto p-6 max-w-2xl bg-white shadow-md rounded-lg">
          <h1 className="uppercase text-gray-600 font-bold text-lg m-0">
            Redux Counter
          </h1>
          <div className="uppercase text-4xl text-blue-700 font-bold my-6 mx-0">
            {showCounter && `${counter}`}
          </div>

          {showCounter && (
            <div className="mb-4">
              <button
                onClick={decrementHandler}
                className="px-4 py-2 text-md text-white rounded-lg  bg-blue-500 hover:bg-blue-400 active:bg-blue-300">
                Decrement
              </button>
              &nbsp; &nbsp;
              <button
                onClick={increase}
                className="px-4 py-2 text-md  text-white rounded-lg bg-blue-500 hover:bg-blue-400 active:bg-blue-300">
                Increase by 5
              </button>
              &nbsp; &nbsp;
              <button
                onClick={incrementHandler}
                className="px-4 py-2 text-md  text-white rounded-lg bg-blue-500 hover:bg-blue-400 active:bg-blue-300">
                Increment
              </button>
            </div>
          )}
          <button
            onClick={toggleHandler}
            className="px-4 py-2 text-lg rounded-lg cursor-pointer bg-blue-500 text-white  hover:bg-blue-400 active:bg-blue-300">
            Toggle Counter
          </button>
        </main>
      )}
    </React.Fragment>
  );
};

export default Counter;
