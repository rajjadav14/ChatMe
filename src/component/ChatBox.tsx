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
import React, { useEffect, useState } from "react";
import { loadChatBox } from "../api/chatApi";

function ChatBox({ selectedUser }: any) {
  const us1 = "arpan@gmail.com";
  const [chats, setChats] = useState([{}]);

  useEffect(() => {
    (async () => {
      const result = await loadChatBox(selectedUser.email);
      setChats(result);
    })();
  }, [selectedUser.email]);

  // const chats: any = [
  //   {
  //     _id: "63baf99804c871742443bf58",
  //     sender: "arpan@gmail.com",
  //     receiver: "smit@gmail.com",
  //     content: "Hello Smit, how are you?",
  //     date_time: "2023-01-08T17:12:56.342Z",
  //   },
  //   {
  //     _id: "63baf9af04c871742443bf59",
  //     sender: "arpan@gmail.com",
  //     receiver: "smit@gmail.com",
  //     content: "Where are you now?",
  //     date_time: "2023-01-08T17:13:19.726Z",
  //   },
  //   {
  //     _id: "63baf9b904c871742443bf5a",
  //     sender: "arpan@gmail.com",
  //     receiver: "smit@gmail.com",
  //     content: "Are you ok?",
  //     date_time: "2023-01-08T17:13:29.926Z",
  //   },
  //   {
  //     _id: "63c155c530a796dac457686d",
  //     sender: "smit@gmail.com",
  //     receiver: "arpan@gmail.com",
  //     content: "yus i am ok",
  //     date_time: "2023-01-13T12:59:49.917Z",
  //   },
  //   {
  //     _id: "63c155c530a796dac457686d",
  //     sender: "smit@gmail.com",
  //     receiver: "arpan@gmail.com",
  //     content: "what about you",
  //     date_time: "2023-01-13T12:59:49.917Z",
  //   },
  //   {
  //     _id: "63c155c530a796dac457686d",
  //     sender: "smit@gmail.com",
  //     receiver: "arpan@gmail.com",
  //     content: "where are you",
  //     date_time: "2023-01-13T12:59:49.917Z",
  //   },
  // ];

  return (
    <Box
      sx={{
        border: "2px solid black",
        minHeight: "390px",
        maxHeight: "400px",
        m: 1,
        overflow: "auto",
      }}
    >
      <List>
        {chats ? (
          chats.map((chat: any) => {
            if (chat.sender !== us1) {
              return (
                <ListItem key={chat.sender}>
                  <ListItemAvatar>
                    <Avatar
                      alt="Rems Sharp"
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
                        {chat.content}
                      </Typography>
                    }
                  />
                </ListItem>
              );
            } else {
              return (
                <ListItem
                  key={chat.sender}
                  sx={{
                    textAlign: "end",
                  }}
                >
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          backgroundColor: "lightcoral",
                          width: "fit-content",
                          float: "right",
                          p: 1,
                          border: 1,
                          borderRadius: 2,
                        }}
                      >
                        {chat.content}
                      </Typography>
                    }
                  />
                </ListItem>
              );
            }
          })
        ) : (
          <h1>...Loading</h1>
        )}
      </List>
    </Box>
  );
}

export default ChatBox;
