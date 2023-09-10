import { Toolbar, AppBar, Typography, Switch } from "@mui/material";

import { FC } from "react";

interface HeaderProps {
  darkMode: boolean;
  setTheme: () => void;
}

const Header: FC<HeaderProps> = ({ darkMode, setTheme }) => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h5">RE-Store</Typography>
        <Switch checked={darkMode} onChange={setTheme}></Switch>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
