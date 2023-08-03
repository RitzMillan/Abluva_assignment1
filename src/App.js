import React, { useState } from "react";
import "./App.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Editor from './modules/Editor/Editor'
import Preview from './modules/Preview/Preview'

function App() {

  const [cascade, setCascade] = useState();


  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={12} lg={6}>
            <div className="Editor">
              <Editor setCascade={setCascade} />
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <div className="Versions">
              <Preview cascade={cascade} />
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;