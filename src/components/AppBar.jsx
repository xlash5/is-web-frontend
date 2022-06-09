import * as React from "react";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Drawer from '@mui/material/Drawer';

import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AppName = "My App";

export default ({ pages }) => {
  const navigate = useNavigate();
  const { token, logout } = useAuth();
  const [drawerState, setDrawerState] = React.useState(false);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  const handleCloseNavMenu = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <MuiAppBar position="static" style={{ backgroundColor: '#2F8F9D' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            {AppName}
          </Typography>
          <Drawer
            anchor='left'
            open={drawerState}
            onClose={() => setDrawerState(false)}
          >
            {pages?.map((page) => (
              <MenuItem
                key={page.label}
                onClick={() => handleCloseNavMenu(page.path)}
                sx={{
                  minWidth: "40vw",
                }}
              >
                <Typography textAlign="center">{page.label}</Typography>
              </MenuItem>
            ))}
            {!!token && (
              <MenuItem
                key={'logout'}
                onClick={logout}
                sx={{
                  minWidth: "40vw",
                }}
              >
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            )}
          </Drawer>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setDrawerState(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            {AppName}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages?.map((page) => (
              <Button
                key={page.label}
                onClick={() => handleCloseNavMenu(page.path)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.label}
              </Button>
            ))}
            {!!token && (
              <Button
                key={"logout"}
                onClick={logout}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {"logout"}
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
};
