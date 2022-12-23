import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Logout, PersonAdd } from "@mui/icons-material";
import SideDrawer from "./SideDrawer";
import { display } from "@mui/system";

function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const list = () => (

  // );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "rgb(38,99,84)", display: "flex" }}
      >
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <IconButton
              size="large"
              edge="start"
              onClick={() => setDrawerOpen(true)}
              color="inherit"
              aria-label="menu"
              sx={{ mx: 2 }}
            >
              <Avatar sx={{ width: 62, height: 62, backgroundColor: "green" }}>
                <SearchIcon
                  fontSize="large"
                  sx={{
                    width: "42px",
                  }}
                />
              </Avatar>
            </IconButton>
            <SideDrawer
              drawerOpen={drawerOpen}
              setDrawerOpen={setDrawerOpen}
              searchText={searchText}
              setSearchText={setSearchText}
            />
          </Box>
          <Typography
            variant="h3"
            component="div"
            sx={{ flexGrow: 1, marginLeft: 2 }}
          >
            ChatMe
          </Typography>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ mr: 2, backgroundColor: "lightgreen" }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 42, height: 42, backgroundColor: "green" }}>
                M
              </Avatar>
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Add another account
            </MenuItem>

            <MenuItem>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
