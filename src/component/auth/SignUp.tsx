import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Typography,
  Avatar,
  Box,
  TextField,
  FormControlLabel,
  Button,
  Checkbox,
  Grid,
  Link,
  Snackbar,
  Alert,
} from "@mui/material";
import React, { useState } from "react";

interface IFile {
  url: string;
  name: string;
}
interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

function SignUp() {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [userImage, setUserImage] = useState<any>();
  const [userNameError, setUserNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passError, setPassError] = useState<boolean>(false);
  const [submit, setSubmit] = useState<boolean>(false);

  // const handleSubmit = () => {
  //   const isValid = true;
  //   if (isValid.result === "Error") {
  //     isValid.msg === "email" ? setEmailError(true) : setPassError(true);
  //     return;
  //   }

  //   setSubmit(true);
  // };

  const handleClose = () => setSubmit(false);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          top: "50%",
          border: 1,
          borderRadius: "16px",
          borderColor: "black",
          backgroundColor: "rgb(75,132,117)",
          padding: 3,
          opacity: "0.9",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "#044718", width: 70, height: 70 }}>
          <AccountCircleIcon fontSize="large" />
        </Avatar>
        <Typography component="h1" variant="h4">
          Sign up
        </Typography>
        <Box
          component="form"
          onSubmit={() => {
            console.log();
          }}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            variant="filled"
            error={userNameError}
            required
            sx={{
              backgroundColor: "white",
            }}
            fullWidth
            type="name"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
              setUserNameError(false);
            }}
            helperText={userNameError && "Please enter valid user name"}
            id="name"
            label="Name"
            autoFocus
          />
          <TextField
            margin="normal"
            variant="filled"
            error={emailError}
            required
            sx={{
              backgroundColor: "white",
            }}
            fullWidth
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(false);
            }}
            helperText={emailError && "Please enter valid Email"}
            id="email"
            label="Email Address"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            variant="filled"
            required
            sx={{
              backgroundColor: "white",
            }}
            error={passError}
            fullWidth
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
              setPassError(false);
            }}
            label="Password"
            helperText={passError && "Please enter valid 5 digit Password"}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            sx={{
              backgroundColor: "white",
              marginTop: "10px",
            }}
            fullWidth
            onChange={(e: any) => {
              console.log(e);
              setUserImage(e.target.files[0]);
              console.log(userImage);
            }}
            //helperText={passError && "Please enter valid 5 digit Password"}
            type="file"
          />
          <Button
            onClick={() => {
              console.log("opo");
            }}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            <Typography component="h1" variant="h6">
              Sign up
            </Typography>
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={submit}
        //anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={1000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%", backgroundColor: "lightgreen" }}
        >
          Success!
        </Alert>
      </Snackbar>
    </>
    // </Container>
  );
}

export default SignUp;
