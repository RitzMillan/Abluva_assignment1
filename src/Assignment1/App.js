import "./App.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Head from "./modules/Header/Header";
import Body from './modules/Body/Body'
import Foot from "./modules/Footer/Footer";
import Lhs from "./modules/LHS/Lhs";
import Rhs from "./modules/RHS/Rhs";

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={12} lg={12}>
            <div className="t-header">
              <Head />
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={1.5}>
            <div className="t-lhs">
              <Lhs />
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={8}>
            <div className="t-body"><Body /></div>
          </Grid>
          <Grid item xs={12} md={12} lg={2.5}>
            <div className="t-rhs">
              <Rhs />
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <div className="t-footer">
              <Foot />
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
