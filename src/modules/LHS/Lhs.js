import React from "react";
import "./Lhs.scss";
import { useDispatch, useSelector } from "react-redux";
import {breedSelected} from '../../redux/actions/breedSelectedAction'

function Lhs() {
  const dispatch = useDispatch();
  const animalSelected = useSelector((state) => state.animalSelectedData)
  const result = useSelector((state) => state.initialData[animalSelected].info);
  // console.warn(result);

  const handleBreedSelect = (p) => {
    dispatch(breedSelected(p))
  }

  return (
    <>
      <div className="lhs-wraper">
        {result.map((item, i) => (
          <Breed key={i} item={item} i={i} />
        ))}
      </div>
    </>
  );


  function Breed(props) {

    const sbreed = useSelector((state) => state.breedSelectedData)
    // console.log(sbreed)

    return (
      <>
        <div className="breed-wraper">
          <p className={sbreed == props.i ? 'selected' : ''} onClick={() => handleBreedSelect(props.i)}>{props.item.Breed}</p>
        </div>
      </>
    );
  }
}

export default Lhs;