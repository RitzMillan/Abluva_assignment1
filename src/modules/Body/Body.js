import React from "react";
import "./Body.scss";
import { useSelector } from "react-redux";

function Body() {

  const animalSelected = useSelector((state) => state.animalSelectedData)
  const sbreed = useSelector((state) => state.breedSelectedData)
  const result = useSelector((state) => state.initialData[animalSelected].info[sbreed].img);
  // console.warn(result);

  return (
    <>
      <div className="body-wraper">
        <img src={result} alt="animalimage"></img>
      </div>
    </>
  );
}

export default Body;
