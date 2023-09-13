import { List, ShoppingCart } from "@mui/icons-material";
import {
  Toolbar,
  AppBar,
  Typography,
  Switch,
  ListItem,
  ListItemText,
  IconButton,
  Badge,
  Box,
} from "@mui/material";

import { FC } from "react";
import { NavLink } from "react-router-dom";

const midLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];

const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

const navStyles = {
  color: "inherit",
  typography: "h6",
  "&:hover": {
    color: "secondary.main",
  },
  "&.active": {
    color: "text.secondary",
  },
  textDecoration: "none",
};

interface HeaderProps {
  darkMode: boolean;
  setTheme: () => void;
}

const Header: FC<HeaderProps> = ({ darkMode, setTheme }) => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" component={NavLink} to={"/"} sx={navStyles}>
            RE-Store
          </Typography>
          <Switch checked={darkMode} onChange={setTheme}></Switch>
        </Box>

        <ul style={{ display: "flex" }}>
          {midLinks.map(({ title, path }) => (
            <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </ul>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
            <Badge badgeContent="4" color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <ul style={{ display: "flex" }}>
            {rightLinks.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </ul>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
