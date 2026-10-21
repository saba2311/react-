import React from "react";
import { UseStateCounter } from "../../components/usestate_task/UseStateCounter";
import UseReducerCounter from "../../components/usereducer_task/UseReducerCounter";
const Counter = () => {
  return (
    <div>
      <UseStateCounter></UseStateCounter>
      <UseReducerCounter></UseReducerCounter>
    </div>
  );
};

export default Counter;