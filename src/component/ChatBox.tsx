import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

function ChatBox() {
  return (
    <Box
      sx={{
        border: "2px solid black",
        minHeight: "390px",
        m: 1,
        overflow: "auto",
      }}
    >
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography
                variant="body1"
                sx={{
                  backgroundColor: "lightcoral",
                  width: "fit-content",
                  p: 1,
                  border: 1,
                  borderRadius: 2,
                }}
              >
                Brunch this weekend?
              </Typography>
            }
          />
        </ListItem>
        <ListItem
          sx={{
            width: "auto",
            float: "right",
            textAlign: "end",
          }}
        >
          <ListItemText
            primary={
              <Typography
                sx={{
                  backgroundColor: "lightcoral",
                  p: 1,
                  border: 1,
                  borderRadius: 2,
                }}
              >
                no arpan
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography
                variant="body1"
                sx={{
                  backgroundColor: "lightcoral",
                  width: "fit-content",
                  p: 1,
                  border: 1,
                  borderRadius: 2,
                }}
              >
                Brunch this weekend?
              </Typography>
            }
          />
        </ListItem>
        <ListItem
          sx={{
            width: "auto",
            float: "right",
            textAlign: "end",
          }}
        >
          <ListItemText
            primary={
              <Typography
                sx={{
                  backgroundColor: "lightcoral",
                  p: 1,
                  border: 1,
                  borderRadius: 2,
                }}
              >
                no arpan
              </Typography>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
}

export default ChatBox;
