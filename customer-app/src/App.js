import "./App.css";
import "@fontsource/rajdhani/300.css";
import "@fontsource/rajdhani/400.css";
import "@fontsource/rajdhani/500.css";
import "@fontsource/rajdhani/600.css";
import "@fontsource/rajdhani/700.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import GoogleMapReact from "google-map-react";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: "rajdhani",
  },
});

const defaultProps = {
  center: {
    lat: 17.3658172,
    lng: 78.4183459,
  },
  zoom: 11,
};

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Router>
          <Routes />
          {/* <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyByFtPdJCcqtYSu_s59EuUSe-mXNH89UzI",
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          ></GoogleMapReact> */}
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
