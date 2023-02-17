import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { loadContacts } from "../api/chatApi";
import { IUserData } from "../@types/types";

interface IProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  selectUser: any;
}
function ChatContacts({ open, setOpen, selectUser }: IProps) {
  const [contacts, setContacts] = useState<IUserData[]>([]);
  useEffect(() => {
    (async () => {
      const result = await loadContacts();
      setContacts(result);
    })();
  }, []);
  return (
    <>
      <Box
        sx={{
          border: "1px solid black",
          width: { xs: "100%", md: "100%", lg: "36%" },
          borderRadius: 4,
          p: 2,
          display: open ? "block" : { md: "none", lg: "block" },
          bgcolor: "lightskyblue",
        }}
      >
        <Typography
          variant="h4"
          sx={{ display: "flex", justifyContent: "center", m: 1, p: 1 }}
        >
          My Chats
          <Avatar
            sx={{
              width: 42,
              height: 42,
              backgroundColor: "grey",
              marginLeft: "auto",
              mr: 2,
              display: { md: "block", lg: "none" },
            }}
          >
            <IconButton onClick={() => console.log(false)}>
              <ChevronRightIcon />
            </IconButton>
          </Avatar>
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 1,
            height: "450px",
            border: "2px solid black",
          }}
        >
          {contacts
            ? contacts.map((user) => {
                return (
                  <Card
                    onClick={() =>
                      selectUser({ name: user.name, email: user.email })
                    }
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
                        sx={{ width: 62, height: 70 }}
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                      />
                      <Box sx={{ ml: 2 }}>
                        <Typography variant="h5">{user.name}</Typography>
                        <Typography variant="body1">{user.message}</Typography>
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
      </Box>
    </>
  );
}

export default ChatContacts;
