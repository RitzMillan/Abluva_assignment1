import React, { useState } from "react";
import "./Versions.scss";
import Modal from "./Modal";

function Versions({ value, setValue, version, setVersion }) {
  const [isOpen, setIsOpen] = useState(false);
  const [temp, setTemp] = useState();

  const handleClick = (item) => {
    if (value) {
      if (value === item.value) {
        setValue(item.value);
      } else {
        setTemp(item.value)
        setIsOpen(true);
      }
    } else {
      setValue(item.value);
    }
  };

  return (
    <>
      <div className="versions-wrapper">
        <h3>Versions</h3>
        {version.map((item, i) => (
          <div
            key={i}
            className="version-item"
            onClick={() => handleClick(item)}
          >
            <div>{item.hash}</div>
            <div>
              {item.date} {item.time}
            </div>
          </div>
        ))}
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} override={()=> setValue(temp)} />
      </div>
    </>
  );
}

export default Versions;
