import React from "react";  
import Toolbar from "./components/Toolbar";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import "./App.css";

function Preview() {

  if (!window.VKPreviewToken) {
    return <></>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    if (window.VKPreviewToken.isActiveSession()) {
      
    }
  }, []);

  return (
    <>
      
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
