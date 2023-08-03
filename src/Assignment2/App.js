import React, { useState } from "react";
import "./App.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Editor from "./modules/Editor/Editor";
import Versions from "./modules/Versions/Versions";

function App() {

  const [value, setValue] = useState("");
  const [version, setVersion] = useState(getLocal())

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={12} lg={6}>
            <div className="Editor">
              <Editor value={value} setValue={setValue} version={version} setVersion={setVersion} />
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <div className="Versions">
              <Versions value={value} setValue={setValue} version={version} setVersion={setVersion} />
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;

//Get data from localstorage
const getLocal = () => {
  let list = localStorage.getItem('versionSystemData')
  if(list){
      return JSON.parse(localStorage.getItem('versionSystemData'))
  }
  else {
      return []
  }
}