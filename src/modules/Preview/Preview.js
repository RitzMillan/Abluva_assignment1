import React, { useEffect } from "react";
import "./Preview.scss";

function Preview({cascade}) {
  let htmlcode = `
  <div style="height: 340px; width: 390px; display: flex; align-items: center; justify-content: center;">
    <button>Button</button>
  </div>`;

  let csscode = `
  button {
    height: 40px;
    width: 100px;
    background-color: white;
    border: 1px solid black;
    cursor: pointer;
  }`;

  useEffect(() => {
    let output = document.getElementById("output");
    output.contentDocument.body.innerHTML =
      htmlcode + "<style>" + cascade + "</style>";
  }, [cascade]);

  return (
    <>
      <div className="preview-wrapper">
        <h3>Preview</h3>
        <iframe
          title="output"
          id="output"
          className="preview-container"
        ></iframe>
      </div>
    </>
  );
}

export default Preview;
