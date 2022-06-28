import React, { memo } from "react";
import { Spinners } from "../icons";

const FullPageLoader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
      <Spinners />
      <h2 className="text-center text-white text-xl font-semibold">
        Loading...
      </h2>
    </div>
  );
};

export default memo(FullPageLoader);
