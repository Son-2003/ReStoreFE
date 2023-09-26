import { useState, useEffect } from "react";
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
import { useStoreContext } from "../context/StoreContext";
import { getCookie } from "../utils/util";
import agent from "../api/agent";
import LoadingComponent from "./LoadingComponent";

function App() {
  const { setBasket } = useStoreContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buyerId = getCookie("buyerId");
    if (buyerId) {
      agent.Basket.get()
        .then((basket) => setBasket(basket))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [setBasket]);

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

  if (loading) return <LoadingComponent message="Initialising app..." />;

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
