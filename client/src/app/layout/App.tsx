import { useState } from "react";
import Header from "./Header";
import {
  CssBaseline,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [darkMode, setdarkMode] = useState(false);
  const typeMode = darkMode ? "dark" : "light";
  const darkTheme = createTheme({
    palette: {
      mode: typeMode,
      background: {
        default: typeMode === "light" ? "#eaeaea" : "#121212",
      },
    },
  });
  function setTheme() {
    setdarkMode(!darkMode);
  }
  return (
    <ThemeProvider theme={darkTheme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <CssBaseline /> {/*full màn*/}
      <Header darkMode={darkMode} setTheme={setTheme} />
      <Container>
        <Outlet />
        {/* //Outlet in react-router-dom */}
      </Container>
    </ThemeProvider>
  );
}

export default App;
