import React, { useState } from "react";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  Divider,
  Drawer,
  IconButton,
  Link,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { lightGreen } from "@mui/material/colors";
import { flexbox } from "@mui/system";

interface IDrawerProps {
  drawerOpen: boolean;
  searchText: string;
  setDrawerOpen: (val: boolean) => void;
  setSearchText: (val: string) => void;
}

interface IUserData {
  name: string;
  email: string;
}
function SideDrawer({
  drawerOpen,
  searchText,
  setDrawerOpen,
  setSearchText,
}: IDrawerProps) {
  const [data, setData] = useState<IUserData[]>([
    {
      name: "Arpan",
      email: "arpan@gmail.com",
    },
    {
      name: "Matin",
      email: "Matin@gmail.com",
    },
    {
      name: "Smit",
      email: "Smit@gmail.com",
    },
    {
      name: "Mihir",
      email: "Mihir@gmail.com",
    },
  ]);

  return (
    <Drawer
      anchor={"left"}
      variant="persistent"
      PaperProps={{
        sx: { width: { md: "45%", lg: "25%" }, background: "rgb(79,136,121)" },
      }}
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
    >
      <Box
        //sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        sx={{ display: "flex", mb: 2 }}
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
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
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
          <IconButton onClick={() => setDrawerOpen(false)}>
            <ChevronRightIcon />
          </IconButton>
        </Avatar>
      </Box>
      <Divider sx={{ borderBottomWidth: 5 }} />
      <Box sx={{ display: "flex", flexDirection: "column", m: 4 }}>
        {data
          ? data.map((user) => {
              return (
                <Card
                  onClick={() => console.log("clicked")}
                  key={user.name}
                  sx={{
                    ":hover": { backgroundColor: "lightgoldenrodyellow" },
                    backgroundColor: "lightseagreen",
                    p: 2,
                    mb: 3,
                    borderRadius: 3,
                    display: "flex",
                  }}
                >
                  <CardActionArea
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      sx={{ width: 52, height: 60 }}
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                    />
                    <Box sx={{ ml: 2 }}>
                      <Typography variant="h5">{user.name}</Typography>
                      <Typography variant="body1">
                        Email:- {user.email}
                      </Typography>
                    </Box>
                  </CardActionArea>
                </Card>
              );
            })
          : [...Array(8)].map((e) => {
              return (
                <Box key={e} sx={{ m: 1 }}>
                  <Skeleton variant="rectangular" height={74} key={e} />
                </Box>
              );
            })}
      </Box>
    </Drawer>
  );
}

export default SideDrawer;
