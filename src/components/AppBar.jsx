import * as React from "react";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Drawer from '@mui/material/Drawer';

import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Palette from "../theme/Palette";
import LogoutIcon from '@mui/icons-material/Logout';
import useUserData from "../hooks/useUserData";

const AppName = "DBSocial";

export default ({ pages }) => {
  const navigate = useNavigate();
  const { token, logout } = useAuth();
  const [drawerState, setDrawerState] = React.useState(false);
  const [userData] = useUserData();

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  const handleCloseNavMenu = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <MuiAppBar position="static" style={{ backgroundColor: Palette.fourth }}>
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
            <div style={{
              backgroundColor: Palette.first,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingBottom: '10px',
              minHeight: '100vh',
            }}>
              {pages?.map((page) => (
                <MenuItem
                  key={page.label}
                  onClick={() => handleCloseNavMenu(page.path)}
                  sx={{
                    minWidth: "40vw",
                    backgroundColor: Palette.third,
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "#ffffff40",
                    borderRadius: "4px",
                    margin: "4px",
                  }}
                >
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
              {userData && (
                <Button
                  onClick={logout}
                  sx={{
                    margin: "5px",
                  }}
                  variant="outlined" endIcon={<LogoutIcon />}>
                  Logout
                </Button>
              )}
            </div>
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
            {userData && (
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
