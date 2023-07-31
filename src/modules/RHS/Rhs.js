import React from "react";
import "./Rhs.scss";
import { useSelector } from "react-redux";

function Rhs() {
  const animal = useSelector((state) => state.animalSelectedData);
  const about = useSelector((state) => state.initialData[animal].about);

  return (
    <>
      <div className="rhs-wraper">
        <p>{about}</p>
      </div>
    </>
  );
}

export default Rhs;
