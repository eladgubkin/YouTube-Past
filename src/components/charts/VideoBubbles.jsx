import React, { useContext, useEffect } from "react";
import { ChartsContext } from "../../contexts/ChartsContext";

export const VideoBubbles = () => {
  const { videoBubblesData } = useContext(ChartsContext);

  return (
    <>
      <button
        className="bg-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium m-5"
        onClick={() => console.log(videoBubblesData)}
      >
        VideoBubbles
      </button>
    </>
  );
};
