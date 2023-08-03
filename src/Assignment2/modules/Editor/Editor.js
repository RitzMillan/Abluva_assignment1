import React, { useEffect, useState } from "react";
import "./Editor.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "@mui/material/Button";
import { v4 as uuid } from 'uuid'

function Editor({value, setValue, version, setVersion}) {

  useEffect(()=>{
    localStorage.setItem('versionSystemData', JSON.stringify(version))
  },[version]);

  const handleClick = () => {
    setVersion((prev) => [
      {
        hash: uuid(),
        date: date,
        time: time,
        value: value
      },
      ...prev
    ])
  }

  let today = new Date();
  let date = today.getDate()+'/'+getMonthName()+'/'+today.getFullYear();
  let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

  function getMonthName() {
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return (
      month[today.getMonth()] 
    )
  }

  return (
    <>
      <div className="editor-wrapper">
        <h3>Editor</h3>
        <ReactQuill
          theme="snow"
          value={value}
          placeholder="Write something here"
          onChange={setValue}
        />
        <Button
          variant="outlined"
          onClick={handleClick}
          className="save-btn"
        >SAVE</Button>
      </div>
    </>
  );
}

export default Editor;

