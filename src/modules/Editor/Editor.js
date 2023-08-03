import React, { useState } from "react";
import "./Editor.scss";
import saveAs from "save-as";

function Editor({ setCascade }) {
  const [text, setText] = useState();

  const handleDownload = () => {
    let blob = new Blob([text], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(blob, "hello world.css");
  };

  return (
    <>
      <div className="editor-wrapper">
        <h3>CSS Editor</h3>
        <textarea
          type="textarea"
          placeholder="
          Write your CSS here
          button {
            height: 40px;
            width: 100px;
            background-color: white;
            border: 1px solid black;
            cursor: pointer;
          }"
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div className="btn-container">
          <button onClick={() => setCascade(text)}>Preview</button>
          <button onClick={handleDownload}>Download</button>
        </div>
      </div>
    </>
  );
}

export default Editor;
