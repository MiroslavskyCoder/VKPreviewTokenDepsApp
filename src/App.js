import React from "react";  
import Toolbar from "./components/Toolbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Typography } from "@mui/material"; 
import "./App.css";

function Preview(props = {}) { 
  
  if (!window.vkpt) {
    return (
      <Box
        sx={{
          display: "grid"
        }}
      >
        <Typography>
          Это не VKPreviewToken
        </Typography>
      </Box>
    );
  } 

  return (
    <> 
      <Typography>
        хУЙ
      </Typography>
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
