import React from "react";
import "./Header.scss";
import Button from "@mui/material/Button";
import { animalSelected } from "../../redux/actions/animalSelectedAction";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const animal = useSelector((state) => state.animalSelectedData);

  const handleAnimalSelect = (i) => {
    dispatch(animalSelected(i));
  };

  return (
    <>
      <div className="header-wrapper">
        <div>
          <h3>Hello Pet Parents</h3>
        </div>
        <div>
          <Button
            variant={Number(animal) === 0 ? "outlined" : "text"}
            startIcon={""}
            onClick={() => handleAnimalSelect(0)}
          >
            Cats
          </Button>
          <Button
            variant={Number(animal) === 1 ? "outlined" : "text"}
            startIcon={""}
            onClick={() => handleAnimalSelect(1)}
          >
            Dogs
          </Button>
          <Button
            variant={Number(animal) === 2 ? "outlined" : "text"}
            startIcon={""}
            onClick={() => handleAnimalSelect(2)}
          >
            Birds
          </Button>
        </div>
      </div>
    </>
  );
}

export default Header;
