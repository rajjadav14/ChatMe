import SendIcon from "@mui/icons-material/Send";
import {
  Box,
  FormControl,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import ChatBox from "./ChatBox";

function ChatPage({ selectedUser }: any) {
  return (
    <Box
      sx={{
        border: 2,
        width: "58%",
        backgroundColor: "lightsalmon",
        display: { xs: "none", md: "none", lg: "block" },
      }}
    >
      <Typography variant="h3" sx={{ backgroundColor: "lightgreen", m: 2 }}>
        {selectedUser.name || "Hello "}
      </Typography>
      <Box
        sx={{
          backgroundColor: "lightgreen",

          p: 2,
          minHeight: "475px",
          display: "flex",
          flexDirection: "column-reverse",
        }}
      >
        <FormControl variant="standard">
          <ChatBox selectedUser={selectedUser} />
          <TextField
            InputProps={{
              endAdornment: (
                <IconButton color="primary" aria-label="add an alarm">
                  <SendIcon />
                </IconButton>
              ),
            }}
            sx={{ backgroundColor: "white", m: 1 }}
          />
        </FormControl>
      </Box>
    </Box>
  );
}

export default ChatPage;
