import React from "react";  
import Toolbar from "./components/Toolbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Typography } from "@mui/material";
import DevView from "./components/DevView";
import "./App.css";

function Preview(props = {}) {
  const [dev, setDev] = React.useState(false);
  
  if (!window.VKPreviewToken) {
    return (
      <Box
        sx={{
          display: "grid"
        }}
      >
        
      </Box>
    );
  }
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => { 
    if (window.VKPreviewToken.isDev()) {
      setDev(true);
    }
  }, []);

  return (
    <>
      {
        dev ? <DevView/> : <></>
      }
    </>
  )
}

function App() { 
  const THEME = createTheme({
    palette: {
      mode: "dark"
    }
  });
  return (
    <ThemeProvider
      theme={THEME} 
    >
      <CssBaseline/>
      <Toolbar/>
      <nain>
        <Preview/>
      </nain>
    </ThemeProvider>
  );
}

export default App;
