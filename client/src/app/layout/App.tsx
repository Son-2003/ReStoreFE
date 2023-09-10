import { useState } from "react";
import Catalog from "../../component/catalog/Catalog";
import Header from "./Header";
import {
  CssBaseline,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";

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
      <CssBaseline /> {/*full màn*/}
      <Header darkMode={darkMode} setTheme={setTheme} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
