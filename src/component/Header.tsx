import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
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
import { display } from "@mui/system";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [drawer, setDrawer] = React.useState<boolean>(false);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const list = () => (
    <Box
      //sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      sx={{ display: "flex", background: "" }}
    >
      <SearchIcon
        fontSize="large"
        sx={{
          width: "42px",
          mx: 1,
          mt: 3,
        }}
      />

      <TextField
        id="input-with-sx"
        margin="normal"
        size="medium"
        variant="outlined"
        sx={{
          backgroundColor: "white",
          borderRadius: "6px",
          border: "none",
          mt: 2,
        }}
      />
      <Avatar
        sx={{
          width: 42,
          height: 42,
          backgroundColor: "grey",
          marginLeft: "auto",
          mr: 2,
          mt: 3,
        }}
      >
        <IconButton onClick={() => setDrawer(false)}>
          <ChevronRightIcon />
        </IconButton>
      </Avatar>
      {/* <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
      {/* <Divider /> */}
    </Box>
  );

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
              onClick={() => setDrawer(true)}
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
            <Drawer
              anchor={"left"}
              variant="persistent"
              PaperProps={{
                sx: { width: "28%", background: "rgb(79,136,121)" },
              }}
              // sx={{ width: "500px" }}
              open={drawer}
              onClose={() => setDrawer(false)}
            >
              {list()}
            </Drawer>
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
