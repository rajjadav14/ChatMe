import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { ISelectedUser } from "../@types/types";
import ChatContacts from "../component/ChatContacts";
import ChatPage from "../component/ChatPage";
import Header from "../component/Header";

function Home() {
  const [tabShow, setTabShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState<ISelectedUser>({
    name: "",
    email: "",
  });
  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          m: 4,
          justifyContent: "space-between",
          minHeight: "600px",
        }}
      >
        <ChatContacts
          open={tabShow}
          setOpen={setTabShow}
          selectUser={setSelectedUser}
        />
        <ChatPage selectedUser={selectedUser} />
      </Box>
    </>
  );
}

export default Home;
