import React, { useContext, useState } from "react";
import { COUNTER_CONTEXT } from "../App";
import Child from "./Child";

const Parent = () => {
  const { count, setCount } = useContext(COUNTER_CONTEXT);
  return (
    <div>
      <div className="border-8 border-indigo-500/50 p-32 rounded-xl">
        <div className="text-2xl mb-10 text-center">
          <h1 className="text-3xl">Parent</h1>
          <h1>{count}</h1>
        </div>
        <div>
          <Child />
        </div>
      </div>
    </div>
  );
};

export default Parent;
